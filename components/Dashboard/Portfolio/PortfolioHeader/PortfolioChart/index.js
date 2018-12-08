import React from 'react'
import PropTypes from 'prop-types'
import min from 'lodash.min'
import minBy from 'lodash.minby'
import maxBy from 'lodash.maxby'
import LineGraph from 'ui-components/Charts/LineGraph/v4'
import { Legends, Legend } from 'ui-components/Charts/Legends'
import theme from 'common/theme'
import { formatPrice } from 'common/utils/helpers'
import { GraphContainer } from './styles'

const createChartData = (portfolioYields, marketPrices) => {
  const startValue = portfolioYields[0].balance
  const marketStartValue = Number(marketPrices[0].price) || 0
  let lastMarketBalance = 0

  return portfolioYields.map((point, i) => {
    const balance = (((portfolioYields[i].balance - startValue) / startValue) * 100).toFixed(2)
    let marketBalance

    // if portfolioYields has more items than marketPrices, use lastSaved marketBalance.
    if (marketPrices[i]) {
      marketBalance = (((Number(marketPrices[i].price) - marketStartValue) / marketStartValue) * 100).toFixed(2)
      lastMarketBalance = marketBalance
    } else {
      marketBalance = lastMarketBalance
    }

    const month = Number(point.date.month) > 9 ? point.date.month : `0${point.date.month}`

    return {
      market: Number(marketBalance) || 0,
      fs: Number(balance),
      fsBalloon: formatPrice(balance, true, true),
      marketBalloon: formatPrice(marketBalance, true, true),
      date: `${point.date.year}-${month}-${point.date.day}`,
    }
  })
}

const PortfolioGraph = ({ portfolioYields, marketPrices, planName, amCharts4Loaded, serialChartsReady }) => {
  if (!amCharts4Loaded || !portfolioYields || !portfolioYields.length) {
    return (
      <div id="result-chart" className="loading">
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
      </div>
    )
  }
  const chartData = createChartData(portfolioYields, marketPrices)

  const fsMin = minBy(chartData, point => point.fs).fs
  const marMin = chartData[0].market ? minBy(chartData, point => point.market).market : 0

  const minimum = Math.floor(min([fsMin, marMin]) / 10) * 10
  const maximum = Math.ceil(maxBy(chartData, point => point.fs).fs / 20) * 20

  const series = [
    {
      valueY: 'fs',
      color: '#27A5F9',
      fillOpacity: 0.4,
      tooltipText: `${planName.toUpperCase()} \n+{fs}%`,
    },
  ]
  if (marketPrices.length) {
    series.push({
      valueY: 'market',
      color: '#49494A',
      fillOpacity: 0.4,
      tooltipText: `DJIA \n+{market}%`,
    })
  }

  return (
    <GraphContainer>
      <Legends className="portfolio-legends" style={{ top: '50px' }}>
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
        paddingBottom={-5}
        insideX
        insideY
        labelYOffset={16}
        strictMinMax
        max={maximum}
        min={minimum}
        extraMax={20}
        baseValue={minimum} // not working yet.
        categoryBoldLabels={true}
        categoryAxisColor="#fff"
      />
    </GraphContainer>
  )
}

PortfolioGraph.defaultProps = {
  portfolioYields: [],
  DJIA: [],
  planName: '',
}

PortfolioGraph.propTypes = {
  portfolioYields: PropTypes.array,
  marketPrices: PropTypes.array,
  planName: PropTypes.string,
}

export default PortfolioGraph
