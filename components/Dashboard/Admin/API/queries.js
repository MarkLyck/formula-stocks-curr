import gql from 'graphql-tag'

export const ALL_PLANS = gql`
  query {
    allPlans {
      id
      backtestedData
      launchStatistics
      latestSells
      name
      portfolio
      portfolioYields
      price
      statistics
      suggestions
      updatedAt
    }
  }
`

export const UPDATE_PLAN = gql`
  mutation updatePlan(
    $id: ID!
    $backtestedData: Json
    $latestSells: Json
    $portfolio: Json
    $portfolioYields: Json
    $statistics: Json
    $launchStatistics: Json
    $suggestions: Json
  ) {
    updatePlan(
      id: $id
      backtestedData: $backtestedData
      latestSells: $latestSells
      portfolio: $portfolio
      portfolioYields: $portfolioYields
      statistics: $statistics
      launchStatistics: $launchStatistics
      suggestions: $suggestions
    ) {
      id
      name
      backtestedData
      latestSells
      portfolio
      portfolioYields
      statistics
      launchStatistics
      suggestions
    }
  }
`

const createStockReport = ({ name, ticker, scores, stock_price }) => {
  const alias = ticker.replace('.', '_')

  const stringifiedScores = JSON.stringify(scores)
    .split('"')
    .join("'")

  console.log('stringifiedScores', stringifiedScores)

  return `
    ${alias}: createStockReport(name: "${name}", ticker: "${ticker}", stockPrice: ${stock_price}, scores: "${stringifiedScores}") {
      id
    }
  `
}
export const CREATE_REPORTS = reports => gql`
  mutation createStockReports {
    ${reports.map(report => createStockReport(report)).join('\n')}
  }
`

export const DELETE_REPORTS = gql`
  mutation {
    deleteManyStockReports(where: { id_not: "@graph.cool" })
  }
`
