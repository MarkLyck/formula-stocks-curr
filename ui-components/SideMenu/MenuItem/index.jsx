import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { hasStorage } from 'common/utils/featureTests'
import { Button } from './styles'

class MenuItem extends Component {
  clickHandler = () => {
    const { route, setActiveRoute, closeMenu } = this.props
    if (route === 'logout') {
      if (hasStorage) localStorage.removeItem('graphcoolToken')
      Router.push('/')
      return
    } else if (route === 'support') {
      window.Intercom('boot', {
        app_id: 'i194mpvo',
      })
      window.Intercom('showNewMessage')
      return
    }
    setActiveRoute(route)
    closeMenu()
    Router.push(`/dashboard/${route}`)
  }

  render() {
    const { route, name, icon, isActive, userType } = this.props

    if ((route === 'admin' || route === 'reports') && userType !== 'admin') {
      return null
    }

    return (
      <Button onClick={this.clickHandler} isActive={isActive}>
        <FontAwesomeIcon icon={icon} />
        <h4>{name}</h4>
      </Button>
    )
  }
}

MenuItem.propTypes = {
  icon: PropTypes.string,
  route: PropTypes.string,
  isActive: PropTypes.bool,
  setActiveRoute: PropTypes.func,
  closeMenu: PropTypes.func,
}

export default MenuItem
