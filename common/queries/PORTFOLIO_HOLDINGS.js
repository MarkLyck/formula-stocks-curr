import { gql } from 'apollo-boost'

export const PORTFOLIO_HOLDINGS = gql`
  query PORTFOLIO_HOLDINGS($planName: String) {
    portfolioHoldingsList(filter: { plan: { planID: { equals: $planName } } }) {
      items {
        daysOwned
        dividends
        numberHeld
        percentageWeight
        price
        purchasePrice
        ticker
        name
        date
        stock {
          date
          latestPrice
        }
      }
    }
  }
`
