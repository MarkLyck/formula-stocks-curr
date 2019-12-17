import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { differenceInDays } from 'date-fns'
import { TableCell } from 'ui-components/Table'
import PortfolioItemGraph from './PortfolioItemGraph'
import { ItemRow } from './styles'
import { STOCK_HISTORY } from 'common/queries'

const numberToFirstDecimal = number => {
  if (!number) return number // if it's missing from stocks it will be undefined.
  if (number >= 0.01) return number.toFixed(2)
  const decimals = String(number)
    .split('.')[1]
    .split('')
    .map(num => Number(num))
  let foundFistNon0 = false
  let firstNon0Index = 2
  let lastDigit = 0
  decimals.forEach((digit, index) => {
    if (!foundFistNon0 && lastDigit === 0 && digit !== 0) {
      foundFistNon0 = true
      firstNon0Index = index
    }
    lastDigit = digit
  })

  return number.toFixed(firstNon0Index + 1)
}

const PortfolioItem = ({ stock, allocation, amCharts4Loaded }) => {
  const [expanded, setExpanded] = useState(false)
  const [executeStockHistoryQuery, { called, loading, error, data }] = useLazyQuery(STOCK_HISTORY)

  const toggleExpanded = () => setExpanded(!expanded)

  const { ticker } = stock

  const costBasisPrice = stock.purchasePrice - stock.dividends
  const stockAllocation = numberToFirstDecimal(allocation)
  const updatedDate = new Date(stock.date)
  const today = new Date()
  const daysSinceUpdated = differenceInDays(today, updatedDate)

  const latestPrice = stock.stock && stock.stock.latestPrice ? stock.stock.latestPrice : stock.price
  const percentIncrease = (((latestPrice - costBasisPrice) * 100) / costBasisPrice).toFixed(2)
  const increasePrefix = percentIncrease > 0 ? '+' : ''
  const latestPriceFormatted = latestPrice && ticker !== 'CASH' ? `$${latestPrice.toFixed(2)}` : ''

  let historicPrices = []

  if (ticker !== 'CASH') {
    if (!called && expanded) {
      executeStockHistoryQuery({ variables: { ticker: ticker } })
    } else if (data) {
      historicPrices = data.stock.historicPrices
    }
  }

  return (
    <React.Fragment>
      <ItemRow hover onClick={toggleExpanded}>
        <TableCell className="name">
          <h4 className="stock-name">{stock.name}</h4>
          {ticker !== 'CASH' && <p className="ticker">{ticker}</p>}
        </TableCell>
        <TableCell className="allocation">{stockAllocation}%</TableCell>
        <TableCell className={`return ${percentIncrease >= 0 ? 'positive' : 'negative'}`}>
          {isNaN(percentIncrease) ? '' : `${increasePrefix}${percentIncrease}%`}
        </TableCell>
        <TableCell className="cost-basis">{costBasisPrice ? `$${costBasisPrice.toFixed(2)}` : ''}</TableCell>
        <TableCell className="last-price">{latestPriceFormatted}</TableCell>
        {ticker !== 'CASH' && <TableCell className="days-owned">{stock.daysOwned + daysSinceUpdated}</TableCell>}
      </ItemRow>
      {ticker !== 'CASH' && expanded && (
        <ItemRow>
          <td className="stock-graph-cell" colSpan="6">
            <PortfolioItemGraph
              historicPrices={historicPrices}
              amCharts4Loaded={amCharts4Loaded}
              loading={loading}
              error={error}
              ticker={ticker}
              costBasisPrice={costBasisPrice}
              daysOwned={stock.daysOwned}
            />
          </td>
        </ItemRow>
      )}
    </React.Fragment>
  )
}

export default PortfolioItem
