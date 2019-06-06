import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { differenceInDays } from 'date-fns'
import { TableCell } from 'ui-components/Table'
import PortfolioItemGraph from './PortfolioItemGraph'
import { ItemRow } from './styles'

const STOCK_QUERY = gql`
  query stocks($ticker: String!) {
    allStocks(filter: { ticker: $ticker }) {
      ticker
      historicPrices
    }
  }
`

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

class PortfolioItem extends Component {
  state = {
    expanded: false,
  }

  toggleExpanded = () => this.setState({ expanded: !this.state.expanded })

  render() {
    const { stock, allocation, amCharts4Loaded } = this.props
    const { expanded } = this.state

    const costBasisPrice = stock.purchase_price - stock.dividends
    const stockAllocation = numberToFirstDecimal(allocation)
    const updatedDate = new Date(stock.date.year, stock.date.month - 1, stock.date.day)
    const today = new Date()
    const daysSinceUpdated = differenceInDays(today, updatedDate)

    const latestPrice = stock.latest_price
    const percentIncrease = (((latestPrice - costBasisPrice) * 100) / costBasisPrice).toFixed(2)
    const increasePrefix = percentIncrease > 0 ? '+' : ''
    const latestPriceFormatted = latestPrice && stock.ticker !== 'CASH' ? `$${latestPrice.toFixed(2)}` : ''

    return (
      <React.Fragment>
        <ItemRow hover onClick={this.toggleExpanded}>
          <TableCell className="name">
            <h4 className="stock-name">{stock.name}</h4>
            {stock.ticker !== 'CASH' && <p className="ticker">{stock.ticker}</p>}
          </TableCell>
          <TableCell className="allocation">{stockAllocation}%</TableCell>
          <TableCell className={`return ${percentIncrease >= 0 ? 'positive' : 'negative'}`}>
            {isNaN(percentIncrease) ? '' : `${increasePrefix}${percentIncrease}%`}
          </TableCell>
          <TableCell className="cost-basis">{costBasisPrice ? `$${costBasisPrice.toFixed(2)}` : ''}</TableCell>
          <TableCell className="last-price">{latestPriceFormatted}</TableCell>
          {stock.ticker !== 'CASH' && (
            <TableCell className="days-owned">{stock.days_owned + daysSinceUpdated}</TableCell>
          )}
        </ItemRow>
        {stock.ticker !== 'CASH' && expanded && (
          <Query query={STOCK_QUERY} variables={{ ticker: stock.ticker }}>
            {({ loading, error, data }) => {
              let historicPrices = []

              if (data.allStocks && data.allStocks[0] && data.allStocks[0].historicPrices) {
                historicPrices = data.allStocks[0].historicPrices
              }

              return (
                <ItemRow>
                  <td className="stock-graph-cell" colSpan="6">
                    <PortfolioItemGraph
                      historicPrices={historicPrices}
                      amCharts4Loaded={amCharts4Loaded}
                      loading={loading}
                      error={error}
                      ticker={stock.ticker}
                      costBasisPrice={costBasisPrice}
                      daysOwned={stock.days_owned}
                    />
                  </td>
                </ItemRow>
              )
            }}
          </Query>
        )}
      </React.Fragment>
    )
  }
}

export default PortfolioItem
