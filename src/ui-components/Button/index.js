import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { darken } from 'polished'

const lightType = props => css`
  background-color: #fff;
  color: ${props.theme.colors[props.color || 'primary']};
  border: 1px solid ${darken(0.1, '#fff')};
  box-shadow: 0 0.25rem 0 0 ${darken(0.1, '#fff')};

  &:hover {
    color: #fff;
    background-color: ${props.theme.colors[props.hoverColor || 'primary']};
    border: 1px solid ${props.theme.colors[props.hoverColor || 'primary']};
    box-shadow: 0 0.25rem 0 0 ${darken(0.1, props.theme.colors[props.hoverColor || 'primary'])};
  }

  &:active {
    box-shadow: 0 0 0 0 ${darken(0.1, props.theme.colors[props.hoverColor || 'primary'])};
  }
`

const raised = props => css`
  background-color: ${props.theme.colors[props.background || 'primary']};
  border: 1px solid ${props.theme.colors[props.background || 'primary']};
  color: ${props.theme.colors[props.color || 'white']};
  border-radius: 4px;
  box-shadow: 0 0.25rem 0 0 ${darken(0.1, props.theme.colors[props.background || 'primary'])};

  ${props.disabled ? `background-color: #eee;` : ''}
  ${props.disabled ? `border-color: #eee;` : ''}
  ${props.disabled ? `color: ${props.theme.colors.gray};` : ''}
  ${props.disabled ? `box-shadow: 0 0.25rem 0 0 ${darken(0.1, '#ddd')};` : ''}

  ${
    !props.disabled
      ? `
  &:hover {
    color: #fff;
    border: 1px solid ${darken(0.05, props.theme.colors[props.background || 'primary'])};
    background-color: ${darken(0.05, props.theme.colors[props.background || 'primary'])};
    transform: translateY(-1px);
  }
  `
      : `
  &:hover {
    cursor: not-allowed;
    color: ${props.theme.colors.gray};
  }
  `
  }
  

  &:active {
    transform: translateY(0.25rem);
    box-shadow: 0 0 0 0 ${darken(0.1, props.theme.colors[props.background || 'primary'])};
  }

  ${props.type === 'light' && lightType(props)};
`

const Button = styled.button`
  color: ${props => props.theme.colors[props.color || 'black']};
  background: ${props => props.theme.colors[props.backgroundColor ? props.backgroundColor : 'primary']};
  transition: all 0.1s ease-in;
  font-weight: 600;
  font-size: 16px;
  border: none;
  padding: 8px 16px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  ${props => props.variant === 'raised' && raised(props)};
`

export default Button
