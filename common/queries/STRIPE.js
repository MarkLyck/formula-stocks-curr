import { gql } from 'apollo-boost'

export const UPDATE_PAYMENT_DETAILS = gql`
  query UPDATE_PAYMENT_DETAILS($customerID: String!, $token: String!) {
    UPDATE_PAYMENT_DETAILS(customerID: $customerID, token: $token) {
      success
    }
  }
`

export const CANCEL_SUBSCRIPTION = gql`
  query CANCEL_SUBSCRIPTION($subscriptionID: String!, $cancel_at_period_end: Boolean!, $email: String!) {
    CANCEL_SUBSCRIPTION(subscriptionID: $subscriptionID, cancel_at_period_end: $cancel_at_period_end, email: $email) {
      subscription
    }
  }
`
