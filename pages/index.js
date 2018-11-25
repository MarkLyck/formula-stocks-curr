import React, { Component } from 'react'
import get from 'lodash.get'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Script from 'react-load-script'
import { planIds } from 'common/constants'
import { hasStorage, usingMocks } from 'common/utils/featureTests'
import newVisitor from 'common/utils/newVisitor'

import Signup from 'components/Dialogs/Signup'
import Login from 'components/Dialogs/Login'
import FAQ from 'components/Dialogs/FAQ'
import HomeLoader from 'components/Retail/Loader'
import LoadingError from 'ui-components/Error/LoadingError'
import Navbar from 'components/Retail/Navbar'
import Hero from 'components/Retail/01_Hero'
import Introduction from 'components/Retail/02_Introduction'
import WhatIsIt from 'components/Retail/03_WhatIsIt'
import Performance from 'components/Retail/04_Performance'
import PercentMatters from 'components/Retail/05_PercentMatters'
import FirstMonthOnUs from 'components/Retail/06_FirstMonthOnUs'
import WhatToExpect from 'components/Retail/07_WhatToExpect'
import PilotProgram from 'components/Retail/08_PilotProgram'
import LongTermPerformance from 'components/Retail/09_LongTermPerformance'
import Statistics from 'components/Retail/10_Statistics'
import HowWeBeatTheMarket from 'components/Retail/11_HowWeBeatTheMarket'
import RiskManagement from 'components/Retail/12_RiskManagement'
import CorporateProfile from 'components/Retail/13_CorporateProfile'
import ScrolledToBottom from 'components/Retail/15_ScrolledToBottom'
import Footer from 'components/Retail/16_Footer'

const GET_ENTRY_AND_MARKET_DATA = gql`
  query {
    Plan(id: "${planIds.ENTRY}") {
      name
      info
      price
      portfolioYields
      launchStatistics
      latestSells
      statistics
    }
  }
`

class Retail extends Component {
  state = {
    amChartsCoreStatus: false,
    amChartsLoaded: false,
    amChartsLoadingError: false,
    signUpVisible: false,
    loginVisible: false,
    FAQVisible: false,
  }

  amChartsSerialStatus = false
  amChartsThemeStatus = false

  componentDidMount() {
    if (typeof window !== 'undefined' && window.Intercom) {
      window.Intercom('boot', { app_id: 'i194mpvo' })
    }
    hasStorage && localStorage.setItem('selectedPlan', 'ENTRY')
    newVisitor(this.props.apolloClient)
  }

  areAllChartDependenciesLoaded = () => {
    if (this.state.amChartsCoreStatus && this.amChartsSerialStatus && this.amChartsThemeStatus) {
      this.setState({ amChartsLoaded: true })
    }
  }

  onLoadAmChartsCore = () => {
    this.setState({ amChartsCoreStatus: true })
    this.areAllChartDependenciesLoaded()
  }
  onLoadAmChartsSerial = () => {
    this.amChartsSerialStatus = true
    this.areAllChartDependenciesLoaded()
  }
  onLoadAmChartsTheme = () => {
    this.amChartsThemeStatus = true
    this.areAllChartDependenciesLoaded()
  }

  toggleSignUpModal = () => this.setState(state => ({ signUpVisible: !state.signUpVisible }))
  toggleLoginModal = () => this.setState(state => ({ loginVisible: !state.loginVisible }))
  toggleFAQModal = () => this.setState(state => ({ FAQVisible: !state.FAQVisible }))

  render() {
    const { amChartsLoaded, amChartsCoreStatus, signUpVisible, loginVisible, FAQVisible, apolloClient } = this.state

    return (
      <Query query={GET_ENTRY_AND_MARKET_DATA}>
        {({ loading, error, data }) => {
          if (loading) return <HomeLoader />
          if (!data || !data.Plan || (error && !usingMocks)) return <LoadingError />

          const { Plan } = data

          const planName = get(Plan, 'name')
          const portfolioYields = get(Plan, 'portfolioYields')
          const latestSells = get(Plan, 'latestSells')
          const winRatio = get(Plan, 'statistics.winRatio')
          const CAGR = get(Plan, 'statistics.CAGR')
          const avgGain = get(Plan, 'info.avgGainPerPosition')
          const avgLoss = get(Plan, 'info.avgLossPerPosition')
          const sortinoRatio = get(Plan, 'info.sortinoRatio')

          const firstBalance = portfolioYields[0].balance
          const lastBalance = portfolioYields[portfolioYields.length - 1].balance
          const increase = lastBalance - firstBalance
          const portfolioReturn = (increase / firstBalance) * 100

          return (
            <div className="retail-page">
              <Navbar
                toggleSignUpModal={this.toggleSignUpModal}
                toggleLoginModal={this.toggleLoginModal}
                toggleFAQModal={this.toggleFAQModal}
              />
              <Hero portfolioReturn={portfolioReturn} winRatio={winRatio} />
              <Introduction
                portfolioReturn={portfolioReturn}
                portfolioYields={portfolioYields}
                winRatio={winRatio}
                planName={planName}
              />
              <WhatIsIt />
              <Performance portfolioYields={portfolioYields} planName={planName} amChartsLoaded={amChartsLoaded} />
              <PercentMatters portfolioReturn={portfolioReturn} CAGR={CAGR} />
              <FirstMonthOnUs toggleSignUpModal={this.toggleSignUpModal} price={Plan.price} />
              <WhatToExpect latestSells={latestSells} winRatio={winRatio} />
              <PilotProgram />
              <LongTermPerformance planName={planName} amChartsLoaded={amChartsLoaded} />
              <Statistics
                winRatio={winRatio}
                planName={planName}
                avgGain={avgGain}
                avgLoss={avgLoss}
                sortinoRatio={sortinoRatio}
              />
              <HowWeBeatTheMarket />
              <RiskManagement winRatio={winRatio} sortinoRatio={sortinoRatio} avgGain={avgGain} avgLoss={avgLoss} />
              <CorporateProfile />
              <ScrolledToBottom toggleSignUpModal={this.toggleSignUpModal} />
              <Footer />

              <Script url="https://www.amcharts.com/lib/3/amcharts.js" onLoad={this.onLoadAmChartsCore} />
              <Script url="https://js.stripe.com/v3/" />
              {amChartsCoreStatus ? (
                <React.Fragment>
                  <Script url="https://www.amcharts.com/lib/3/serial.js" onLoad={this.onLoadAmChartsSerial} />
                  <Script url="https://www.amcharts.com/lib/3/themes/light.js" onLoad={this.onLoadAmChartsTheme} />
                </React.Fragment>
              ) : null}
              {signUpVisible && (
                <Signup onRequestClose={this.toggleSignUpModal} planPrice={Plan.price} apolloClient={apolloClient} />
              )}
              {loginVisible && <Login onRequestClose={this.toggleLoginModal} apolloClient={apolloClient} />}
              {FAQVisible && <FAQ hide={this.toggleFAQModal} />}
            </div>
          )
        }}
      </Query>
    )
  }
}
export default Retail
