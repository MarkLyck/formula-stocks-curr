import React from 'react'
import PropTypes from 'prop-types'
import PieChart from 'ui-components/Charts/PieChart/v4'
import { adjustBrightness } from 'common/utils/helpers'

const Allocation = ({ portfolio, id, amCharts4Loaded }) => {
  if (!amCharts4Loaded) return null
  const colors = []
  const allocation = portfolio.map(stock => {
    if (stock.latest_price > stock.purchase_price - stock.dividends) {
      const amount = Math.round(Math.random() * 80 - 40)
      colors.push(adjustBrightness('#27A5F9', amount))
    } else if (stock.ticker === 'CASH') {
      colors.push('#12D99E')
    } else {
      colors.push('#49494A')
    }
    return {
      ticker: stock.ticker,
      value: Number(stock.percentage_weight.toFixed(2)),
    }
  })

  const tooltipText = `{ticker}\n{value}%`

  return (
    <PieChart
      className="stock-allocation"
      labelText="Allocation"
      valueField="value"
      categoryField="ticker"
      colors={colors}
      data={allocation}
      id={id}
      tooltipText={tooltipText}
    />
  )
}

Allocation.propTypes = {
  portfolio: PropTypes.array,
  id: PropTypes.string,
}

export default Allocation
