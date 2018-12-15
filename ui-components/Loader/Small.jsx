import React from 'react'
import styled from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from './index'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const LoadingTitle = styled.h2`
  font-size: 1.2rem;
`

const GenericLoader = ({ text = 'Loading...' }) => (
  <Container>
    <Icon icon="spinner-third" spin size="4x" />
    <LoadingTitle>{text}</LoadingTitle>
  </Container>
)

export default GenericLoader
