import { gql } from 'apollo-boost'

export const SIGNALS_QUERY = gql`
  query SIGNALS_QUERY($planName: String, $type: String) {
    signalsList(filter: { plan: { planID: { equals: $planName } }, type: { equals: $type } }) {
      items {
        action
        advancedData
        name
        percentageWeight
        portfolioWeight
        price
        ticker
        totalPortfolioWeight
        type
        stock {
          ticker
          sixMonthsPrices
          latestPrice
        }
      }
    }
  }
`
