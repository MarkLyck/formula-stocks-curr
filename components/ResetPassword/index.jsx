import React, { Component } from 'react'
import Router from 'next/router'
import { Formik } from 'formik'
import gql from 'graphql-tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form, { Row, Field, ErrorMessage } from 'ui-components/Form'
import { Logo, FieldLabel, ResetPWContainer } from './styles'
import Button from 'ui-components/Button'
import Success from 'ui-components/Success'

const RESET_PASSWORD = gql`
  query resetPassword($email: String!, $newPassword: String!, $token: String!) {
    resetPassword(email: $email, newPassword: $newPassword, token: $token) {
      id
    }
  }
`

class ResetPassword extends Component {
  validate = values => {
    let errors = {}
    if (!values.newPassword) {
      errors.newPassword = 'Please enter a new password'
    } else if (!values.repeatPassword) {
      errors.repeatPassword = 'Please enter repeat the password'
    } else if (values.newPassword !== values.repeatPassword) {
      errors.repeatPassword = 'Passwords do not match'
    }

    return errors
  }

  renderErrors = (errors, touched) => {
    let errorText = ''
    if (touched.newPassword && errors.newPassword) errorText = errors.newPassword
    if (touched.repeatPassword && errors.repeatPassword) errorText = errors.repeatPassword

    return errorText ? <ErrorMessage>{errorText}</ErrorMessage> : null
  }

  onSubmit = async (values, { setSubmitting, setStatus, setErrors }) => {
    const { location, apolloClient } = this.props
    const email = Router.router.query.email || ''
    const token = Router.router.query.token || ''
    const { newPassword } = values

    if (!email) return 'missing email'
    if (!token) return 'missing token'

    const response = await apolloClient
      .query({
        query: RESET_PASSWORD,
        variables: { email, token, newPassword },
      })
      .catch(err => {
        setErrors({ newPassword: 'Incorrect token, please check your email for a valid link.' })
      })
    if (response && response.data) {
      setStatus({ success: true })
    }
    setSubmitting(false)
  }

  render() {
    const { location } = this.props
    if (!Router || !Router.router) return null
    if (!Router.router.query || !Router.router.query.token || !Router.router.query.email) return 'missing token'

    return (
      <ResetPWContainer className="test">
        <Logo />
        <Formik
          initialValues={{
            newPassword: '',
            repeatPassword: '',
          }}
          validate={this.validate}
          onSubmit={this.onSubmit}
          render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, status }) => {
            if (status && status.success) {
              return (
                <Success
                  message="Success! Password was reset"
                  onClick={() => Router.push('/')}
                  buttonText="return to home page"
                  style={{ marginTop: '40%' }}
                />
              )
            }

            return (
              <Form onSubmit={handleSubmit}>
                {this.renderErrors(errors, touched)}
                <FieldLabel>New password</FieldLabel>
                <Row>
                  <Field
                    id="newPassword"
                    type="password"
                    name="newPassword"
                    label="newPassword"
                    icon={['far', 'lock-alt']}
                    placeholder="●●●●●●"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.newPassword}
                  />
                </Row>
                <FieldLabel>Repeat password</FieldLabel>
                <Row>
                  <Field
                    id="repeatPassword"
                    type="password"
                    name="repeatPassword"
                    label="repeatPassword"
                    icon={['far', 'lock-alt']}
                    placeholder="●●●●●●"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.repeatPassword}
                  />
                </Row>
                <Button type="submit" variant="raised" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <FontAwesomeIcon icon="spinner-third" spin style={{ fontSize: '1.25rem' }} />
                  ) : (
                    'Reset password'
                  )}
                </Button>
              </Form>
            )
          }}
        />
      </ResetPWContainer>
    )
  }
}

export default ResetPassword