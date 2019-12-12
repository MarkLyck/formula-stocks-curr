import { gql } from 'apollo-boost'

export const STOCK_QUERY = gql`
  query stock($ticker: String!) {
    stock(ticker: $ticker) {
      date
      latestPrice
      ticker
      sixMonthsPrices
    }
  }
`

export const STOCK_HISTORY = gql`
  query stock($ticker: String!) {
    stock(ticker: $ticker) {
      ticker
      historicPrices
    }
  }
`

export const ALL_STOCKS_QUERY = gql`
  query stocksList($tickers: [String!]!) {
    stocksList(filter: { ticker: { in: $tickers } }) {
      items {
        date
        latestPrice
        ticker
        sixMonthsPrices
      }
    }
  }
`
