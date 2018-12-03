import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import hasPermissions from 'common/utils/hasPermissions'
import withDashboard from 'components/Dashboard/withDashboard'
import LoadingError from 'ui-components/Error/LoadingError'
import PlanPermissionError from 'ui-components/Error/PlanPermissionError'
import Report from 'components/Dashboard/Reports/Report'

const REPORT_QUERY = gql`
  query report($id: ID!) {
    StockReport(id: $id) {
      date
      name
      stockPrice
      scores
      ticker
    }
  }
`

class Reports extends Component {
  render() {
    return (
      <Query query={REPORT_QUERY} variables={{ id: 'cjp5v509803n2011632hft9zq' }}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading...</p>
          if (error || !data) return <LoadingError error={error} />

          return <Report report={data.StockReport} />
        }}
      </Query>
    )
  }
}

export default withDashboard(Reports)
