import { gql } from 'apollo-boost'

export const SEARCH_REPORTS_QUERY = gql`
  query report($searchTerm: String) {
    aIReportsList(
      filter: { OR: [{ ticker: { contains: $searchTerm } }, { name: { contains: $searchTerm } }] }
      sort: { aIScore: DESC }
    ) {
      items {
        aIScore
        name
        price
        scores
        ticker
        marketCap
        date
      }
    }
  }
`
