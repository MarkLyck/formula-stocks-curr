import { gql } from 'apollo-boost'
import { AUTH_PROFILE_ID } from 'common/constants'

export const USER_SIGNUP = gql`
  mutation userSignUpWithPassword(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $stripeToken: JSON!
    $plan: String! 
    $address: JSON
    $device: JSON
    $taxPercent: Float!
    $billingPeriod: String
  ) {
    userSignUpWithPassword(
      authProfileId: "${AUTH_PROFILE_ID}"
      password: $password
      user: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        stripe: { create: { token: $stripeToken } }
        plan: $plan
        address: $address
        device: $device
        taxPercent: $taxPercent
        billingPeriod: $billingPeriod
      }
    ) {
      id
    }
  }
`

// export const USER_SIGNUP_MANUAL = gql`
//   mutation userSignUpWithPassword(
//     $email: String!
//     $password: String!
//   ) {
//     userSignUpWithPassword(
//       authProfileId: "${AUTH_PROFILE_ID}"
//       password: $password
//       user: {
//         email: $email
//       }
//     ) {
//       id
//     }
//   }
// `

export const USER_LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(data: { email: $email, password: $password, authProfileId: "${AUTH_PROFILE_ID}" }) {
      success
      auth {
        idToken
        refreshToken
      }
    }
  }
`

export const CURRENT_USER_QUERY = gql`
  query {
    user {
      id
      createdAt
      email
      lastName
      firstName
      stripe {
        subscription
        customer
        customerID
      }
    }
  }
`

export const USER_UPDATE = gql`
  mutation userUpdate($id: ID!, $cancelReason: String) {
    userUpdate(data: { id: $id, cancelReason: $cancelReason }) {
      id
      email
      cancelReason
    }
  }
`

export const USERS_QUERY = gql`
  query {
    usersList {
      items {
        id
        createdAt
        lastSeen
        name
        email
        type
      }
    }
  }
`
