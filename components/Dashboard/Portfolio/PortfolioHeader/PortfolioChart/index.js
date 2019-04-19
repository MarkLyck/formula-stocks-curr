import React from 'react'
import PropTypes from 'prop-types'
import min from 'lodash.min'
import minBy from 'lodash.minby'
import maxBy from 'lodash.maxby'
import { format, differenceInDays } from 'date-fns'
import LineGraph from 'ui-components/Charts/LineGraph'
import { Legends, Legend } from 'ui-components/Charts/Legends'
import theme from 'common/theme'
import { formatPrice } from 'common/utils/helpers'
import { GraphContainer } from './styles'

const createChartData = (portfolioYields, marketPrices, totalBalance, updatedAt) => {
  const startValue = portfolioYields[0].balance
  const marketStartValue = Number(marketPrices[0].price) || 0
  let lastMarketBalance = 0

  const chartData = portfolioYields.map((point, i) => {
    // CASH is already included in this balance, DO NOT ADD CASH TO THIS VALUE AGAIN.
    const balance = (((portfolioYields[i].balance - startValue) / startValue) * 100).toFixed(2)
    let marketBalance

    // if portfolioYields has more items than marketPrices, use lastSaved marketBalance.
    if (marketPrices[i]) {
      marketBalance = (((Number(marketPrices[i].price) - marketStartValue) / marketStartValue) * 100).toFixed(2)
      lastMarketBalance = marketBalance
    } else {
      marketBalance = lastMarketBalance
    }

    return {
      market: Number(marketBalance) || 0,
      fs: Number(balance),
      fsBalloon: formatPrice(balance, true, true),
      marketBalloon: formatPrice(marketBalance, true, true),
      date: new Date(point.date.year, point.date.month - 1, point.date.day),
    }
  })
  // figure out what the last date from the JSON is.
  const endDate = portfolioYields[portfolioYields.length - 1].date
  const lastDayFromDatabase = new Date(endDate.year, endDate.month - 1, endDate.day)
  // check the difference between JSON date and the last date the Plan was updated.
  const daysDifference = differenceInDays(updatedAt, lastDayFromDatabase)
  // only add an extra point to the graph if it's at least 1 day later than the last date in the graph is currently showing.
  if (daysDifference > 0) {
    const endBalance = (((totalBalance - startValue) / startValue) * 100).toFixed(2)
    const endMarketBalance = Number(
      (((marketPrices[marketPrices.length - 1].price - marketStartValue) / marketStartValue) * 100).toFixed(2)
    )
    chartData.push({
      market: endMarketBalance,
      fs: Number(endBalance),
      fsBalloon: formatPrice(endBalance, true, true),
      marketBalloon: formatPrice(endMarketBalance, true, true),
      date: new Date(updatedAt),
    })
  }

  return chartData
}

const PortfolioGraph = ({
  portfolioYields,
  marketPrices,
  planName,
  totalBalance,
  updatedAt,
  amCharts4Loaded,
  serialChartsReady,
}) => {
  if (!amCharts4Loaded || !portfolioYields || !portfolioYields.length) {
    return (
      <div id="result-chart" className="loading">
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
      </div>
    )
  }
  const chartData = createChartData(portfolioYields, marketPrices, totalBalance, updatedAt)

  const fsMin = minBy(chartData, point => point.fs).fs
  const marMin = chartData[0].market ? minBy(chartData, point => point.market).market : 0

  const minimum = Math.floor(min([fsMin, marMin]) / 10) * 10
  const maximum = Math.ceil(maxBy(chartData, point => point.fs).fs / 20) * 20

  const series = [
    {
      valueY: 'fs',
      color: '#27A5F9',
      fillOpacity: 0.4,
      tooltipText: `${planName.toUpperCase()} \n[bold]{fsBalloon}[/]`,
    },
  ]
  if (marketPrices.length) {
    series.push({
      valueY: 'market',
      color: '#49494A',
      fillOpacity: 0.4,
      tooltipText: `DJIA \n[bold]{marketBalloon}[/]`,
    })
  }

  return (
    <GraphContainer>
      <Legends className="portfolio-legends" left={40} top={40} horizontal={true}>
        <Legend color={theme.colors.primary}>
          <p>{planName}</p>
        </Legend>
        <Legend color={theme.colors.black}>
          <p>DJIA</p>
        </Legend>
      </Legends>
      <LineGraph
        id="portfolio-graph"
        series={series}
        data={chartData}
        valueSuffix="%"
        gridOpacity={0.02}
        paddingRight={-8}
        paddingLeft={-5}
        insideX
        insideY
        labelYOffset={16}
        strictMinMax
        max={maximum}
        min={minimum - 10}
        extraMax={20}
        tooltipDateFormat="MMM YYYY"
        categoryBoldLabels
        categoryAxisColor="#fff"
      />
    </GraphContainer>
  )
}

export default React.memo(PortfolioGraph)
