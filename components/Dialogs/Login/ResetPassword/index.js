import React, { Component } from 'react'
import { Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form, { Row, Field, ErrorMessage } from 'ui-components/Form'
import Button from 'ui-components/Button'
import ModalHeader from 'components/Dialogs/ModalHeader'
import Success from 'ui-components/Success'

class ResetPassword extends Component {
  validate = values => {
    let errors = {}
    if (!values.email) {
      errors.email = 'Please enter an email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  renderErrors = (errors, touched) => {
    let errorText = ''

    if (touched.email && errors.email) errorText = errors.email

    return errorText ? <ErrorMessage>{errorText}</ErrorMessage> : null
  }

  onSubmit = async ({ email }, { setSubmitting, setStatus, setErrors }) => {
    // TODO move this to a server-side function.
    const response = await fetch('https://secure.8base.com/dbconnections/change_password', {
      method: 'POST',
      body: JSON.stringify({
        client_id: 'cNzi57DVxYCnIWUrRiNEHHhhzTEKCaF6',
        email,
        connection: '', //DB connection name (ask 8base support for this.)
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200) {
      setStatus({ success: true })
    } else {
      // TODO add better error handling
      alert('something went wrong, please contact support')
    }

    setSubmitting(false)
  }

  render() {
    const { backToLogin, onRequestClose } = this.props

    return (
      <Formik
        initialValues={{
          email: '',
        }}
        validate={this.validate}
        onSubmit={this.onSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, status }) => {
          if (status && status.success) {
            return <Success message="Success! Password reset email sent" onClick={backToLogin} buttonText="back" />
          }

          return (
            <>
              <ModalHeader title="Reset Password" toggleModal={backToLogin} />
              <Form onSubmit={handleSubmit.bind(this)}>
                {this.renderErrors(errors, touched)}
                <Row>
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    label="email"
                    icon="envelope"
                    placeholder="example@email.com"
                    onChange={e => {
                      handleChange(e)
                      this.emailValueHasChanged = true
                    }}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </Row>
                <Button type="submit" backgroundColor="primary" color="white" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <FontAwesomeIcon icon="spinner-third" spin style={{ fontSize: '1.25rem' }} />
                  ) : (
                    'Send password reset email'
                  )}
                </Button>
              </Form>
            </>
          )
        }}
      </Formik>
    )
  }
}

export default ResetPassword
