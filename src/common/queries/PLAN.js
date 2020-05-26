import { gql } from 'apollo-boost'

export const LAUNCH_HISTORY = gql`
  query LAUNCH_HISTORY($planName: String) {
    plan(planID: $planName) {
      launchHistory
    }
  }
`

export const BACKTESTED_HISTORY = gql`
  query BACKTESTED_HISTORY($planName: String) {
    plan(planID: $planName) {
      backtestedHistory
    }
  }
`
