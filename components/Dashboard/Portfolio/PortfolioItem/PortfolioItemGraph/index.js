import React from 'react'
import PropTypes from 'prop-types'
import { format, subDays } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LineGraph from 'ui-components/Charts/LineGraph/v4'
import theme from 'common/theme'
import { GraphContainer, LoadingContainer, FailedContainer } from './styles'

const createChartData = historicPrices =>
  historicPrices.map(point => ({
    price: point[1],
    date: point[0],
  }))

const StockChart = ({ historicPrices, ticker, costBasisPrice, action, amCharts4Loaded, daysOwned, loading, error }) => {
  if (!amCharts4Loaded || loading) {
    return (
      <LoadingContainer>
        <FontAwesomeIcon icon="spinner-third" spin />
        <h4>Loading</h4>
      </LoadingContainer>
    )
  } else if ((!loading && !historicPrices.length) || error) {
    return (
      <FailedContainer>
        <FontAwesomeIcon icon="chart-line" />
        <h4>No graph data available</h4>
      </FailedContainer>
    )
  }
  const chartData = createChartData(historicPrices)

  let guideColor = theme.colors.primary
  let color = { negative: theme.colors.primary, positive: theme.colors.black }
  const cursorColor = theme.colors.black

  if (action === 'SELL') {
    color = { positive: theme.colors.secondary, negative: theme.colors.black }
    guideColor = theme.colors.secondary
  }

  const series = [
    {
      valueY: 'price',
      color: color.positive,
      negativeBase: costBasisPrice + 0.001,
      negativeColor: color.negative,
      tooltipText: `{ticker} \n\${price}`,
    },
  ]

  const guides = [
    {
      value: costBasisPrice + 0.001,
      color: guideColor,
      dashed: true,
      lineAlpha: 0.4,
      text: 'Cost Basis',
    },
  ]

  return (
    <GraphContainer>
      <LineGraph
        id={`${ticker.toLowerCase()}-stockgraph`}
        className="stock-graph"
        series={series}
        data={chartData}
        insideY
        labelYOffset={16}
        gridOpacity={0.02}
        cursorColor={cursorColor}
        guides={guides}
        valuePrefix="$"
        preZoomToDates={[subDays(new Date(), daysOwned), new Date()]}
      />
    </GraphContainer>
  )
}

StockChart.propTypes = {
  sixMonthsPrices: PropTypes.array,
  ticker: PropTypes.string,
  action: PropTypes.string,
  suggestedPrice: PropTypes.number,
  stockFetchFailed: PropTypes.bool,
}

export default StockChart
