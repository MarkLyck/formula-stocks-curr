import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Router from 'next/router'
import { isClient, hasStorage } from 'common/utils/featureTests'
import PlanContext from 'common/Contexts/PlanContext'
import SideMenu from 'ui-components/SideMenu'
import NavBar from 'components/Dashboard/Navbar'
import { DashboardLayout, DashboardContent } from './styles'

const GET_LOGGED_IN_USER = gql`
  query {
    loggedInUser {
      id
      type
      plan
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
    }

    componentDidMount() {
      // if they have no token saved. Push them to the front page immediately.
      if (hasStorage && !localStorage.getItem('graphcoolToken')) {
        console.warn('!!! NO localStorage token')
        Router.push('/')
      }
      window.Intercom('shutdown')
    }

    setPlan = planName => {
      if (hasStorage) localStorage.setItem('selectedPlan', planName)
      this.setState({ planName })
    }

    getContext = () => ({
      planName: this.state.planName,
      setPlan: this.setPlan,
    })

    render() {
      const { location } = this.props
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

            let userType,
              userPlan = ''
            if (data && data.loggedInUser) {
              userType = data.loggedInUser.type
              userPlan = data.loggedInUser.plan
              if (hasStorage && !localStorage.getItem('selectedPlan')) {
                this.setPlan(userPlan)
              }
            }

            return (
              <DashboardLayout>
                <SideMenu location={location} userType={userType} />
                <PlanContext.Provider value={this.getContext()}>
                  <DashboardContent>
                    <NavBar location={location} userType={userType} />
                    <WrappedComponent location={location} userType={userType} userPlan={userPlan} />
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
