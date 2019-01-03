import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { format } from 'date-fns'
import Router from 'next/router'

import PlanContext from 'common/Contexts/PlanContext'
import { planIds } from 'common/constants'
import { isClient, usingMocks } from 'common/utils/featureTests'
import hasPermissions from 'common/utils/hasPermissions'

import withDashboard from 'components/Dashboard/withDashboard'
import withCharts from 'ui-components/Charts/withCharts'
import StatisticsContainer from 'ui-components/statisticsContainer'
import StatisticsBox from 'ui-components/statisticsContainer/StatisticsBox'
import Suggestion from 'components/Dashboard/Suggestions/Suggestion'
import SuggestionsLoader from 'components/Dashboard/Suggestions/Loader'
import LoadingError from 'ui-components/Error/LoadingError'
import PermissionError from 'ui-components/Error/PermissionError'

import { SuggestionsList, LastUpdated, DateLabel } from 'components/Dashboard/Suggestions/styles'

const SUGGESTIONS_QUERY = gql`
  query plan($id: ID!, $tickers: [String!]) {
    Plan(id: $id) {
      suggestions
      launchStatistics
      statistics
      updatedAt
    }
    allStocks(filter: { ticker_in: $tickers }) {
      ticker
      latestPrice
      sixMonthsPrices
    }
  }
`

const STOCKS_QUERY = gql`
  query stocks($tickers: [String!]) {
    allStocks(filter: { ticker_in: $tickers }) {
      ticker
      latestPrice
      sixMonthsPrices
    }
  }
`

class Suggestions extends Component {
  state = { tickers: [] }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPlan !== prevProps.selectedPlan) {
      this.props.refetch({ id: planIds[this.props.selectedPlan.toUpperCase()] })
    }
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the selectedPlan and plan are the same.
    if (nextProps.Plan) {
      return nextProps.selectedPlan === nextProps.Plan.name
    }
    return true
  }

  render() {
    const { amCharts4Loaded, user, history } = this.props

    return (
      <PlanContext.Consumer>
        {({ planName }) => (
          <Query query={SUGGESTIONS_QUERY} variables={{ id: planIds[planName] }}>
            {({ loading, error, data }) => {
              const suggestionsType = isClient && Router.router.pathname.includes('/trades') ? 'Trades' : 'Suggestions'
              if (loading) return <SuggestionsLoader suggestionsType={suggestionsType} />
              if (!usingMocks && (error || !data)) return <LoadingError error={error} />

              const plan = data.Plan

              const listStatTitle = suggestionsType === 'Trades' ? 'Trades this month' : 'Suggestions'
              const hasPlanPerms = hasPermissions(planName, user)

              const suggestions = plan.suggestions
                .filter(sugg => {
                  if (Router.router.pathname.includes('trades')) return sugg.model
                  return !sugg.model || sugg.action === 'SELL'
                })
                .sort(sugg => (sugg.action === 'SELL' ? 1 : -1))

              return (
                <React.Fragment>
                  <StatisticsContainer>
                    <StatisticsBox title="Annual growth" value={`${plan.statistics.CAGR}%`} icon="chart-line" />
                    <StatisticsBox
                      title="Sold with profit"
                      value={`${plan.statistics.winRatio.toFixed(2)}%`}
                      icon="chart-pie"
                    />
                    <StatisticsBox title={listStatTitle} value={suggestions.length} icon="list-ul" />
                    <StatisticsBox
                      title="Percent in cash"
                      value={`${plan.launchStatistics.percentInCash.toFixed(2)}%`}
                      icon="dollar-sign"
                    />
                  </StatisticsContainer>
                  {hasPlanPerms === false && <PermissionError planName={planName} history={history} user={user} />}
                  {hasPlanPerms === true && (
                    <SuggestionsList>
                      <Query
                        query={STOCKS_QUERY}
                        variables={{
                          tickers: suggestions.map(sugg => sugg.ticker),
                        }}
                      >
                        {({ loading, error, data }) => {
                          const allStocks = data && data.allStocks ? data.allStocks : []
                          return suggestions.map(sugg => (
                            <Suggestion
                              suggestion={sugg}
                              stock={allStocks.filter(stock => stock.ticker === sugg.ticker)[0] || null}
                              loading={loading}
                              error={error}
                              key={sugg.ticker + planName}
                              amCharts4Loaded={amCharts4Loaded}
                              suggestionsType={suggestionsType}
                            />
                          ))
                        }}
                      </Query>
                    </SuggestionsList>
                  )}
                  {plan.updatedAt && (
                    <LastUpdated>
                      Last updated: <DateLabel>{format(new Date(plan.updatedAt), 'MMM D, YYYY')}</DateLabel>
                    </LastUpdated>
                  )}
                </React.Fragment>
              )
            }}
          </Query>
        )}
      </PlanContext.Consumer>
    )
  }
}

Suggestions.propTypes = {
  serialChartsReady: PropTypes.bool,
  pieChartsReady: PropTypes.bool,
  chartError: PropTypes.bool,
}

export default withDashboard(withCharts(Suggestions, { version: 4 }))
