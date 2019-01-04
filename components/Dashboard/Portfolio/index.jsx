import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { format } from 'date-fns'
import { planIds, marketIds } from 'common/constants'
import hasPermissions from 'common/utils/hasPermissions'
import PlanContext from 'common/Contexts/PlanContext'
import withCharts from 'ui-components/Charts/withCharts'
import { TableBody, TableRow, TableHeadCell } from 'ui-components/Table'
import PortfolioHeader from './PortfolioHeader'
import AnnualReturns from './AnnualReturns'
import PortfolioItem from './PortfolioItem'
import Loader from 'ui-components/Loader/Small'
import StatisticsContainer from 'ui-components/statisticsContainer'
import StatisticsBox from 'ui-components/statisticsContainer/StatisticsBox'
import PortfolioLoader from 'components/Dashboard/Portfolio/Loader'
import LoadingError from 'ui-components/Error/LoadingError'
import PermissionError from 'ui-components/Error/PermissionError'

import {
  PortfolioTable,
  PortfolioTableHead,
  LastUpdated,
  DateLabel,
  LoadingBox,
} from 'components/Dashboard/Portfolio/styles'

const PORTFOLIO_QUERY = gql`
    query plan($id: ID!) {
        Plan(id: $id) {
            name
            portfolio
            info
            launchStatistics
            statistics
            portfolioYields
            updatedAt
        },
        DJIA: Market(id: "${marketIds.DJIA}") {
            name
            pricesSince2009
        }
    }
`

class Portfolio extends Component {
  render() {
    const { amCharts4Loaded, user, history } = this.props

    return (
      <PlanContext.Consumer>
        {({ planName }) => (
          <Query query={PORTFOLIO_QUERY} variables={{ id: planIds[planName] }}>
            {({ loading, error, data }) => {
              const hasPlanPerms = hasPermissions(planName, user)
              if (loading) return <PortfolioLoader />
              if (error || !data || !data.Plan || !data.DJIA) return <LoadingError error={error} />
              const { Plan, DJIA } = data

              let totalBalance = 0
              const balanceMap = Plan.portfolio.reduce((acc, curr) => {
                if (curr.ticker !== 'CASH') {
                  acc[curr.ticker] = curr.number_held * curr.latest_price
                } else {
                  acc[curr.ticker] = curr.number_held
                }
                totalBalance += acc[curr.ticker]

                return acc
              }, {})

              const allocationMap = Object.entries(balanceMap).reduce((acc, [ticker, balance]) => {
                acc[ticker] = (balance / totalBalance) * 100
                return acc
              }, {})

              const lastRebalanceDate = Plan.portfolioYields[Plan.portfolioYields.length - 1].date

              return (
                <React.Fragment>
                  <PortfolioHeader
                    portfolioYields={Plan.portfolioYields}
                    marketPrices={DJIA.pricesSince2009}
                    portfolio={Plan.portfolio}
                    planName={Plan.name}
                    allocationMap={allocationMap}
                    totalBalance={totalBalance}
                    updatedAt={Plan.updatedAt}
                    amCharts4Loaded={amCharts4Loaded}
                    hasPlanPerms={hasPlanPerms}
                  />
                  <AnnualReturns portfolioYields={Plan.portfolioYields} totalBalance={totalBalance} />
                  {hasPlanPerms === false && <PermissionError planName={planName} history={history} user={user} />}
                  {hasPlanPerms === 'WAITING' && (
                    <LoadingBox>
                      <Loader text="Loading Holdings..." />
                    </LoadingBox>
                  )}
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
                          <PortfolioItem
                            stock={stock}
                            key={stock.ticker}
                            allocation={allocationMap[stock.ticker]}
                            amCharts4Loaded={amCharts4Loaded}
                          />
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
                      {format(
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

export default withCharts(Portfolio, { version: 4, loadPieChart: true })
