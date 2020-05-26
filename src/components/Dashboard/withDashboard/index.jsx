import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Router from 'next/router'
import { isBrowser, hasStorage } from '~/common/utils/featureTests'
import PlanContext from '~/common/Contexts/PlanContext'
import { SettingsProvider } from '~/common/Contexts/settings'
import SideMenu from '~/ui-components/SideMenu'
import NavBar from '~/components/Dashboard/Navbar'
import Onboarding from './Onboarding'
import { DashboardLayout, DashboardContent } from './styles'
import { CURRENT_USER_QUERY } from '~/common/queries'

const withDashboard = (Component) => ({ location, ...extraProps }) => {
  if (!isBrowser) return null
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY, { fetchPolicy: 'cache-and-network' })
  const [onboardingVisible, setOnboardingVisible] = useState(false)
  const [onboardingSeenBefore, setOnboardingSeenBefore] = useState(null)
  const [statePlan, setStatePlan] = useState(
    hasStorage && localStorage.getItem('selectedPlan') ? localStorage.getItem('selectedPlan').toLowerCase() : 'entry'
  )

  useEffect(() => {
    if (hasStorage && !localStorage.getItem('authToken')) {
      console.warn('!!! NO localStorage authToken')
      if (isBrowser && !window.authToken) {
        console.warn('!!! NO window authToken')
        Router.push('/dashboard/login')
        return
      }
    }
  }, [])

  if (data && data.user && data.user.id === null) {
    // if the token they have is incorrect or expired. Push them to the front page.
    console.warn('loggedInUser.id === null')
    if (hasStorage) localStorage.removeItem('authToken')
    Router.push('/dashboard/login')
  }

  const setPlan = (plan) => {
    if (hasStorage) localStorage.setItem('selectedPlan', plan)
    setStatePlan(plan)
  }

  const getContext = () => ({
    planName: statePlan,
    setPlan,
  })

  const user = data && data.user ? data.user : {}
  if (onboardingSeenBefore === null && (user.intros === null || (user.intros && !user.intros.formulaStocks))) {
    setOnboardingSeenBefore(false)
  }

  const handleCloseOnboarding = () => {
    setOnboardingSeenBefore(true)
    setOnboardingVisible(false)
  }

  return (
    <SettingsProvider>
      <DashboardLayout>
        <Onboarding
          onboardingVisible={onboardingSeenBefore === false || onboardingVisible}
          user={user}
          closeOnboarding={handleCloseOnboarding}
        />
        <SideMenu location={location} user={user} setOnboardingVisible={() => setOnboardingVisible(true)} />
        <PlanContext.Provider value={getContext()}>
          <PlanContext.Consumer>
            {({ planName }) => (
              <DashboardContent>
                <NavBar location={location} user={user} />
                <Component
                  location={location}
                  userType={user.type}
                  userPlan={user.plan}
                  activePlan={planName}
                  user={user}
                  {...extraProps}
                />
              </DashboardContent>
            )}
          </PlanContext.Consumer>
        </PlanContext.Provider>
      </DashboardLayout>
    </SettingsProvider>
  )
}

export default withDashboard

// const withDashboard = WrappedComponent => {
//   class WithDashboard extends Component {
//     state = {
//       planName:
//         hasStorage && localStorage.getItem('selectedPlan')
//           ? localStorage.getItem('selectedPlan').toUpperCase()
//           : 'ENTRY',
//       oboardingVisible: false,
//     }

//     componentDidMount() {
//       // if they have no token saved. Push them to the front page immediately.
//       if (hasStorage && !localStorage.getItem('graphcoolToken')) {
//         console.warn('!!! NO localStorage token')
//         if (isBrowser && !window.graphcoolToken) {
//           console.warn('!!! NO window token')
//           Router.push('/')
//           return
//         }
//       }
//       if (isBrowser && window.Intercom) {
//         window.Intercom('shutdown')
//       }
//     }

//     setPlan = planName => {
//       if (hasStorage) localStorage.setItem('selectedPlan', planName)
//       this.setState({ planName })
//     }

//     setOnboardingVisible = oboardingVisible => this.setState({ oboardingVisible })

//     getContext = () => ({
//       planName: this.state.planName,
//       setPlan: this.setPlan,
//     })

//     render() {
//       const { location, ...extraProps } = this.props
//       const { oboardingVisible } = this.state
//       if (!isBrowser) return null
//       return (
//         <Query query={GET_LOGGED_IN_USER}>
//           {({ loading, error, data, refetch }) => {
//             if (data && data.loggedInUser && data.loggedInUser.id === null) {
//               // if the token they have is incorrect or expired. Push them to the front page.
//               console.warn('!!! loggedInUser.id === null')
//               if (hasStorage) localStorage.removeItem('graphcoolToken')
//               Router.push('/')
//             }

//             let user = {}
//             if (data && data.loggedInUser) {
//               user = data.loggedInUser

//               if (hasStorage && !localStorage.getItem('selectedPlan')) {
//                 this.setPlan(user.plan)
//               }
//             }

//             const showIntroFirstTime = user.intros && !user.intros.formulaStocks

//             return (
//               <DashboardLayout>
//                 <Onboarding
//                   onboardingVisible={showIntroFirstTime || oboardingVisible}
//                   user={user}
//                   setOnboardingVisible={this.setOnboardingVisible}
//                 />
//                 <SideMenu location={location} user={user} setOnboardingVisible={this.setOnboardingVisible} />
// <PlanContext.Provider value={this.getContext()}>
//   <PlanContext.Consumer>
//     {({ planName }) => (
//       <DashboardContent>
//         <NavBar location={location} user={user} />
//         <WrappedComponent
//           location={location}
//           userType={user.type}
//           userPlan={user.plan}
//           activePlan={planName}
//           user={user}
//           {...extraProps}
//         />
//       </DashboardContent>
//     )}
//   </PlanContext.Consumer>
// </PlanContext.Provider>
//               </DashboardLayout>
//             )
//           }}
//         </Query>
//       )
//     }
//   }

//   return WithDashboard
// }

// export default withDashboard
