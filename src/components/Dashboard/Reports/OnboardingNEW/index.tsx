import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
// @ts-ignore
import searchIcon from '~/../public/static/icons/reports/ai_report_search.svg'
import OnboardingModal from '~/ui-components/Modal/Onboarding'
import { OnboardingHeader, OnboardingText } from '~/ui-components/Modal/Onboarding/styles'
import AIScoreChart from './AIScoreChart'
import withCharts from '~/ui-components/Charts/withCharts'
import useWindowWidth from '~/common/hooks/useWindowWidth'
import { SET_INTROS } from '~/common/queries'

import {
  AIReportsWrapper,
  AIReportsTextWrapper,
  AIScoreWrapper,
  AIScoreTextWrapper,
  IconBackground,
  LegendName,
  ReportIcon,
} from './styles'

interface ReportsOnboardingPropsType {
  amCharts4Loaded?: boolean
  onboardingVisible: boolean
  setOnboardingVisible: (visible: boolean) => void
  user: any
}

const ReportsOnboarding = ({
  amCharts4Loaded,
  onboardingVisible,
  setOnboardingVisible,
  user,
}: ReportsOnboardingPropsType) => {
  const [setIntros] = useMutation(SET_INTROS)
  const [pageIndex, setPageIndex] = useState(0)
  const windowWidth = useWindowWidth()
  if (!amCharts4Loaded || !user) return null

  const onRequestClose = () => {
    if (!user.intros) {
      setIntros({
        variables: {
          id: user.id,
          intros: { reports: true },
        },
      })
    } else if (user.intros.reports !== true) {
      user.intros.reports = true
      setIntros({
        variables: {
          id: user.id,
          intros: user.intros,
        },
      })
    }
    setOnboardingVisible(false)
  }

  // const plansContent = {
  //   ENTRY: 'has access to large and mega cap stocks.',
  //   PREMIUM: 'has access to mid and higher cap stocks.',
  //   BUSINESS: 'has access to small and higher cap stocks.',
  //   FUND: 'has access to all stocks.',
  // }

  const Intro = (
    <AIReportsWrapper>
      <IconBackground>
        <ReportIcon
          dangerouslySetInnerHTML={{
            __html: searchIcon,
          }}
        />
      </IconBackground>
      <AIReportsTextWrapper>
        <OnboardingHeader>AI Reports</OnboardingHeader>
        <OnboardingText>
          You can use AI Reports to evaluate your existing portfolio or analyze new stocks.
        </OnboardingText>
        <OnboardingText>
          The AI Score is a number between -100 and +100, indicating the future probable return of a stock. (Higher
          numbers are better)
        </OnboardingText>
        <OnboardingText>
          The score indicates how attractive a business is from a value/growth investment perspective, by estimating its
          risk profile and probable future.
        </OnboardingText>
      </AIReportsTextWrapper>
    </AIReportsWrapper>
  )

  const getChartWidth = () => {
    if (windowWidth > 1020) return '480px'
    if (windowWidth < 1020 && windowWidth > 850) return '600px'
    else if (windowWidth > 480) return ''

    return windowWidth - 48
  }

  const AIScoreIntro = (
    <AIScoreWrapper>
      <AIScoreChart
        amCharts4Loaded={amCharts4Loaded}
        id="aiScoreBarChart"
        winrate
        neutralColor="lightGray"
        style={{
          width: getChartWidth(),
          height: windowWidth > 1020 ? '400px' : '280px',
        }}
      />
      <AIScoreTextWrapper>
        <OnboardingHeader>AI Score returns</OnboardingHeader>
        <OnboardingText>Every stock in the market is assigned an AI score.</OnboardingText>
        <OnboardingText>
          If we sort all AI Scores into buckets, so that all scores between 0 and 10 goes into one bucket, 10..20 into
          another, etc., we arrive at the graph on the left.
        </OnboardingText>
        <OnboardingText>
          Each bar on the X axis represents an AI score bucket. The Y axis represents future stock returns.
        </OnboardingText>
        <OnboardingText>
          You can observe in the chart, that in order to achieve probable returns {'>'} 20%, you should invest in stocks
          with AI scores {'>'} 60. We've also showcased how AI-score can affect your win ratio with the blue line.
        </OnboardingText>
        <ul>
          <li>
            <LegendName color="secondary">IRR</LegendName> refers to Internal Rate of Return, geometric.
          </li>
          <li>
            <LegendName color="primary">Win rate</LegendName> refers to percentage of stocks sold with positive return.
          </li>
        </ul>
      </AIScoreTextWrapper>
    </AIScoreWrapper>
  )

  return (
    <OnboardingModal
      isOpen={onboardingVisible}
      onRequestClose={onRequestClose}
      activePageIndex={pageIndex}
      setPageIndex={setPageIndex}
      pages={[Intro, AIScoreIntro]}
      position="AIReports"
    />
  )
}

export default withCharts(ReportsOnboarding, { version: 4 })
