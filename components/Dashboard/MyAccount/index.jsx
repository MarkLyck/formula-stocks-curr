import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import Script from 'react-load-script'
import { StripeProvider, Elements } from 'react-stripe-elements'
import { STRIPE_API_KEY } from 'common/constants'
import withDashboard from 'components/Dashboard/withDashboard'
import GenericLoader from 'ui-components/Loader'
import LoadingError from 'ui-components/Error/LoadingError'
import ChangePlan from './ChangePlan'
import CancelSubscription from './CancelSubscription'
import ReactivateSubscription from './ReactivateSubscription'
import UpdatePaymentDetails from './UpdatePaymentDetails'
import { MyAccountContainer, Title } from './styles'

const GET_LOGGED_IN_USER = gql`
  query {
    loggedInUser {
      id
      name
      email
      plan
      stripeCustomer
      stripeSubscription
      taxPercent
      billingPeriod
    }
  }
`

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $stripeSubscription: Json, $plan: String, $type: String, $cancelReason: String) {
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

class MyAccount extends Component {
  state = { stripeLoaded: false }

  checkIfStripeIsLoaded = () => {
    if (typeof window.Stripe === 'function') {
      this.setState({ stripeLoaded: true })
    } else {
      this.timeOut = setTimeout(this.checkIfStripeIsLoaded, 1000)
    }
  }

  componentDidMount() {
    if (!this.state.stripeLoaded) {
      this.timeOut = setTimeout(this.checkIfStripeIsLoaded, 1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut)
  }

  render() {
    const { apolloClient } = this.props
    const { stripeLoaded } = this.state

    return (
      <Query query={GET_LOGGED_IN_USER}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <GenericLoader />
          let User = data.loggedInUser
          if (error || !User || !User.id) return <LoadingError error={error} />

          return (
            <Mutation mutation={UPDATE_USER}>
              {(updateUser, { data }) => {
                if (data) User = data.updateUser

                return (
                  <div>
                    <Script url="https://js.stripe.com/v3/" />
                    <MyAccountContainer>
                      <Title>My Account</Title>
                      <div>
                        <h4 className="user-info">{User.name}</h4>
                        <h4 className="user-info">{User.email}</h4>
                        <h4 className="user-info user-plan">{User.plan.toLowerCase()} Model</h4>
                      </div>
                    </MyAccountContainer>
                    <ChangePlan
                      currentPlan={User.plan}
                      stripeCustomer={User.stripeCustomer}
                      oldSubscription={User.stripeSubscription}
                      taxPercent={User.taxPercent}
                      billingPeriod={User.billingPeriod}
                      userID={User.id}
                      updateUser={updateUser}
                      refetchUser={refetch}
                      apolloClient={apolloClient}
                    />
                    {stripeLoaded ? (
                      <StripeProvider apiKey={STRIPE_API_KEY}>
                        <Elements>
                          <UpdatePaymentDetails
                            stripeCustomer={User.stripeCustomer}
                            signupError=""
                            apolloClient={apolloClient}
                          />
                        </Elements>
                      </StripeProvider>
                    ) : (
                      ''
                    )}
                    <CancelSubscription
                      stripeSubscription={User.stripeSubscription}
                      updateUser={updateUser}
                      userID={User.id}
                      apolloClient={apolloClient}
                    />
                    <ReactivateSubscription
                      stripeSubscription={User.stripeSubscription}
                      updateUser={updateUser}
                      userID={User.id}
                      apolloClient={apolloClient}
                    />
                  </div>
                )
              }}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}

export default withDashboard(MyAccount)
