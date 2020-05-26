import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { useLazyQuery } from '@apollo/react-hooks'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '~/ui-components/Button'
import ModalTitle from '~/ui-components/Modal/Title'
import TextArea from '~/ui-components/Form/TextArea'
import { StatusLine, modalContentStyles, ModalText } from './styles'
import { CANCEL_SUBSCRIPTION } from '~/common/queries'

const handleCancelSubscription = async (
  executeCancelSubscription,
  subscription,
  cancelReason,
  updateUser,
  user,
  setConfirmationIsVisible
) => {
  await executeCancelSubscription({
    variables: { subscriptionID: subscription.id, cancel_at_period_end: true, email: user.email },
  })
  await updateUser({ variables: { id: user.id, cancelReason } })
  setConfirmationIsVisible(false)
}

const CancelConfirmation = ({
  isOpen,
  setConfirmationIsVisible,
  handleTextAreaChange,
  executeCancelSubscription,
  cancelReason,
  subscription,
  updateUser,
  user,
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={() => setConfirmationIsVisible(false)}
    style={modalContentStyles}
    overlayClassName="modal-overlay"
  >
    <ModalTitle>Cancel Subscription</ModalTitle>
    <ModalText>We're really sorry to see you go! Please give us some feedback on what we could do better.</ModalText>
    <TextArea onChange={handleTextAreaChange} placeholder="Feedback" value={cancelReason} />
    <Button
      background="error"
      color="white"
      style={{ margin: '0 auto 16px' }}
      size="small"
      variant="raised"
      disabled={!cancelReason}
      onClick={() =>
        handleCancelSubscription(
          executeCancelSubscription,
          subscription,
          cancelReason,
          updateUser,
          user,
          setConfirmationIsVisible
        )
      }
    >
      <FontAwesomeIcon icon={['far', 'times']} />
      Cancel subscription
    </Button>
  </ReactModal>
)

const CancelSubscription = ({ subscription, updateUser, user }) => {
  const [confirmationIsVisible, setConfirmationIsVisible] = useState(false)
  const [cancelReason, setCancelReason] = useState('')
  const [executeCancelSubscription, { called, data, loading, error }] = useLazyQuery(CANCEL_SUBSCRIPTION)
  const handleOnClick = () => setConfirmationIsVisible(true)
  const handleTextAreaChange = (event) => setCancelReason(event.target.value)

  if (!subscription || !subscription.id)
    return <p style={{ textAlign: 'center' }}>Please contact support if you'd like to cancel your subscription</p>
  const nowInUnixSeconds = Date.now() / 1000

  const success = called && data && !error
  // if success force page refresh
  if (success) setTimeout(() => location.reload(), 200)

  return (
    <React.Fragment>
      <CancelConfirmation
        isOpen={confirmationIsVisible}
        setConfirmationIsVisible={setConfirmationIsVisible}
        handleTextAreaChange={handleTextAreaChange}
        cancelReason={cancelReason}
        executeCancelSubscription={executeCancelSubscription}
        subscription={subscription}
        updateUser={updateUser}
        user={user}
      />
      {subscription.cancel_at_period_end && subscription.current_period_end > nowInUnixSeconds && (
        <StatusLine>
          Your subscription is ending on: {format(new Date(subscription.current_period_end * 1000), 'MMMM do yyyy')}
        </StatusLine>
      )}
      {subscription.ended_at && (
        <StatusLine>
          Your subscription ended on: {format(new Date(subscription.ended_at * 1000), 'MMMM do yyyy')}
        </StatusLine>
      )}

      {!subscription.cancel_at_period_end && (
        <Button
          size="small"
          color={success ? 'secondary' : 'error'}
          backgroundColor="white"
          disabled={success || loading}
          size="small"
          style={{ margin: '0 auto 32px' }}
          onClick={handleOnClick}
        >
          {!loading && !success && <FontAwesomeIcon icon={['far', 'times']} />}
          {!loading && !success && 'Cancel subscription'}
          {loading && <FontAwesomeIcon icon="spinner-third" spin style={{ fontSize: '1.25rem' }} />}
          {success && 'Succesfully canceled subscription!'}
        </Button>
      )}
    </React.Fragment>
  )
}

export default CancelSubscription
