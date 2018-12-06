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
  { name: 'AI reports', icon: 'tachometer', route: 'reports' },
  { name: 'articles', icon: 'newspaper', route: 'articles' },
  { name: 'admin', icon: 'tachometer', route: 'admin' },
  { name: 'account', icon: 'user', route: 'account' },
  { name: 'logout', icon: 'sign-out-alt', route: 'logout' },
  { name: 'support', icon: 'question-circle', route: 'support' },
]

class SideMenu extends Component {
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

  state = { activeRoute: '', isVisible: this.props.isPopOver }
  setActiveRoute = route => this.setState({ activeRoute: route })
  // TODO This also needs to close it's parent model. (then set this to false)
  closeMenu = () => this.setState({ isVisible: this.state.isVisible })

  render() {
    const { userType } = this.props
    const { activeRoute, isVisible } = this.state

    return (
      <MenuList isVisible={isVisible}>
        {routes.map(route => (
          <MenuItem
            setActiveRoute={this.setActiveRoute}
            closeMenu={this.closeMenu}
            key={route.route}
            icon={route.icon}
            name={route.name}
            route={route.route}
            isActive={route.route === activeRoute}
            userType={userType}
          />
        ))}
      </MenuList>
    )
  }
}

export default SideMenu
