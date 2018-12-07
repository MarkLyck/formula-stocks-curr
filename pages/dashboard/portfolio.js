import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import fecha from 'fecha'
import { planIds, marketIds } from 'common/constants'
import hasPermissions from 'common/utils/hasPermissions'
import PlanContext from 'common/Contexts/PlanContext'
import withDashboard from 'components/Dashboard/withDashboard'
import withCharts from 'ui-components/Charts/withCharts'
import { TableBody, TableRow, TableHeadCell } from 'ui-components/Table'
import PortfolioHeader from 'components/Dashboard/Portfolio/PortfolioHeader'
import AnnualReturns from 'components/Dashboard/Portfolio/AnnualReturns'
import PortfolioItem from 'components/Dashboard/Portfolio/PortfolioItem'
import StatisticsContainer from 'ui-components/statisticsContainer'
import StatisticsBox from 'ui-components/statisticsContainer/StatisticsBox'
import PortfolioLoader from 'components/Dashboard/Portfolio/Loader'
import LoadingError from 'ui-components/Error/LoadingError'
import PlanPermissionError from 'ui-components/Error/PlanPermissionError'

import { PortfolioTable, PortfolioTableHead, LastUpdated, DateLabel } from 'components/Dashboard/Portfolio/styles'

const PORTFOLIO_QUERY = gql`
    query plan($id: ID!) {
        Plan(id: $id) {
            name
            portfolio
            info
            launchStatistics
            statistics
            portfolioYields
        },
        DJIA: Market(id: "${marketIds.DJIA}") {
            name
            pricesSince2009
        }
    }
`

class Portfolio extends Component {
  render() {
    const { amCharts4Loaded, serialChartsReady, pieChartsReady, userPlan, userType } = this.props

    return (
      <PlanContext.Consumer>
        {({ planName }) => (
          <Query query={PORTFOLIO_QUERY} variables={{ id: planIds[planName] }}>
            {({ loading, error, data }) => {
              const hasPlanPerms = hasPermissions(planName, userPlan, userType)
              if (loading) return <PortfolioLoader />
              if (error || !data || !data.Plan || !data.DJIA) return <LoadingError error={error} />
              const { Plan, DJIA } = data

              const lastRebalanceDate = Plan.portfolioYields[Plan.portfolioYields.length - 1].date

              return (
                <React.Fragment>
                  <PortfolioHeader
                    portfolioYields={Plan.portfolioYields}
                    marketPrices={DJIA.pricesSince2009}
                    portfolio={Plan.portfolio}
                    planName={Plan.name}
                    amCharts4Loaded={amCharts4Loaded}
                    serialChartsReady={serialChartsReady}
                    pieChartsReady={pieChartsReady}
                  />
                  <AnnualReturns portfolioYields={Plan.portfolioYields} />
                  {hasPlanPerms === false && <PlanPermissionError planName={planName} />}
                  {hasPlanPerms === true && (
                    <PortfolioTable>
                      <PortfolioTableHead>
                        <TableRow>
                          <TableHeadCell className="name">Name</TableHeadCell>
                          <TableHeadCell className="allocation">Allocation</TableHeadCell>
                          <TableHeadCell className="return" tooltip="Percent increase from Cost basis to Last price.">
                            Return
                          </TableHeadCell>
                          <TableHeadCell
                            className="cost-basis"
                            tooltip="Averaged purchase price adjusted for dividends earned."
                          >
                            Cost basis
                          </TableHeadCell>
                          <TableHeadCell
                            className="last-price"
                            tooltip="Latest price available for stocks. Updated End of Day."
                          >
                            Last price
                          </TableHeadCell>
                          <TableHeadCell className="days-owned">Days owned</TableHeadCell>
                        </TableRow>
                      </PortfolioTableHead>
                      <TableBody>
                        {Plan.portfolio.map(stock => (
                          <PortfolioItem stock={stock} key={stock.ticker} serialChartsReady={serialChartsReady} />
                        ))}
                      </TableBody>
                    </PortfolioTable>
                  )}
                  <StatisticsContainer>
                    <StatisticsBox title="Annual growth" value={`${Plan.statistics.CAGR}%`} icon="chart-line" />
                    <StatisticsBox
                      title="Sold with profit"
                      value={`${Plan.statistics.winRatio.toFixed(2)}%`}
                      icon="chart-pie"
                    />
                    <StatisticsBox title="Holdings" value={Plan.portfolio.length} icon="list-ul" />
                    <StatisticsBox
                      title="Percent in cash"
                      value={`${Plan.launchStatistics.percentInCash.toFixed(2)}%`}
                      icon="dollar-sign"
                    />
                  </StatisticsContainer>
                  <LastUpdated>
                    Last rebalanced:{' '}
                    <DateLabel>
                      {fecha.format(
                        new Date(lastRebalanceDate.year, lastRebalanceDate.month - 1, lastRebalanceDate.day),
                        'MMM D, YYYY'
                      )}
                    </DateLabel>
                  </LastUpdated>
                </React.Fragment>
              )
            }}
          </Query>
        )}
      </PlanContext.Consumer>
    )
  }
}

export default withDashboard(withCharts(Portfolio, { version: 4, loadPieChart: true }))
