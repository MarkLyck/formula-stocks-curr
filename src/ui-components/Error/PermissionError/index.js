import React from 'react'
import styled from '@emotion/styled'
import Router from 'next/router'
import Button from '~/ui-components/Button'
import Box from '~/ui-components/Box'

const Container = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  background: white;
  box-sizing: border-box;
  padding: 24px;
  text-align: center;
  width: calc(100% - 32px);
  h3 {
    margin: 16px 0;
    font-size: 1.2rem;
  }
  p {
    margin-bottom: 16px;
  }
`

const PermissionError = ({ planName, user }) => {
  let title = `To see this data, you need to be subscribed to the ${planName} model`
  let text = 'You can change your plan in your account page.'
  let buttonText = 'Change plan'

  if (user.type === 'canceled' && user.plan === planName) {
    text = 'You can reactivate your subscription in your account page.'
    buttonText = 'Reactivate Subscription'
  }

  if (user.type === 'unpaid') {
    text =
      "It looks like we didn't receive payment for your subscription. Please contact support if you'd like to update your payment method"
    buttonText = 'My account'
  }

  return (
    <Container>
      <h3>{title}</h3>
      <p>{text}</p>
      <Button type="submit" variant="raised" onClick={() => Router.push('/dashboard/account')}>
        {buttonText}
      </Button>
    </Container>
  )
}

export default PermissionError
