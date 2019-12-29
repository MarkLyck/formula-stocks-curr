import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorContainer, ErrorHeader, ErrorText } from './styles'
import logoutUser from 'common/utils/logout'
import PermissionError from '../PermissionError'

class LoadingError extends Component {
  componentDidMount() {
    console.error(this.props.error)
  }
  render() {
    const { error, background, boxShadow } = this.props
    let errorText = 'Please try to refresh the page.'

    if (error && error.message.includes('permission')) {
      return <PermissionError />
    } else if (error && error.message.includes('Token expired')) {
      logoutUser('/dashboard/login')
      return null
    }

    return (
      <ErrorContainer background={background} boxShadow={boxShadow}>
        <FontAwesomeIcon icon="exclamation-circle" />
        <ErrorHeader>Whoops, looks like something went wrong.</ErrorHeader>
        <ErrorText>{errorText}</ErrorText>
      </ErrorContainer>
    )
  }
}

export default LoadingError
