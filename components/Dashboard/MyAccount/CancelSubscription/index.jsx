import React, { useState } from 'react'
import ReactModal from 'react-modal'
import gql from 'graphql-tag'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'ui-components/Button'
import ModalTitle from 'ui-components/Modal/Title'
import TextArea from 'ui-components/Form/TextArea'
import { StatusLine, modalContentStyles, ModalText } from './styles'

const CANCEL_SUBSCRIPTION = gql`
  query cancelSubscription($subID: String!) {
    cancelSubscription(subID: $subID) {
      stripeSubscription
    }
  }
`
const cancelSubscription = async (sub, cancelReason, updateUser, userID, apolloClient, setConfirmationIsVisible) => {
  const subID = sub.id

  const { data } = await apolloClient.query({
    query: CANCEL_SUBSCRIPTION,
    variables: { subID },
  })
  const stripeSubscription = data.cancelSubscription.stripeSubscription
  updateUser({ variables: { id: userID, stripeSubscription, cancelReason } })
  setConfirmationIsVisible(false)
}

const CancelSubscription = ({ stripeSubscription, updateUser, userID, apolloClient }) => {
  const [confirmationIsVisible, setConfirmationIsVisible] = useState(false)
  const [cancelReason, setCancelReason] = useState('')
  const handleOnClick = () => setConfirmationIsVisible(true)
  const handleTextAreaChange = event => setCancelReason(event.target.value)

  const renderCancelConfirmation = () => (
    <ReactModal
      isOpen={confirmationIsVisible}
      onRequestClose={() => setConfirmationIsVisible(false)}
      style={modalContentStyles}
      overlayClassName="modal-overlay"
    >
      <ModalTitle>Cancel Subscription</ModalTitle>
      <ModalText>We're really sorry to see you go! Please give us some feedback on what we could do better.</ModalText>
      <TextArea onChange={handleTextAreaChange} placeholder="Feedback" value={cancelReason} />
      <Button
        variant="raised"
        type="light"
        color="error"
        background="white"
        hoverColor="error"
        style={{ margin: '0 auto 16px' }}
        onClick={() =>
          cancelSubscription(
            stripeSubscription,
            cancelReason,
            updateUser,
            userID,
            apolloClient,
            setConfirmationIsVisible
          )
        }
      >
        <FontAwesomeIcon icon={['far', 'times']} />
        Cancel subscription
      </Button>
    </ReactModal>
  )

  if (!stripeSubscription || !stripeSubscription.id)
    return <p style={{ textAlign: 'center' }}>Please contact support if you'd like to cancel your subscription</p>
  const nowInUnixSeconds = Date.now() / 1000

  return (
    <React.Fragment>
      {renderCancelConfirmation()}
      {stripeSubscription.cancel_at_period_end && stripeSubscription.current_period_end > nowInUnixSeconds && (
        <StatusLine>
          Your subscription is ending on:{' '}
          {format(new Date(stripeSubscription.current_period_end * 1000), 'MMMM Do YYYY')}
        </StatusLine>
      )}
      {stripeSubscription.ended_at && (
        <StatusLine>
          Your subscription ended on: {format(new Date(stripeSubscription.ended_at * 1000), 'MMMM Do YYYY')}
        </StatusLine>
      )}

      {!stripeSubscription.cancel_at_period_end && (
        <Button
          variant="raised"
          type="light"
          color="error"
          background="white"
          hoverColor="error"
          style={{ margin: '0 auto 32px' }}
          onClick={handleOnClick}
        >
          <FontAwesomeIcon icon={['far', 'times']} />
          Cancel subscription
        </Button>
      )}
    </React.Fragment>
  )
}

export default CancelSubscription
