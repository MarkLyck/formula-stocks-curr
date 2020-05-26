import React from 'react'
import PropTypes from 'prop-types'
import min from 'lodash.min'
import minBy from 'lodash.minby'
import maxBy from 'lodash.maxby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LineGraph from '~/ui-components/Charts/LineGraph'
import { Legends, Legend } from '~/ui-components/Charts/Legends'
import { formatPrice } from '~/common/utils/helpers'
import theme from '~/common/theme'
import { GraphContainer, ChartLoaderContainer } from './styles'

const createChartData = (portfolioYields, marketHistory) => {
  const startValue = portfolioYields[0].balance
  const marketStartValue = marketHistory.length ? Number(marketHistory[0].price) : 0

  return portfolioYields.map((point, i) => {
    const balance = (((portfolioYields[i].balance - startValue) / startValue) * 100).toFixed(2)
    const marketBalance = marketHistory[i]
      ? (((Number(marketHistory[i].price) - marketStartValue) / marketStartValue) * 100).toFixed(2)
      : (((Number(marketHistory[marketHistory.length - 1].price) - marketStartValue) / marketStartValue) * 100).toFixed(
          2
        )

    const month = Number(point.date.month) > 9 ? point.date.month : `0${point.date.month}`

    return {
      market: Number(marketBalance) || 0,
      fs: Number(balance),
      fsBalloon: formatPrice(balance, true, true),
      marketBalloon: formatPrice(marketBalance, true, true),
      date: point.date,
    }
  })
}

const LaunchPerformance = ({ portfolioYields, marketHistory, planName, amCharts4Loaded }) => {
  if (!portfolioYields || !marketHistory.length || !portfolioYields.length || !amCharts4Loaded) {
    return (
      <ChartLoaderContainer>
        <FontAwesomeIcon icon="spinner-third" spin size="4x" />
      </ChartLoaderContainer>
    )
  }
  const chartData = createChartData(portfolioYields, marketHistory)

  const fsMin = minBy(chartData, (point) => point.fs).fs
  const marMin = chartData[0].market ? minBy(chartData, (point) => point.market).market : 0

  const minimum = Math.floor(min([fsMin, marMin]) / 10) * 10
  const maximum = Math.ceil(maxBy(chartData, (point) => point.fs).fs / 20) * 20

  const CapitalizedPlanNAme = planName.charAt(0).toUpperCase() + planName.slice(1)

  const series = [
    {
      valueY: 'fs',
      color: theme.colors.primary,
      fillOpacity: 0.4,
      tooltipText: `${CapitalizedPlanNAme} \n[bold]{fsBalloon}[/]`,
    },
  ]
  if (marketHistory.length) {
    series.push({
      valueY: 'market',
      color: theme.colors.black,
      fillOpacity: 0.4,
      tooltipText: `DJIA \n[bold]{marketBalloon}[/]`,
    })
  }

  return (
    <GraphContainer>
      <Legends horizontal left={40} top={8}>
        <Legend color={theme.colors.primary} width={40}>
          <p>{planName}</p>
        </Legend>
        <Legend color={theme.colors.black}>
          <p>DJIA</p>
        </Legend>
      </Legends>
      <LineGraph
        id="single-launch-performace-graph"
        series={series}
        data={chartData}
        valueSuffix="%"
        gridOpacity={0.02}
        paddingRight={-3}
        paddingLeft={-2}
        paddingBottom={-45}
        insideX
        insideY
        labelYOffset={16}
        labelXOffset={50}
        categoryBoldLabels
        categoryAxisColor="#FFF"
        maximum={maximum}
        minimum={minimum - 10}
      />
    </GraphContainer>
  )
}

LaunchPerformance.defaultProps = {
  portfolioYields: [],
  DJIA: [],
  planName: '',
}

LaunchPerformance.propTypes = {
  portfolioYields: PropTypes.array,
  marketHistory: PropTypes.array,
  planName: PropTypes.string,
}

export default LaunchPerformance
