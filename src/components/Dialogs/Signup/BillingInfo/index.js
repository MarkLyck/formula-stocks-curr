import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { StripeProvider, Elements } from 'react-stripe-elements'
import { STRIPE_API_KEY } from '~/common/constants'
import CheckoutForm from './checkoutForm'

class BillingInfo extends Component {
  state = {
    termsIsVisible: false,
    firstName: '',
    lastName: '',
  }

  componentDidMount() {
    const href = '/?billing'
    const as = href
    Router.push(href, as, { shallow: true })
  }

  submitBillingInfo = () => {
    const { firstName, lastName, cardNumber, expiryDate, cvc } = this.state
    const billingDetails = {
      name: `${firstName} ${lastName}`,
      number: cardNumber,
      expiryDate,
      cvc,
    }
    this.props.handleSignup(billingDetails)
  }

  toggleTerms = () => this.setState({ termsIsVisible: !this.state.termsIsVisible })

  render() {
    const { planPrice, taxPercent, handleSignup, signupError } = this.props

    const taxAmount = planPrice * (taxPercent / 100)

    return (
      <StripeProvider apiKey={STRIPE_API_KEY}>
        <Elements>
          <CheckoutForm
            taxPercent={taxPercent}
            taxAmount={taxAmount}
            planPrice={planPrice}
            handleSignup={handleSignup}
            signupError={signupError}
          />
        </Elements>
      </StripeProvider>
    )
  }
}

BillingInfo.propTypes = {
  handleSignup: PropTypes.func.isRequired,
  signupError: PropTypes.string,
  tax: PropTypes.number,
}

export default BillingInfo
