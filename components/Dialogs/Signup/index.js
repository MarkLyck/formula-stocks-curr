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

// TODO redo as functional component

class SignUp extends Component {
  static getDerivedStateFromProps(props, state) {
    ReactModal.setAppElement('body')
    return state
  }

  state = {
    accountInfo: {},
    page: 1,
    signupError: '',
  }

  nextPage = accountInfo => this.setState({ page: this.state.page + 1, accountInfo })

  handleSignup = async (name, taxPercent, showSuccess, { token }) => {
    const { apolloClient } = this.props
    const { accountInfo } = this.state

    const plan = hasStorage && localStorage.getItem('selectedPlan') ? localStorage.getItem('selectedPlan') : 'ENTRY'
    const type = plan === 'ENTRY' ? 'trial' : 'subscriber'

    try {
      const { data } = await apolloClient.query({
        query: SIGNUP_USER,
        variables: {
          email: accountInfo.email,
          password: accountInfo.password,
          stripeToken: token.id,
          name,
          plan,
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
      if (isBrowser) {
        window.graphcoolToken = data.signupUser.token
      }
      if (hasStorage) {
        localStorage.setItem('graphcoolToken', data.signupUser.token)
      }
      showSuccess()
      // shortly show the signup success message before sending them to portfolio
      setTimeout(() => Router.push('/dashboard/portfolio'), 200)
    } catch (error) {
      console.error('signup error', error)
      this.setState({ signupError: error.message })
    }
  }

  render() {
    const { page, accountInfo, signupError } = this.state
    const { onRequestClose, planPrice } = this.props

    return (
      <ReactModal
        isOpen
        onRequestClose={onRequestClose}
        overlayClassName="modal-overlay"
        style={smallModalContentStyles}
      >
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
}

export default compose(graphql(SIGNIN_USER_MUTATION, { name: 'signinUser' }))(SignUp)
