import React, { useState, useEffect } from 'react'
import get from 'lodash.get'
import { useQuery } from '@apollo/react-hooks'
import Script from 'react-load-script'
import Router from 'next/router'
import { planIds } from 'common/constants'
import { hasStorage, usingMocks } from 'common/utils/featureTests'
import newVisitor from 'common/utils/newVisitor'
import withCharts from 'ui-components/Charts/withCharts'

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
import AIScore from 'components/Retail/11_AIScore'
import HowWeBeatTheMarket from 'components/Retail/12_HowWeBeatTheMarket'
import RiskManagement from 'components/Retail/13_RiskManagement'
import CorporateProfile from 'components/Retail/14_CorporateProfile'
import ScrolledToBottom from 'components/Retail/15_ScrolledToBottom'
import Footer from 'components/Retail/16_Footer'
import { LAUNCH_STATISTICS, BACKTESTED_STATISTICS } from 'common/queries'

const price = 49.99
const planName = 'entry'

const Retail = ({ apolloClient, amCharts4Loaded }) => {
  const { loading: launchStatisticsLoading, data: launchStatisticsData } = useQuery(LAUNCH_STATISTICS, {
    variables: { planName },
  })
  const { loading: backtestedStatisticsLoading, data: backtestedStatisticsData } = useQuery(BACKTESTED_STATISTICS, {
    variables: { planName },
  })

  const [signupVisible, setSignupVisible] = useState(false)
  const [loginVisible, setLoginVisible] = useState(false)
  const [termsVisible, setTermsVisible] = useState(false)
  const [privacyVisible, setPrivacyVisible] = useState(false)
  const [FAQVisible, setFAQVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Intercom) {
      window.Intercom('boot', { app_id: 'i194mpvo' })
      window.intercomSettings = {
        app_id: '194mpvo',
        custom_launcher_selector: '#talk-to-us',
      }
    }
    hasStorage && localStorage.setItem('selectedPlan', 'ENTRY')
    newVisitor(apolloClient)
  })

  if (launchStatisticsLoading || backtestedStatisticsLoading) return <HomeLoader />

  const toggleSignupVisible = () => setSignupVisible(!signupVisible)
  const toggleLoginVisible = () => setLoginVisible(!loginVisible)
  const toggleTermsVisible = () => setTermsVisible(!termsVisible)
  const togglePrivacyVisible = () => setPrivacyVisible(!privacyVisible)
  const toggleFAQVisible = () => setFAQVisible(!FAQVisible)

  const portfolioReturn = get(launchStatisticsData, 'plan.statisticsSinceLaunch.totalReturn')
  const winRatio = get(backtestedStatisticsData, 'plan.statistics.winLossRatio')
  const CAGR = get(backtestedStatisticsData, 'plan.statistics.cAGR')
  const avgGain = get(backtestedStatisticsData, 'plan.statistics.averageGainPerPosition')
  const avgLoss = get(backtestedStatisticsData, 'plan.statistics.averageLossPerPosition')
  const sortinoRatio = get(backtestedStatisticsData, 'plan.statistics.sortinoRatio')

  return (
    <div className="retail-page">
      <Navbar
        toggleSignUpModal={toggleSignupVisible}
        toggleLoginModal={toggleLoginVisible}
        toggleFAQModal={toggleFAQVisible}
      />
      <Hero portfolioReturn={portfolioReturn} winRatio={winRatio} />
      <Introduction portfolioReturn={portfolioReturn} winRatio={winRatio} planName={planName} />
      <WhatIsIt />
      <Performance planName={planName} amCharts4Loaded={amCharts4Loaded} />
      <PercentMatters portfolioReturn={portfolioReturn} CAGR={CAGR} />
      <FirstMonthOnUs toggleSignUpModal={toggleSignupVisible} price={price} />
      <WhatToExpect planName={planName} winRatio={winRatio} />
      <PilotProgram />
      <LongTermPerformance planName={planName} amCharts4Loaded={amCharts4Loaded} />
      <Statistics
        winRatio={winRatio}
        planName={planName}
        avgGain={avgGain}
        avgLoss={avgLoss}
        sortinoRatio={sortinoRatio}
      />
      <AIScore amCharts4Loaded={amCharts4Loaded} />
      <HowWeBeatTheMarket />
      <RiskManagement winRatio={winRatio} sortinoRatio={sortinoRatio} avgGain={avgGain} avgLoss={avgLoss} />
      <CorporateProfile />
      <ScrolledToBottom toggleSignUpModal={toggleSignupVisible} />
      <Footer />
      <Script url="https://js.stripe.com/v3/" />
      {signupVisible && <Signup onRequestClose={toggleSignupVisible} planPrice={price} apolloClient={apolloClient} />}
      {loginVisible && <Login onRequestClose={toggleLoginVisible} apolloClient={apolloClient} />}
      {FAQVisible && <FAQ hide={toggleFAQVisible} />}
    </div>
  )
}

export default withCharts(Retail, { version: 4 })
