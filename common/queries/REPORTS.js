import { gql } from 'apollo-boost'

export const SEARCH_REPORTS_QUERY = gql`
  query report($searchTerm: String, $marketCap: Float) {
    aIReportsList(
      filter: {
        OR: [
          { marketCap: { gte: $marketCap }, ticker: { contains: $searchTerm } }
          { marketCap: { gte: $marketCap }, name: { contains: $searchTerm } }
        ]
      }
    ) {
      items {
        aIScore
        name
        price
        scores
        ticker
        date
      }
    }
  }
`

//   query report($searchTerm: String, $marketCap: Float) {
//     allStockReports(
//       filter: {
//         OR: [{ ticker_starts_with: $searchTerm }, { name_starts_with: $searchTerm }]
//         AND: [{ marketCap_gte: $marketCap }]
//       }
//     ) {
//       date
//       name
//       stockPrice
//       scores
//       aiScore
//       ticker
//     }
//   }
