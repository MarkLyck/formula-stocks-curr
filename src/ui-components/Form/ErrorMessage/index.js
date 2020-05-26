import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MessageContainer } from './styles'

const ErrorMessage = ({ children }) => (
  <div style={{ position: 'relative', width: '100%' }} data-test-id="error-message">
    <MessageContainer>
      <FontAwesomeIcon icon="exclamation-circle" style={{ color: '#fff' }} />
      <p>{children}</p>
    </MessageContainer>
  </div>
)

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

export default ErrorMessage
