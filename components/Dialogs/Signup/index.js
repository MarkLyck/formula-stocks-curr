import React, { Component } from 'react'
import platform from 'platform'
import gql from 'graphql-tag'
import Router from 'next/router'
import { graphql, compose } from 'react-apollo'
import ReactModal from 'react-modal'
import { hasStorage } from 'common/utils/featureTests'
import { getDeviceType } from 'common/utils/helpers'
import ModalHeader from 'components/Dialogs/ModalHeader'
import AccountInfo from './AccountInfo'
import BillingInfo from './BillingInfo'
import { ModalContainer, smallModalContentStyles } from '../styles'

const SIGNUP_USER = gql`
  query signupUser(
    $email: String!
    $password: String!
    $name: String!
    $plan: String!
    $type: String!
    $stripeToken: String!
    $address: Json
    $device: Json
    $taxPercent: Float!
    $billingPeriod: String
  ) {
    signupUser(
      email: $email
      password: $password
      name: $name
      plan: $plan
      type: $type
      stripeToken: $stripeToken
      address: $address
      device: $device
      taxPercent: $taxPercent
      billingPeriod: $billingPeriod
    ) {
      id
      token
    }
  }
`

const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`

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

  handleSignup = async (name, taxPercent, { token }) => {
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
      if (hasStorage) {
        localStorage.setItem('graphcoolToken', data.signupUser.token)
      }
      Router.push('/dashboard/portfolio')
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
