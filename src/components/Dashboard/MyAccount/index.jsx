import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import styled from '@emotion/styled'
import Script from 'react-load-script'
import { StripeProvider, Elements } from 'react-stripe-elements'
import { STRIPE_API_KEY } from '~/common/constants'
import withDashboard from '~/components/Dashboard/withDashboard'
import GenericLoader from '~/ui-components/Loader'
import LoadingError from '~/ui-components/Error/LoadingError'
import ChangePlan from './ChangePlan'
import CancelSubscription from './CancelSubscription'
import ReactivateSubscription from './ReactivateSubscription'
import UpdatePaymentDetails from './UpdatePaymentDetails'
import { MyAccountContainer, Title } from './styles'
import { CURRENT_USER_QUERY } from '~/common/queries'

// const GET_LOGGED_IN_USER = gql`
//   query {
//     loggedInuser {
//       id
//       name
//       email
//       plan
//       stripeCustomer
//       stripeSubscription
//       taxPercent
//       billingPeriod
//     }
//   }
// `

export const USER_UPDATE = gql`
  mutation updateUser($id: ID!, $stripeSubscription: JSON, $plan: String, $type: String, $cancelReason: String) {
    updateUser(
      id: $id
      stripeSubscription: $stripeSubscription
      plan: $plan
      type: $type
      cancelReason: $cancelReason
    ) {
      id
      name
      email
      plan
      stripeSubscription
      cancelReason
    }
  }
`

const PastDue = styled.h4`
  color: ${(props) => props.theme.colors.error};
`

let stripeTimeOut

const MyAccount = ({ apolloClient }) => {
  const [stripeLoaded, setStripeLoaded] = useState(false)
  const { loading, error, data, refetch } = useQuery(CURRENT_USER_QUERY)
  const [updateUser, { data: updateUserData }] = useMutation(USER_UPDATE)

  const checkIfStripeIsLoaded = () => {
    if (typeof window.Stripe === 'function') {
      setStripeLoaded(true)
    } else {
      stripeTimeOut = setTimeout(checkIfStripeIsLoaded, 1000)
    }
  }

  useEffect(() => {
    if (!stripeLoaded) {
      stripeTimeOut = setTimeout(checkIfStripeIsLoaded, 1000)
    }
    return () => clearTimeout(stripeTimeOut)
  })

  if (loading) return <GenericLoader />
  let { user } = data
  if (error || !user || !user.id) return <LoadingError error={error} />

  const stripeStatus = user.stripe.subscription.status

  return (
    <div>
      <Script url="https://js.stripe.com/v3/" />
      <MyAccountContainer>
        <Title>My Account</Title>
        <div>
          <h4 className="user-info">{user.name}</h4>
          <h4 className="user-info">{user.email}</h4>
          <h4 className="user-info user-plan">{user.plan.toLowerCase()} Model</h4>
          {stripeStatus === 'past_due' ? <PastDue>Invoice past due</PastDue> : ''}
        </div>
      </MyAccountContainer>
      <ChangePlan
        currentPlan={user.plan}
        stripeCustomer={user.stripeCustomer}
        oldSubscription={user.stripe.subscription}
        taxPercent={user.taxPercent}
        billingPeriod={user.billingPeriod}
        userID={user.id}
        updateUser={updateUser}
        refetchuser={refetch}
        apolloClient={apolloClient}
      />
      {stripeLoaded ? (
        <StripeProvider apiKey={STRIPE_API_KEY}>
          <Elements>
            <UpdatePaymentDetails customerID={user.stripe.customerID} signupError="" />
          </Elements>
        </StripeProvider>
      ) : (
        ''
      )}
      <CancelSubscription subscription={user.stripe.subscription} updateUser={updateUser} user={user} />
      <ReactivateSubscription subscription={user.stripe.subscription} user={user} />
    </div>
  )
}

export default withDashboard(MyAccount)
