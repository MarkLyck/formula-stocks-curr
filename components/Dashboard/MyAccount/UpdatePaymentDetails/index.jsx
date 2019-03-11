import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'ui-components/Button'
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements'
import theme from 'common/theme'
import Disclaimer from 'ui-components/Disclaimer'
import TermsOfService from 'components/Dialogs/TermsOfService'
import Form, { Row, Field, ErrorMessage } from 'ui-components/Form'
import { UpdateCardDetailsContainer, UpdateDetailsPaper, FieldContainer } from './styles'

const UPDATE_STRIPE_CUSTOMER = gql`
  query updateStripeCustomer($stripeCustomer: String!, $token: String!) {
    updateStripeCustomer(stripeCustomer: $stripeCustomer, token: $token) {
      success
    }
  }
`

const createOptions = () => ({
  style: {
    base: {
      color: '#32325D',
      fontWeight: 500,
      fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
      fontSize: '16px',
      fontSmoothing: 'antialiased',

      '::placeholder': {
        color: '#CFD7DF',
      },
      ':-webkit-autofill': {
        color: theme.colors.warning,
      },
    },
    invalid: {
      color: theme.colors.error,

      '::placeholder': {
        color: '#FFCCA5',
      },
    },
  },
})

class UpdatePaymentDetailsForm extends Component {
  state = {
    cardNumber: 'empty',
    cardCVC: 'empty',
    cardExpiry: 'empty',
    error: {},
    isSubmitting: false,
    success: false,
    updateDetailsError: '',
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.signupError) return { isSubmitting: false }
    return {}
  }

  setName = e => {
    e.preventDefault()
    this.name = e.target.value
  }

  name = ''

  handleBlur = elementName => {
    const newState = this.state
    newState[elementName] = 'filled'
    this.setState(newState)
  }

  handleFocus = elementName => {
    const newState = this.state
    newState[elementName] = 'focused'
    this.setState(newState)
  }

  showSuccess = () => this.setState({ isSubmitting: false, success: true })

  handleSubmit = e => {
    e.preventDefault()
    const { stripe, apolloClient, stripeCustomer } = this.props
    const { isSubmitting } = this.state

    if (isSubmitting) return null

    this.setState({ isSubmitting: true, error: {}, updateDetailsError: '' })
    stripe.createToken().then(async payload => {
      if (payload.error || !payload.token || !payload.token.id) {
        this.setState({ isSubmitting: false, error: payload.error })
      } else {
        console.log('stripeCustomer', stripeCustomer)
        try {
          const { data } = await apolloClient.query({
            query: UPDATE_STRIPE_CUSTOMER,
            variables: {
              stripeCustomer: stripeCustomer,
              token: payload.token.id,
            },
          })
          this.showSuccess()
        } catch (error) {
          console.error('UPDATE_STRIPE_CUSTOMER error', error)
          this.setState({ updateDetailsError: error.message, isSubmitting: false })
        }
      }
    })
    return e
  }

  renderErrors() {
    const { error, updateDetailsError } = this.state

    const formErrorMessage = error.message
    let errorMessage = updateDetailsError

    if (updateDetailsError.includes('timed out')) {
      errorMessage = 'Request timed out, please refresh and try again.'
    } else if (updateDetailsError.includes('GraphQL')) {
      errorMessage = 'Something went wrong, please check the card details and try again.'
    }

    if (errorMessage) return <ErrorMessage>{errorMessage}</ErrorMessage>
    else if (formErrorMessage) return <ErrorMessage>{formErrorMessage}</ErrorMessage>
  }

  toggleTerms = () => this.setState({ showTerms: !this.state.showTerms })

  render() {
    const { error, isSubmitting, showTerms, success } = this.state
    const { planPrice, taxAmount, taxPercent } = this.props
    const cardNumberError = error.message && error.message.indexOf('number') > -1

    const buttonColor = success ? 'green' : 'primary'
    const buttonText = success ? 'Success' : 'Update payment details'

    return (
      <UpdateCardDetailsContainer>
        <UpdateDetailsPaper>
          <Form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <Row>
              <FieldContainer>
                <FontAwesomeIcon icon="credit-card" />
                <CardNumberElement
                  className={`input stripe-input ${this.state.cardNumber} ${
                    cardNumberError && this.state.cardNumber !== 'empty' ? 'input-error' : ''
                  }`}
                  onBlur={() => this.handleBlur('cardNumber')}
                  onFocus={() => this.handleFocus('cardNumber')}
                  {...createOptions()}
                />
                <div className={`baseline baseline-${this.state.cardNumber}`} />
              </FieldContainer>
            </Row>

            <Row style={{ marginBottom: '24px' }}>
              <FieldContainer>
                <FontAwesomeIcon icon="calendar-times" />
                <CardExpiryElement
                  className={`input stripe-input ${this.state.cardExpiry}`}
                  onBlur={() => this.handleBlur('cardExpiry')}
                  onFocus={() => this.handleFocus('cardExpiry')}
                  {...createOptions()}
                />
              </FieldContainer>
              <FieldContainer>
                <FontAwesomeIcon icon={['far', 'lock-alt']} />
                <CardCVCElement
                  className={`input stripe-input ${this.state.cardCVC}`}
                  onBlur={() => this.handleBlur('cardCVC')}
                  onFocus={() => this.handleFocus('cardCVC')}
                  {...createOptions()}
                />
              </FieldContainer>
            </Row>
            <Button background={buttonColor} type="submit" variant="raised" disabled={isSubmitting || success} s>
              {isSubmitting ? (
                <FontAwesomeIcon icon="spinner-third" spin style={{ fontSize: '1.25rem' }} />
              ) : (
                buttonText
              )}
            </Button>
          </Form>
        </UpdateDetailsPaper>
      </UpdateCardDetailsContainer>
    )
  }
}

UpdatePaymentDetailsForm.propTypes = {
  stripe: PropTypes.object,
  taxAmount: PropTypes.number,
  taxPercent: PropTypes.number,
  planPrice: PropTypes.number,
  handleSignup: PropTypes.func,
}

export default injectStripe(UpdatePaymentDetailsForm)
