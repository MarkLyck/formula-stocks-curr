import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useMutation } from '@apollo/react-hooks'
import ReactModal from 'react-modal'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { hasStorage, isBrowser } from '~/common/utils/featureTests'
import { ModalContainer, smallModalContentStyles } from '../styles'
import { ForgotPassword } from './styles'
import { Formik } from 'formik'
import Form, { Row, Field, ErrorMessage } from '~/ui-components/Form'
import ModalHeader from '~/components/Dialogs/ModalHeader'
import { Button } from 'antd'
import ScaleIn from '~/ui-components/Animations/ScaleIn'
import ResetPassword from './ResetPassword'
import { USER_LOGIN } from '~/common/queries'

const StyledModal = styled(ReactModal)`
  @media (max-width: 500px) {
    width: 100% !important;
    height: 100% !important;

    > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`

const StyledButton = styled(Button)`
  ${(props) => (props.success ? `background: ${props.theme.colors.secondary};` : '')}
  ${(props) => (props.success ? `pointer-events: none;` : '')}
`

const validate = (values) => {
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

const renderErrors = (errors, touched, emailValueHasChanged) => {
  let errorText = ''

  if (touched.password && errors.password) errorText = errors.password
  if (touched.email && errors.email && (emailValueHasChanged || touched.password)) errorText = errors.email

  return errorText ? <ErrorMessage>{errorText}</ErrorMessage> : null
}

const handleLogin = (userLogin, setLoginSuccess, values, { setSubmitting, setErrors }) => {
  return userLogin({ variables: { email: values.email, password: values.password } })
    .then((response) => {
      // save authToken
      const authToken = response.data.userLogin.auth.idToken
      if (hasStorage) localStorage.authToken = authToken
      if (isBrowser) window.authToken = authToken

      setSubmitting(false)
      setLoginSuccess(true)
      // shortly show the login success message before sending them to portfolio
      setTimeout(() => Router.push('/dashboard/portfolio'), 200)
    })
    .catch((error) => {
      let errorText = 'Something went wrong'
      if (error && error.graphQLErrors) {
        if (error.graphQLErrors[0].code === 'ValidationError') {
          if (error.graphQLErrors[0].details.password) errorText = error.graphQLErrors[0].details.password
        }
      }

      setErrors({ email: errorText })
      setSubmitting(false)
    })
}

const Login = ({ onRequestClose, apolloClient }) => {
  ReactModal.setAppElement('body')
  const [userLogin, { data }] = useMutation(USER_LOGIN)
  const [showResetPassword, setShowResetPassword] = useState(false)
  const [emailValueHasChanged, setEmailValueHasChanged] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)

  const buttonColor = loginSuccess ? 'green' : 'primary'
  const buttonText = loginSuccess ? 'Success' : 'Login'

  return (
    <StyledModal
      isOpen
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      style={smallModalContentStyles}
    >
      <ScaleIn>
        <ModalContainer>
          {!showResetPassword ? (
            <React.Fragment>
              <ModalHeader title="Login" toggleModal={onRequestClose} />
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validate={validate}
                onSubmit={handleLogin.bind(null, userLogin, setLoginSuccess)}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    {renderErrors(errors, touched, emailValueHasChanged)}
                    <Row>
                      <Field
                        autoFocus
                        id="email"
                        type="email"
                        name="email"
                        label="email"
                        icon="envelope"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={(e) => {
                          handleChange(e)
                          setEmailValueHasChanged(true)
                        }}
                        onBlur={handleBlur}
                        value={values.email}
                        data-hj-whitelist
                      />
                    </Row>
                    <Row>
                      <Field
                        id="password"
                        type="password"
                        name="password"
                        label="password"
                        autoComplete="current-password"
                        icon={['far', 'lock-alt']}
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </Row>
                    <StyledButton
                      htmlType="submit"
                      type="primary"
                      loading={isSubmitting}
                      success={loginSuccess}
                      size="large"
                    >
                      {buttonText}
                    </StyledButton>
                    <ForgotPassword onClick={() => setShowResetPassword(true)}>Forgot your password?</ForgotPassword>
                  </Form>
                )}
              </Formik>
            </React.Fragment>
          ) : (
            <ResetPassword
              onRequestClose={onRequestClose}
              backToLogin={() => setShowResetPassword(false)}
              apolloClient={apolloClient}
            />
          )}
        </ModalContainer>
      </ScaleIn>
    </StyledModal>
  )
}
export default Login
