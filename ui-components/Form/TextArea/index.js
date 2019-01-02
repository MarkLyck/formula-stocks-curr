import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FieldContainer, TextAreaStyled } from './styles'

class TextArea extends Component {
  state = {
    focused: false,
  }

  onFocus = () => this.setState({ focused: true })
  onBlur = e => {
    const { onBlur = () => {} } = this.props
    this.setState({ focused: false })
    onBlur(e)
  }

  render() {
    const {
      id,
      css = '',
      className = '',
      autoFocus,
      onChange = () => {},
      type,
      placeholder,
      required,
      inputState,
    } = this.props
    const { focused } = this.state

    return (
      <FieldContainer className={`field ${className} ${focused ? 'field--focused' : ''}`} css={css}>
        <TextAreaStyled
          id={id}
          autoFocus={autoFocus}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={onChange}
          type={type || 'text'}
          placeholder={placeholder}
          required={required}
        />
      </FieldContainer>
    )
  }
}

export default TextArea
