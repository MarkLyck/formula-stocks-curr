import React from 'react'
import styled from 'styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '~/common/theme'

export const Container = styled.span`
  background: ${(props: any) => props.backgroundColor};
  color: ${(props: any) => props.color};
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: 400;
  font-weight: 500;

  @media (max-width: 940px) {
    margin-right: 12px;
    margin-left: 8px;
    font-size: 0.7rem;
  }
`

const Prefix = styled.span`
  font-weight: 500;
  margin-right: 8px;
  color: ${(props) => props.theme.colors.lightText};
`

interface ReturnPropsType {
  prefix?: string
  loading?: boolean
  color?: string
  backgroundColor?: string
  children: any
}

const Tag = ({
  loading,
  prefix = '',
  children,
  color = theme.colors.title,
  backgroundColor = theme.colors.lightGray,
}: ReturnPropsType) => {
  if (loading) {
    return (
      <Container color={color} backgroundColor={backgroundColor}>
        {prefix ? <Prefix>{prefix}</Prefix> : null}
        <FontAwesomeIcon icon="spinner-third" style={{ fontSize: 12 }} spin />
      </Container>
    )
  }

  return (
    <Container color={color} backgroundColor={backgroundColor}>
      {prefix ? <Prefix>{prefix}</Prefix> : null}
      {children}
    </Container>
  )
}

export default Tag
