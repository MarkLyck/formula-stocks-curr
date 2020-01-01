import React, { Component } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'ui-components/Button'
import { CANCEL_SUBSCRIPTION } from 'common/queries'

const reactivateSubscription = async (subscription, executeReactivateSubscription, user) => {
  await executeReactivateSubscription({
    variables: { subscriptionID: subscription.id, cancel_at_period_end: false, email: user.email },
  })
}

const ReactivateSubscription = ({ subscription, user }) => {
  if (
    !subscription ||
    !subscription.canceled_at ||
    (subscription.status !== 'active' && subscription.status !== 'trialing')
  )
    return null
  const [executeReactivateSubscription, { called, data, loading, error }] = useLazyQuery(CANCEL_SUBSCRIPTION)

  if (error && error.graphQLErrors.length) {
    const stripeError = JSON.parse(error.graphQLErrors[0].message)
    console.error(stripeError)
    alert(stripeError.raw.message)
  }

  const success = called && data && !error
  // if success force page refresh
  if (success) setTimeout(() => location.reload(), 200)

  return (
    <Button
      variant="raised"
      type="light"
      color={success ? 'secondary' : 'primary'}
      background="white"
      disabled={success || loading}
      style={{ margin: '16px auto' }}
      onClick={() => reactivateSubscription(subscription, executeReactivateSubscription, user)}
    >
      {loading && <FontAwesomeIcon icon="spinner-third" spin style={{ fontSize: '1.25rem' }} />}
      {success && 'Succesfully reactivated subscription!'}
      {!loading && !success && 'Reactivate subscription'}
    </Button>
  )
}

export default ReactivateSubscription
