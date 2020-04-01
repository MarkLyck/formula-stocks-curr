import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SlideIn from 'components/Dialogs/SlideIn'
import SideMenu from 'ui-components/SideMenu'
import { hasStorage, isBrowser } from 'common/utils/featureTests'
import PlanMenu from './planMenu'
import AdminButtons from './adminButtons'
import ArticlesBackButton from './articlesBackButton'
import { Bar, Logo, LeftContent, HamburgerButton } from './styles'

let selectedPlan =
  hasStorage && localStorage.getItem('selectedPlan') ? localStorage.getItem('selectedPlan').toUpperCase() : 'ENTRY'

class NavBar extends Component {
  state = {
    sideMenuVisible: false,
    logoClickable: false,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ logoClickable: true }), 500)
  }

  handleSideMenuToggle = () => this.setState({ sideMenuVisible: !this.state.sideMenuVisible })
  goToFrontPage = () => {
    if (this.state.logoClickable) Router.push('/')
  }

  render() {
    const { user } = this.props
    const { sideMenuVisible } = this.state
    const path = Router.router.pathname || ''

    const isPlanPage = path.includes('portfolio') || path.includes('suggestions') || path.includes('trades')
    const isAdminPage = path.includes('admin')
    const isArticlePage = Router.router.route === '/dashboard/articles/article'
    // if (!isPlanPage && !isAdminPage && !isArticlePage) return (<Bar><span /><Logo /></Bar>)

    return (
      <Bar>
        {isArticlePage && <ArticlesBackButton />}
        <LeftContent>
          <HamburgerButton onClick={this.handleSideMenuToggle}>
            <FontAwesomeIcon icon={['far', 'bars']} />
          </HamburgerButton>
          {isPlanPage && <PlanMenu selectedPlan={selectedPlan} className="plan-menu-container" route={path} />}
          {isAdminPage && <AdminButtons route={path} />}
        </LeftContent>
        {/* {isPlanPage && <PlanButtons selectedPlan={selectedPlan} actions={actions} />} */}
        <Logo onClick={this.goToFrontPage} isAdminPage={isAdminPage} />
        <SlideIn isVisible={sideMenuVisible} onRequestClose={this.handleSideMenuToggle}>
          <SideMenu user={user} isPopOver onRequestClose={this.handleSideMenuToggle} />
        </SlideIn>
      </Bar>
    )
  }
}

NavBar.propTypes = {
  location: PropTypes.object,
}

export default NavBar
