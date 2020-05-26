import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { scroller } from 'react-scroll'
import { hasStorage, isBrowser } from '~/common/utils/featureTests'
import logoutUser from '~/common/utils/logout'
// import CreateUser from '~/components/Dashboard/Admin/Users/CreateUser'
import Button from '~/ui-components/Button'

import { NavLinks, ScrollLink, NavbarContainer, Logo } from './styles'

const Navbar = ({ toggleFAQModal, toggleLoginModal, toggleSignUpModal }) => {
  const [loggedIn, setLoggedIn] = useState(
    (hasStorage && localStorage.getItem('authToken')) || (isBrowser && window.authToken)
  )

  const logout = () => {
    logoutUser()
    setLoggedIn(false)
  }

  const goToDashboard = () => Router.push('/dashboard/portfolio')

  const LoggedOutLinks = () => (
    <NavLinks>
      <Button variant="raised" type="light" onClick={toggleLoginModal}>
        <FontAwesomeIcon icon="sign-in-alt" />
        Login
      </Button>
      <Button variant="raised" background="primary" onClick={toggleSignUpModal}>
        Sign up
      </Button>
    </NavLinks>
  )

  const LoggedInLinks = () => (
    <NavLinks>
      <Button variant="raised" onClick={goToDashboard}>
        <FontAwesomeIcon icon="chart-line" />
        Dashboard
      </Button>
      <Button variant="raised" type="light" color="black" hoverColor="error" onClick={logout}>
        <FontAwesomeIcon icon="sign-out-alt" />
        Log out
      </Button>
    </NavLinks>
  )

  return (
    <NavbarContainer position="fixed" color="default">
      <Logo onClick={() => scroller.scrollTo('hero', { smooth: true, offset: -100 })} />
      {/* <CreateUser /> */}
      <ScrollLink className="performance" to="performance" smooth offset={-100}>
        Performance
      </ScrollLink>
      <ScrollLink className="how-it-works" to="how-it-works" smooth offset={-100}>
        How it works
      </ScrollLink>
      <ScrollLink className="pricing" to="first-month-on-us" smooth offset={-100}>
        Pricing
      </ScrollLink>
      <ScrollLink className="faq-link" to="" onClick={toggleFAQModal}>
        FAQ
      </ScrollLink>
      {loggedIn ? <LoggedInLinks /> : <LoggedOutLinks />}
    </NavbarContainer>
  )
}

Navbar.propTypes = {
  actions: PropTypes.object,
}

export default Navbar
