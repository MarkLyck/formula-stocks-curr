import React, { Component } from 'react'
import platform from 'platform'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import ReactModal from 'react-modal'
import { hasStorage, isBrowser } from 'common/utils/featureTests'
import { getDeviceType } from 'common/utils/helpers'
import ModalHeader from 'components/Dialogs/ModalHeader'
import AccountInfo from './AccountInfo'
import BillingInfo from './BillingInfo'
import { ModalContainer, smallModalContentStyles } from '../styles'
import { USER_SIGNUP, USER_LOGIN } from 'common/queries'

const SignUp = ({ onRequestClose, planPrice }) => {
  const [userSignup] = useMutation(USER_SIGNUP)
  const [userLogin] = useMutation(USER_LOGIN)
  ReactModal.setAppElement('body')
  const [accountInfo, setAccountInfo] = useState({})
  const [signupError, setSignupError] = useState('')
  const [page, setPage] = useState(1)

  const nextPage = accountInfo => {
    setPage(page + 1)
    setAccountInfo(accountInfo)
  }

  const handleSignup = async ({ firstName, lastName, taxPercent, showSuccess, stripeToken }) => {
    const plan = hasStorage && localStorage.getItem('selectedPlan') ? localStorage.getItem('selectedPlan') : 'entry'
    const type = plan === 'entry' ? 'trial' : 'subscriber'
    try {
      const signupData = await userSignup({
        variables: {
          email: accountInfo.email,
          password: accountInfo.password,
          stripeToken,
          firstName,
          lastName,
          planName,
          type,
          taxPercent,
          billingPeriod: 'MONTHLY',
          address: {
            country: accountInfo.country,
            city: accountInfo.city,
            postalCode: accountInfo.postalCode,
            address: accountInfo.address,
          },
          device: {
            os: platform.os.family,
            product: platform.product,
            browser: platform.name,
            type: getDeviceType(),
          },
        },
      })

      console.log('signupData', signupData)
      const loginData = await userLogin({ variables: { email: accountInfo.email, password: accountInfo.password } })
      console.log('loginData', loginData)

      // save authToken
      const authToken = loginData.data.userLogin.auth.idToken
      if (hasStorage) localStorage.authToken = authToken
      if (isBrowser) window.authToken = authToken

      showSuccess()

      // shortly show the signup success message before sending them to the dashboard
      setTimeout(() => Router.push('/dashboard/portfolio'), 200)

      if (process.env.NODE_ENV === 'production' && window.fbq) {
        // Facebook pixel tracking
        window.fbq('track', 'Subscribe', {
          value: PRICE,
          currency: 'USD',
        })
      }
    } catch (error) {
      let errorMessage = error.message
      console.error('signup error', error)
      if (error.errors && error.errors.length) {
      } else if (error.graphQLErrors && error.graphQLErrors.length) {
        const graphQLError = error.graphQLErrors[0]

        if (graphQLError.details && graphQLError.details.password)
          errorMessage = error.graphQLErrors[0].details.password
        if (graphQLError.details && graphQLError.details.email) errorMessage = error.graphQLErrors[0].details.email
        // handle stripe errors from GQL trigger.before
        if (graphQLError.message.includes('stripe')) {
          const rawError = JSON.parse(graphQLError.message)
          if (rawError.raw && rawError.raw.message) errorMessage = rawError.raw.message
          if (rawError.raw.code === 'card_declined') {
            errorMessage = 'Your card was declined. Please check your card details.'
          }
        }
      }
      setSignupError(errorMessage)
    }
  }

  return (
    <ReactModal isOpen onRequestClose={onRequestClose} overlayClassName="modal-overlay" style={smallModalContentStyles}>
      <ModalContainer>
        <ModalHeader title="Sign up" toggleModal={onRequestClose} />
        {page === 1 && <AccountInfo nextPage={this.nextPage} />}
        {page === 2 && (
          <BillingInfo
            taxPercent={accountInfo.taxPercent}
            handleSignup={this.handleSignup}
            signupError={signupError}
            planPrice={planPrice}
          />
        )}
      </ModalContainer>
    </ReactModal>
  )
}

export default SignUp
