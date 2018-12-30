import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactModal from 'react-modal'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ModalContainer, smallModalContentStyles } from '../styles'
import { ForgotPassword } from './styles'
import { Formik } from 'formik'
import Form, { Row, Field, ErrorMessage } from 'ui-components/Form'
import ModalHeader from 'components/Dialogs/ModalHeader'
import Button from 'ui-components/Button'
import ResetPassword from './ResetPassword'

const AUTHENTICATE_EMAIL_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
  static getDerivedStateFromProps(props, state) {
    ReactModal.setAppElement('body')
    return state
  }
  emailValueHasChanged = false

  state = {
    showResetPassword: false,
    loginError: '',
  }

  validate = values => {
    let errors = {}
    if (!values.email) {
      errors.email = 'Please enter an email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.password = 'Please enter a password'
    } else if (values.password.length < 4) {
      errors.password = 'Password must be at least 4 characters'
    }

    return errors
  }

  handleLogin = (values, { setSubmitting, setErrors }) => {
    return this.props
      .signinUser({ variables: { email: values.email, password: values.password } })
      .then(response => {
        setSubmitting(false)
        localStorage.setItem('graphcoolToken', response.data.authenticateUser.token)
        Router.push('/dashboard/portfolio')
      })
      .catch(error => {
        console.error(error)
        const errorText = error.message.includes('Invalid Credentials')
          ? 'Invalid login details'
          : 'Something went wrong'
        setErrors({ email: errorText })
        setSubmitting(false)
      })
  }

  renderErrors = (errors, touched) => {
    let errorText = ''

    if (touched.password && errors.password) errorText = errors.password
    if (touched.email && errors.email && (this.emailValueHasChanged || touched.password)) errorText = errors.email

    return errorText ? <ErrorMessage>{errorText}</ErrorMessage> : null
  }

  toggleResetPassword = () => this.setState({ showResetPassword: true })

  render() {
    const { onRequestClose, apolloClient } = this.props
    const { showResetPassword } = this.state

    return (
      <ReactModal
        isOpen
        onRequestClose={onRequestClose}
        overlayClassName="modal-overlay"
        style={smallModalContentStyles}
      >
        <ModalContainer>
          {!showResetPassword ? (
            <React.Fragment>
              <ModalHeader title="Login" toggleModal={onRequestClose} />
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validate={this.validate}
                onSubmit={this.handleLogin}
                render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    {this.renderErrors(errors, touched)}
                    <Row>
                      <Field
                        autoFocus
                        id="email"
                        type="email"
                        name="email"
                        label="email"
                        icon="envelope"
                        placeholder="Email"
                        onChange={e => {
                          handleChange(e)
                          this.emailValueHasChanged = true
                        }}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </Row>
                    <Row>
                      <Field
                        id="password"
                        type="password"
                        name="password"
                        label="password"
                        icon={['far', 'lock-alt']}
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </Row>
                    <Button type="submit" color="primary" variant="raised" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <FontAwesomeIcon icon="spinner-third" spin style={{ fontSize: '1.25rem' }} />
                      ) : (
                        'Login'
                      )}
                    </Button>
                    <ForgotPassword onClick={this.toggleResetPassword}>Forgot your password?</ForgotPassword>
                  </Form>
                )}
              />
            </React.Fragment>
          ) : (
            <ResetPassword onRequestClose={onRequestClose} apolloClient={apolloClient} />
          )}
        </ModalContainer>
      </ReactModal>
    )
  }
}

Login.propTypes = {
  signinUser: PropTypes.func,
  onClose: PropTypes.func,
}

export default graphql(AUTHENTICATE_EMAIL_USER, { name: 'signinUser' })(Login)
