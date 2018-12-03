/* eslint max-len: 0 */
import React, { Component } from 'react'
import Router from 'next/router'
import { isClient } from 'common/utils/featureTests'
import MenuItem from './MenuItem'
import { MenuList } from './styles'

const routes = [
  { name: 'trades', icon: 'flask' },
  { name: 'portfolio', icon: 'chart-line' },
  { name: 'suggestions', icon: 'tasks' },
  { name: 'reports', icon: 'tachometer' },
  { name: 'articles', icon: 'newspaper' },
  { name: 'admin', icon: 'tachometer' },
  { name: 'account', icon: 'user' },
  { name: 'logout', icon: 'sign-out-alt' },
  { name: 'support', icon: 'question-circle' },
]

class SideMenu extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (isClient) {
      const route = routes.reduce((acc, curr, i) => {
        if (Router.router.pathname.includes(curr.name)) {
          acc = curr.name
        }
        return acc
      }, '')
      return { activeRoute: route }
    } else {
      return prevState
    }
  }
  state = { activeRoute: '' }

  setActiveRoute = route => this.setState({ activeRoute: route })

  render() {
    const { userType, isPopOver } = this.props
    const { activeRoute } = this.state

    return (
      <MenuList isPopOver={isPopOver}>
        {routes.map(route => (
          <MenuItem
            setActiveRoute={this.setActiveRoute}
            key={route.name}
            icon={route.icon}
            route={route.name}
            isActive={route.name === activeRoute}
            userType={userType}
          />
        ))}
      </MenuList>
    )
  }
}

export default SideMenu
