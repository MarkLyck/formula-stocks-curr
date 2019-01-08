import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Router from 'next/router'
import { isClient, hasStorage } from 'common/utils/featureTests'
import PlanContext from 'common/Contexts/PlanContext'
import SideMenu from 'ui-components/SideMenu'
import NavBar from 'components/Dashboard/Navbar'
import Onboarding from './Onboarding'
import { DashboardLayout, DashboardContent } from './styles'

const GET_LOGGED_IN_USER = gql`
  query {
    loggedInUser {
      id
      type
      plan
      intros
      name
      email
      createdAt
    }
  }
`

const withDashboard = WrappedComponent => {
  class WithDashboard extends Component {
    state = {
      planName:
        hasStorage && localStorage.getItem('selectedPlan')
          ? localStorage.getItem('selectedPlan').toUpperCase()
          : 'ENTRY',
      oboardingVisible: false,
    }

    componentDidMount() {
      // if they have no token saved. Push them to the front page immediately.
      if (hasStorage && !localStorage.getItem('graphcoolToken')) {
        console.warn('!!! NO localStorage token')
        Router.push('/')
      }
      if (isClient && window.Intercom) {
        window.Intercom('shutdown')
      }
    }

    setPlan = planName => {
      if (hasStorage) localStorage.setItem('selectedPlan', planName)
      this.setState({ planName })
    }

    setOnboardingVisible = oboardingVisible => this.setState({ oboardingVisible })

    getContext = () => ({
      planName: this.state.planName,
      setPlan: this.setPlan,
    })

    render() {
      const { location, ...extraProps } = this.props
      const { oboardingVisible } = this.state
      if (!isClient) return null
      return (
        <Query query={GET_LOGGED_IN_USER}>
          {({ loading, error, data, refetch }) => {
            if (data && data.loggedInUser && data.loggedInUser.id === null) {
              // if the token they have is incorrect or expired. Push them to the front page.
              console.warn('!!! loggedInUser.id === null')
              if (hasStorage) localStorage.removeItem('graphcoolToken')
              Router.push('/')
            }

            let user = {}
            if (data && data.loggedInUser) {
              user = data.loggedInUser

              if (hasStorage && !localStorage.getItem('selectedPlan')) {
                this.setPlan(userPlan)
              }
            }

            const showIntroFirstTime = user.intros && !user.intros.formulaStocks

            return (
              <DashboardLayout>
                <Onboarding
                  onboardingVisible={showIntroFirstTime || oboardingVisible}
                  user={user}
                  setOnboardingVisible={this.setOnboardingVisible}
                />
                <SideMenu location={location} user={user} setOnboardingVisible={this.setOnboardingVisible} />
                <PlanContext.Provider value={this.getContext()}>
                  <DashboardContent>
                    <NavBar location={location} user={user} />
                    <WrappedComponent
                      location={location}
                      userType={user.type}
                      userPlan={user.plan}
                      user={user}
                      {...extraProps}
                    />
                  </DashboardContent>
                </PlanContext.Provider>
              </DashboardLayout>
            )
          }}
        </Query>
      )
    }
  }

  return WithDashboard
}

export default withDashboard
