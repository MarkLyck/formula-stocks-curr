import { gql } from 'apollo-boost'

export const PORTFOLIO_HOLDINGS = gql`
  query PORTFOLIO_HOLDINGS($planID: String) {
    portfolioHoldingsList(filter: { plan: { planID: { equals: $planID } } }) {
      items {
        daysOwned
        dividends
        numberHeld
        percentageWeight
        price
        purchasePrice
        ticker
        name
        stock {
          date
          latestPrice
        }
      }
    }
  }
`
