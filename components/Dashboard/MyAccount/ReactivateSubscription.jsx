import React, { Component } from 'react'
import gql from 'graphql-tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'ui-components/Button'

const REACTIVATE_SUBSCRIPTION = gql`
  query reactivateSubscription($subID: String!) {
    reactivateSubscription(subID: $subID) {
      stripeSubscription
    }
  }
`

class ReactivateSubscription extends Component {
  reactivateSubscription = async (sub, updateUser, userID) => {
    const { apolloClient } = this.props
    const subID = sub.id

    const { data } = await apolloClient.query({
      query: REACTIVATE_SUBSCRIPTION,
      variables: { subID },
    })
    const stripeSubscription = data.reactivateSubscription.stripeSubscription
    updateUser({ variables: { id: userID, stripeSubscription } })
  }

  render() {
    const { stripeSubscription, updateUser, userID } = this.props
    if (!stripeSubscription || stripeSubscription.cancel_at_period_end) return null

    return (
      <Button
        variant="raised"
        type="light"
        background="white"
        style={{ margin: '16px auto' }}
        onClick={() => this.reactivateSubscription(stripeSubscription, updateUser, userID)}
      >
        <FontAwesomeIcon icon="flask" />
        Reactivate subscription
      </Button>
    )
  }
}

export default ReactivateSubscription
