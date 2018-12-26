import React from 'react'
import styled from 'react-emotion'
import Router from 'next/router'
import Button from 'ui-components/Button'
import Box from 'ui-components/Box'

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

const PlanPermissionError = ({ planName }) => (
  <Container>
    <h3>To see this data, you need to be subscribed to the {planName} model</h3>
    <p>You can change your plan in your account page.</p>
    <Button type="submit" variant="raised" onClick={() => Router.push('/dashboard/account')}>
      Change plan
    </Button>
  </Container>
)

export default PlanPermissionError
