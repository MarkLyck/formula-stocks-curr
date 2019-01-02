import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LineGraph from 'ui-components/Charts/LineGraph'
import { formatPrice } from 'common/utils/helpers'
import { Legends, Legend } from 'ui-components/Charts/Legends'
import theme from 'common/theme'
import { GraphContainer, ChartLoaderContainer } from './styles'

const createChartData = (planData, marketPrices) => {
  const startingValue = 25000
  let lastMarketBalance = startingValue
  return planData.map((point, i) => {
    let balance = startingValue
    let marketBalance = startingValue

    let marketPercentIncrease = 0
    if (marketPrices[i]) {
      marketPercentIncrease = (marketPrices[i].price - marketPrices[0].price) / marketPrices[0].price
    }

    if (planData[i] && i !== 0) {
      balance = planData[i].balance
    }
    if (marketPrices[i] && marketPrices[i].price) {
      marketBalance = startingValue + Math.floor(marketPercentIncrease * startingValue)
      lastMarketBalance = marketBalance
    } else if (i !== 0 && planData[i - 1] !== startingValue) {
      marketBalance = lastMarketBalance
    }

    return {
      market: Number(marketBalance) || 0,
      fs: Number(balance),
      fsBalloon: formatPrice(balance, false, false, '$'),
      marketBalloon: formatPrice(marketBalance, false, false, '$'),
      date: new Date(point.date.year, point.date.month - 1, point.date.day),
    }
  })
}

const LongTermPerformance = ({ planData, marketPrices, planName, amCharts4Loaded }) => {
  if (!planData || !planData.length || !amCharts4Loaded) {
    return (
      <ChartLoaderContainer>
        <FontAwesomeIcon icon="spinner-third" spin size="4x" />
      </ChartLoaderContainer>
    )
  }
  const chartData = createChartData(planData, marketPrices)

  // const fsMin = _.minBy(chartData, point => point.fs).fs
  // const marMin = chartData[0].market ? _.minBy(chartData, point => point.market).market : 0

  // const minimum = Math.floor(_.min([fsMin, marMin]) / 10) * 10
  const maximum = Math.ceil(_.maxBy(chartData, point => point.fs).fs / 20) * 20

  const CapitalizedPlanNAme = planName.charAt(0).toUpperCase() + planName.slice(1)

  const series = [
    {
      valueY: 'fs',
      color: theme.colors.primary,
      fillOpacity: 0.4,
      tooltipText: `${CapitalizedPlanNAme} \n[bold]{fsBalloon}[/]`,
    },
  ]
  if (marketPrices.length) {
    series.push({
      valueY: 'market',
      color: theme.colors.black,
      fillOpacity: 0.4,
      tooltipText: `S&P 500 \n[bold]{marketBalloon}[/]`,
    })
  }

  const graphs = [
    {
      id: 'launch',
      lineColor: '#27A5F9',
      fillAlphas: 0.4,
      bullet: 'square',
      bulletBorderAlpha: 1,
      bulletColor: '#27A5F9',
      bulletSize: 5,
      hideBulletsCount: 10,
      lineThickness: 2,
      useLineColorForBulletBorder: true,
      valueField: 'fs',
      balloonText: `
        <div class="chart-balloon">
            <span class="plan-name">${planName}</span>
            <span class="balloon-value">[[fsBalloon]]</span>
        </div>
      `,
    },
  ]
  if (marketPrices.length) {
    graphs.push({
      id: 'market',
      lineColor: '#49494A',
      fillAlphas: 0.4,
      bullet: 'square',
      bulletBorderAlpha: 1,
      bulletColor: '#989898',
      bulletSize: 5,
      hideBulletsCount: 10,
      lineThickness: 2,
      useLineColorForBulletBorder: true,
      valueField: 'market',
      balloonText: `
        <div class="chart-balloon">
            <span class="plan-name market-name">S&P 500</span>
            <span class="balloon-value">[[marketBalloon]]</span>
        </div>
      `,
    })
  }

  return (
    <GraphContainer>
      <Legends left={40} className="longterm-legends">
        <Legend color={theme.colors.primary}>
          <p className="plan-name">{planName}</p>
        </Legend>
        <Legend color={theme.colors.black}>
          <p>S&P 500</p>
        </Legend>
      </Legends>
      <LineGraph
        id="single-long-term-performance-graph"
        series={series}
        data={chartData}
        valuePrefix="$"
        gridOpacity={0.02}
        insideX
        insideY
        labelYOffset={16}
        paddingBottom={-2}
        paddingRight={-2}
        paddingLeft={-2}
        maximum={maximum}
        // minimum={minimum}
        logarithmic
        minorGridEnabled
        categoryBoldLabels={true}
        categoryAxisColor="#FFF"
      />
    </GraphContainer>
  )
}

LongTermPerformance.defaultProps = {
  planData: [],
  marketData: [],
  planName: '',
}

LongTermPerformance.propTypes = {
  planData: PropTypes.array,
  marketPrices: PropTypes.array,
  planName: PropTypes.string,
}

export default LongTermPerformance
