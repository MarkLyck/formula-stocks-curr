/* eslint max-len: 0 */
import React, { Component } from 'react'
import Router from 'next/router'
import { isClient } from 'common/utils/featureTests'
import MenuItem from './MenuItem'
import { MenuList } from './styles'

const routes = [
  { name: 'trades', icon: 'flask', route: 'trades' },
  { name: 'portfolio', icon: 'chart-line', route: 'portfolio' },
  { name: 'suggestions', icon: 'tasks', route: 'suggestions' },
  { name: 'AI reports', icon: 'brain', route: 'reports', badge: 'new' },
  { name: 'articles', icon: 'newspaper', route: 'articles' },
  { name: 'admin', icon: 'tachometer', route: 'admin' },
  { name: 'account', icon: 'user', route: 'account' },
  { name: 'logout', icon: 'sign-out-alt', route: 'logout' },
  { name: 'support', icon: 'question-circle', route: 'support' },
]

class SideMenu extends Component {
  state = { activeRoute: '', isVisible: this.props.isPopOver }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (isClient) {
      const route = routes.reduce((acc, curr, i) => {
        if (Router.router.pathname.includes(curr.route)) {
          acc = curr.route
        }
        return acc
      }, '')
      return { activeRoute: route }
    } else {
      return prevState
    }
  }

  setActiveRoute = route => this.setState({ activeRoute: route })

  render() {
    const { user, onRequestClose } = this.props
    const { activeRoute, isVisible } = this.state

    return (
      <MenuList isVisible={isVisible}>
        {routes.map(route => (
          <MenuItem
            setActiveRoute={this.setActiveRoute}
            closeMenu={onRequestClose}
            key={route.route}
            icon={route.icon}
            name={route.name}
            route={route.route}
            isActive={route.route === activeRoute}
            user={user}
            badge={route.badge}
          />
        ))}
      </MenuList>
    )
  }
}

export default SideMenu
