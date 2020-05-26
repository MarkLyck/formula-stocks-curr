import React from 'react'
import PropTypes from 'prop-types'
import PieChart from '~/ui-components/Charts/PieChart'
import { adjustBrightness } from '~/common/utils/helpers'

const Allocation = ({ portfolio, id, allocationMap, amCharts4Loaded }) => {
  if (!amCharts4Loaded) return null
  const colors = []
  const allocation = portfolio.map((stock) => {
    const latestPrice = stock.stock && stock.stock.latestPrice ? stock.stock.latestPrice : stock.price
    if (latestPrice > stock.purchasePrice - stock.dividends) {
      const amount = Math.round(Math.random() * 80 - 40)
      colors.push(adjustBrightness('#27A5F9', amount))
    } else if (stock.ticker === 'CASH') {
      colors.push('#12D99E')
    } else {
      colors.push('#49494A')
    }
    return {
      ticker: stock.ticker,
      value: Number(allocationMap[stock.ticker].toFixed(2)),
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
