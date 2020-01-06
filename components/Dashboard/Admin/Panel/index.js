import React from 'react'
import { format } from 'date-fns'
import { useQuery } from '@apollo/react-hooks'
import { statisticsId } from 'common/constants'
import withDashboard from 'components/Dashboard/withDashboard'
import withCharts from 'ui-components/Charts/withCharts'
import StatisticsContainer from 'ui-components/statisticsContainer'
import StatisticsBox from 'ui-components/statisticsContainer/StatisticsBox'
import LoadingError from 'ui-components/Error/LoadingError'
import GenericLoader from 'ui-components/Loader'
import DAUGraph from 'components/Dashboard/Admin/Panel/DAUGraph'
import VisitorStatistics from 'components/Dashboard/Admin/Panel/VisitorStatistics'
import VisitorList from 'components/Dashboard/Admin/Panel/VisitorList'
import { USERS_QUERY } from 'common/queries'

const date = new Date()
date.setDate(date.getDate() - 30)
const date30DaysAgo = format(date, 'yyyy-MM-dd')

// const PANEL_QUERY = gql`
//   query {
//       visitorCount: _allVisitorsMeta {
//         count
//       }
//       allVisitors(filter: {
//         createdAt_gte: "${date30DaysAgo}",
//       }) {
//           id
//           createdAt
//           location
//           device
//           referrer
//       }
//       allUsers {
//         createdAt
//         type
//         stripeSubscription
//       }
//       Statistics(id: "${statisticsId}") {
//         id
//         urls
//         devices
//         browsers
//         countries
//         os
//       }
//   }
// `

const uniqueVisitsFromOldSite = 0
const getPayingSubscribers = allUsers => allUsers && allUsers.filter(user => user.type === 'subscriber').length
const getActiveTrials = allUsers => allUsers && allUsers.filter(user => user.type === 'trial').length
const getTrialConversionRate = (allUsers, activeTrials) => {
  if (!allUsers) return 0
  const realUsers = allUsers.filter(user => user.type !== 'admin' && user.type !== 'demo')
  const stayedThroughTrial = realUsers.filter(user => {
    // if user cancelled AFTER the trial ended.
    // or if the user is currently a paying subscriber
    const { stripeSubscription } = user
    if (stripeSubscription) {
      if (stripeSubscription.canceled_at > stripeSubscription.trial_end) return true
      if (!stripeSubscription.canceled_at && user.type === 'subscriber') return true
    } else {
      return true
    }
    return false
  })

  // subtract active trials from the allUsers length as we don't know if they'll stay or not.
  const conversionRate = (stayedThroughTrial.length / (realUsers.length - activeTrials)) * 100
  return conversionRate.toFixed(2)
}

const Overview = ({ amCharts4Loaded }) => {
  const { loading, error, data } = useQuery(USERS_QUERY)
  if (loading) return <GenericLoader />
  if (error) return <LoadingError error={error} />

  const { allUsers, allVisitors, visitorCount, Statistics } = data
  const uniqueVisitors = visitorCount ? visitorCount.count + uniqueVisitsFromOldSite : ''
  const activeTrials = getActiveTrials(allUsers)

  return (
    <React.Fragment>
      <StatisticsContainer>
        <StatisticsBox title="Unique visitors" value={uniqueVisitors} icon="users" />
        <StatisticsBox title="Subscribers" value={getPayingSubscribers(allUsers)} icon="flask" />
        <StatisticsBox title="Trials" value={activeTrials} icon="hourglass-half" />
        <StatisticsBox
          title="Trial conversion rate"
          value={`${getTrialConversionRate(allUsers, activeTrials)}%`}
          icon="hourglass-end"
        />
      </StatisticsContainer>
      <DAUGraph visitors={[]} users={allUsers} amCharts4Loaded={amCharts4Loaded} />
      {/* <VisitorStatistics statistics={Statistics} amCharts4Loaded={amCharts4Loaded} /> */}
      {/* <VisitorList
        visitors={
          allVisitors &&
          allVisitors
            .slice()
            .reverse()
            .slice(0, 50)
        }
      /> */}
    </React.Fragment>
  )
}

export default withCharts(Overview, { version: 4 })
