import React from 'react'
import styled from '@emotion/styled'

const ReturnContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 100;
    margin-bottom: 2px;
    font-size: 1.2rem;
  }
`

const Title = styled.h3`
  white-space: nowrap;
`

const ReturnValue = styled.p`
  color: ${props => (props.returnSince >= 0 ? props.theme.colors.secondary : props.theme.colors.error)};
  font-weight: 500;
`

const Return = ({ title, returnSince, className }) => (
  <ReturnContainer className={className}>
    <Title>{title}</Title>
    {Number(returnSince) > -100 ? (
      <ReturnValue returnSince={returnSince}>
        {returnSince >= 0 ? '+' : ''}
        {returnSince}%
      </ReturnValue>
    ) : (
      ''
    )}
  </ReturnContainer>
)

export default Return
