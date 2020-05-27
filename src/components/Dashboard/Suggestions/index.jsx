import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import Router from 'next/router'

import PlanContext from '~/common/Contexts/PlanContext'
import { planIds } from '~/common/constants'
import { isBrowser, usingMocks } from '~/common/utils/featureTests'
import hasPermissions from '~/common/utils/hasPermissions'

import withDashboard from '~/components/Dashboard/withDashboard'
import withCharts from '~/ui-components/Charts/withCharts'
import StatisticsContainer from '~/ui-components/statisticsContainer'
import StatisticsBox from '~/ui-components/statisticsContainer/StatisticsBox'
import Suggestion from '~/components/Dashboard/Suggestions/Suggestion'
import SuggestionsLoader from '~/components/Dashboard/Suggestions/Loader'
import LoadingError from '~/ui-components/Error/LoadingError'
import PermissionError from '~/ui-components/Error/PermissionError'
import { SIGNALS_QUERY, SIMPLE_BACKTESTED_STATISTICS, CASH_PERCENT } from '~/common/queries'
import { SuggestionsList, LastUpdated, DateLabel } from '~/components/Dashboard/Suggestions/styles'

const Signals = ({ amCharts4Loaded, user, history, activePlan }) => {
  const type = isBrowser && Router.router.pathname.includes('/trades') ? 'trade' : 'suggestion'
  const { loading, error, data } = useQuery(SIGNALS_QUERY, {
    variables: { planName: activePlan, type },
  })
  const {
    loading: statisticsLoading,
    error: statisticsError,
    data: statisticsData,
  } = useQuery(SIMPLE_BACKTESTED_STATISTICS, { variables: { planName: activePlan } })
  const { loading: cashLoading, error: cashError, data: cashData } = useQuery(CASH_PERCENT, {
    variables: { planName: activePlan },
  })

  if (loading || statisticsLoading) return <SuggestionsLoader suggestionsType={type} />
  if (error || !data) return <LoadingError error={error} />

  const signals = data.signalsList.items
  console.log('signals: ', signals)

  const listStatTitle = type === 'trade' ? 'Trades this month' : 'Suggestions'
  const hasPlanPerms = hasPermissions(activePlan, user)
  const lastUpdated = signals && signals[0] && signals[0].createdAt

  return (
    <React.Fragment>
      <StatisticsContainer>
        <StatisticsBox title="Annual growth" value={`${statisticsData.plan.statistics.cAGR}%`} icon="chart-line" />
        <StatisticsBox
          title="Sold with profit"
          value={`${statisticsData.plan.statistics.winLossRatio.toFixed(2)}%`}
          icon="chart-pie"
        />
        <StatisticsBox title={listStatTitle} value={signals.length} icon="list-ul" />
        <StatisticsBox
          title="Percent in cash"
          value={
            cashData && cashData.portfolioHoldingsList.items[0]
              ? `${cashData.portfolioHoldingsList.items[0].percentageWeight.toFixed(2)}%`
              : '%'
          }
          icon="dollar-sign"
        />
      </StatisticsContainer>
      {hasPlanPerms === false && <PermissionError planName={activePlan} history={history} user={user} />}
      {hasPlanPerms === true && (
        <SuggestionsList>
          {signals.map((sugg) => (
            <Suggestion
              suggestion={sugg}
              loading={loading}
              error={error}
              key={sugg.ticker + activePlan}
              amCharts4Loaded={amCharts4Loaded}
              suggestionsType={type}
            />
          ))}
        </SuggestionsList>
      )}
      {lastUpdated && (
        <LastUpdated>
          Last updated: <DateLabel>{format(new Date(lastUpdated), 'MMM D, YYYY')}</DateLabel>
        </LastUpdated>
      )}
    </React.Fragment>
  )
}

// class Suggestions extends Component {
//   state = { tickers: [] }

//   componentDidUpdate(prevProps) {
//     if (this.props.selectedPlan !== prevProps.selectedPlan) {
//       this.props.refetch({ id: planIds[this.props.selectedPlan.toUpperCase()] })
//     }
//   }

//   shouldComponentUpdate(nextProps) {
//     // Only update if the selectedPlan and plan are the same.
//     if (nextProps.Plan) {
//       return nextProps.selectedPlan === nextProps.Plan.name
//     }
//     return true
//   }

//   render() {

//     // const suggestions = plan.suggestions
//     //         .filter(sugg => {
//     //           if (Router.router.pathname.includes('trades')) return sugg.model
//     //           return !sugg.model || sugg.action === 'SELL'
//     //         })
//     //         .sort(sugg => (sugg.action === 'SELL' ? 1 : -1))

//   }
// }

// Suggestions.propTypes = {
//   serialChartsReady: PropTypes.bool,
//   pieChartsReady: PropTypes.bool,
//   chartError: PropTypes.bool,
// }

export default withCharts(Signals, { version: 4 })
