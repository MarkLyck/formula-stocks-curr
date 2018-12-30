import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { hasStorage } from 'common/utils/featureTests'
import { Button, Badge } from './styles'

class MenuItem extends Component {
  clickHandler = () => {
    const { route, setActiveRoute, closeMenu, user } = this.props
    if (route === 'logout') {
      if (hasStorage) localStorage.removeItem('graphcoolToken')
      Router.push('/')
      return
    } else if (route === 'support') {
      window.Intercom('boot', {
        app_id: 'i194mpvo',
        name: user ? user.name : '',
        email: user ? user.email : '',
        user_id: user ? user.id : '',
        created_at: user ? user.createdAt : '',
      })
      window.Intercom('showNewMessage')
      return
    }
    setActiveRoute(route)
    // closeMenu is only a function on mobile
    if (closeMenu) closeMenu()
    Router.push(`/dashboard/${route}`)
  }

  render() {
    const { route, name, icon, isActive, user, badge } = this.props
    if (route === 'admin' && (!user || user.type !== 'admin')) return null

    return (
      <Button onClick={this.clickHandler} isActive={isActive} data-test-id={`${name}-menu-btn`}>
        <FontAwesomeIcon icon={icon} />
        <h4>{name}</h4>
        {badge && <Badge>{badge}</Badge>}
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
