import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks'
import get from 'lodash.get'
import { format } from 'date-fns'

import { planIds, marketIds } from '~/common/constants'
import hasPermissions from '~/common/utils/hasPermissions'
import PlanContext from '~/common/Contexts/PlanContext'
import withCharts from '~/ui-components/Charts/withCharts'
import { TableBody, TableRow, TableHeadCell } from '~/ui-components/Table'
import PortfolioHeader from './PortfolioHeader'
import AnnualReturns from './AnnualReturns'
import PortfolioItem from './PortfolioItem'
import Loader from '~/ui-components/Loader/Small'
import StatisticsContainer from '~/ui-components/statisticsContainer'
import StatisticsBox from '~/ui-components/statisticsContainer/StatisticsBox'
import PortfolioLoader from '~/components/Dashboard/Portfolio/Loader'
import LoadingError from '~/ui-components/Error/LoadingError'
import PermissionError from '~/ui-components/Error/PermissionError'
import { PORTFOLIO_HOLDINGS, LAUNCH_HISTORY, MARKET_PRICE_HISTORY, LAUNCH_STATISTICS } from '~/common/queries'
import {
  PortfolioTable,
  PortfolioTableHead,
  LastUpdated,
  DateLabel,
  LoadingBox,
} from '~/components/Dashboard/Portfolio/styles'

const Portfolio = ({ amCharts4Loaded, user, activePlan, history }) => {
  const { loading: holdingsLoading, error: holdingsError, data: holdingsData } = useQuery(PORTFOLIO_HOLDINGS, {
    variables: { planName: activePlan },
  })
  const { loading: launchHistoryLoading, error: launchHistoryError, data: launchHistoryData } = useQuery(
    LAUNCH_HISTORY,
    {
      variables: { planName: activePlan },
    }
  )
  const { loading: marketLoading, error: marketError, data: marketData } = useQuery(MARKET_PRICE_HISTORY, {
    variables: {
      marketType: 'DJIA',
      fromDate: '2009-01-30',
    },
  })
  const { loading: launchStatisticsLoading, error: launchStatisticsError, data: launchStatisticsData } = useQuery(
    LAUNCH_STATISTICS,
    {
      variables: { planName: activePlan },
    }
  )

  if (holdingsError || launchHistoryError || launchStatisticsError) {
    return <LoadingError error={holdingsError || launchHistoryError || launchStatisticsError} />
  }

  const hasPlanPerms = hasPermissions(activePlan.toLowerCase(), user)
  const portfolioHoldings = holdingsData ? holdingsData.portfolioHoldingsList.items : []
  const marketHistory = marketData ? marketData.marketPricingHistoriesList.items : []
  const launchHistory = launchHistoryData ? launchHistoryData.plan.launchHistory : []

  let totalBalance = 0
  const balanceMap = portfolioHoldings.reduce((acc, curr) => {
    if (curr.ticker !== 'CASH') {
      const latestPrice = curr.stock && curr.stock.latestPrice ? curr.stock.latestPrice : curr.price
      acc[curr.ticker] = curr.numberHeld * latestPrice
    } else {
      acc[curr.ticker] = curr.numberHeld
    }

    totalBalance += acc[curr.ticker]

    return acc
  }, {})

  const allocationMap = Object.entries(balanceMap).reduce((acc, [ticker, balance]) => {
    acc[ticker] = (balance / totalBalance) * 100
    return acc
  }, {})

  const lastRebalanceDate = launchHistory && launchHistory.length ? launchHistory[launchHistory.length - 1].date : null
  const portfolioReturn = get(launchStatisticsData, 'plan.statisticsSinceLaunch.totalReturn')
  const winRatio = get(launchStatisticsData, 'plan.statisticsSinceLaunch.winLossRatio')
  const CAGR = get(launchStatisticsData, 'plan.statisticsSinceLaunch.cAGR')

  return (
    <React.Fragment>
      <PortfolioHeader
        portfolioYields={launchHistory}
        marketPrices={marketHistory}
        portfolio={portfolioHoldings}
        portfolioHoldingsLoading={holdingsLoading}
        marketLoading={marketLoading}
        launchHistoryLoading={launchHistoryLoading}
        planName={activePlan}
        allocationMap={allocationMap}
        totalBalance={totalBalance}
        updatedAt={undefined}
        amCharts4Loaded={amCharts4Loaded}
        hasPlanPerms={hasPlanPerms}
      />
      <AnnualReturns portfolioYields={launchHistory} totalBalance={totalBalance} />
      {hasPlanPerms === false && <PermissionError planName={activePlan} history={history} user={user} />}
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
              <TableHeadCell className="cost-basis" tooltip="Averaged purchase price adjusted for dividends earned.">
                Cost basis
              </TableHeadCell>
              <TableHeadCell className="last-price" tooltip="Latest price available for stocks. Updated End of Day.">
                Last price
              </TableHeadCell>
              <TableHeadCell className="days-owned">Days owned</TableHeadCell>
            </TableRow>
          </PortfolioTableHead>
          <TableBody>
            {portfolioHoldings.map((stock) => (
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
        <StatisticsBox title="Annual growth" value={`${CAGR ? CAGR : ''}%`} icon="chart-line" />
        <StatisticsBox title="Sold with profit" value={winRatio ? `${winRatio.toFixed(2)}%` : ''} icon="chart-pie" />
        <StatisticsBox title="Holdings" value={portfolioHoldings.length} icon="list-ul" />
        <StatisticsBox
          title="Percent in cash"
          value={allocationMap['CASH'] ? `${allocationMap.CASH.toFixed(2)}%` : 0}
          icon="dollar-sign"
        />
      </StatisticsContainer>
      {lastRebalanceDate ? (
        <LastUpdated>
          Last rebalanced: <DateLabel>{format(new Date(lastRebalanceDate), 'MMM d, yyyy')}</DateLabel>
        </LastUpdated>
      ) : (
        ''
      )}
    </React.Fragment>
  )
}

export default withCharts(Portfolio, { version: 4, loadPieChart: true })
