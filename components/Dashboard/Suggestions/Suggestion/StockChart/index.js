import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LineGraph from 'ui-components/Charts/LineGraph'
import theme from 'common/theme'
import { GraphContainer, LoadingContainer, FailedContainer, GraphOverlay } from './styles'

const createChartData = sixMonthsPrices =>
  sixMonthsPrices.map(point => ({
    price: point[1].toFixed(2),
    date: point[0],
  }))

const StockChart = ({
  sixMonthsPrices,
  ticker,
  suggestedPrice,
  suggestionsType,
  action,
  amCharts4Loaded,
  loading,
  error,
}) => {
  if (!amCharts4Loaded || loading) {
    return (
      <LoadingContainer className="loading-container">
        <FontAwesomeIcon icon="spinner-third" spin />
        <h4>Loading</h4>
      </LoadingContainer>
    )
  } else if (!loading && (!sixMonthsPrices || !sixMonthsPrices.length)) {
    return (
      <FailedContainer className="failed-container">
        <FontAwesomeIcon icon="chart-line" />
        <h4>No graph data available</h4>
      </FailedContainer>
    )
  }
  const chartData = createChartData(sixMonthsPrices)

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
      negativeColor: color.negative,
      negativeBase: suggestedPrice + 0.001,
      tooltipText: `${ticker} \n\${price}`,
    },
  ]

  const guides = [
    {
      value: suggestedPrice + 0.001,
      color: guideColor,
      dashed: true,
      lineAlpha: 0.4,
      text: suggestionsType === 'Trades' ? ' Traded at' : ' Suggested price',
    },
  ]

  return (
    <GraphContainer className="stock-chart">
      <GraphOverlay />
      <LineGraph
        id={`${ticker.toLowerCase()}-stockgraph`}
        className="suggestion-graph"
        series={series}
        data={chartData}
        insideY
        valuePrefix="$"
        labelYOffset={24}
        axisAlpha={0}
        gridOpacity={0}
        tooltipDateFormat="d MMM YYYY"
        guides={guides}
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

export default React.memo(StockChart)
