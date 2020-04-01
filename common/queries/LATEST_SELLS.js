import { gql } from 'apollo-boost'

export const LATEST_SELLS = gql`
  query LATEST_SELLS($planName: String) {
    plan(planID: $planName) {
      latestSells {
        items {
          boughtAt
          soldAt
          ticker
          name
        }
      }
    }
  }
`
