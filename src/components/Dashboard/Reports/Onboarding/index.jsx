import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import Link from 'next/link'
import searchIcon from 'static/icons/reports/ai_report_search.svg'
import OnboardingModal from '~/ui-components/Modal/Onboarding'
import { OnboardingHeader, OnboardingText } from '~/ui-components/Modal/Onboarding/styles'
import Tooltip from '~/ui-components/Tooltip'
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
  Bold,
  ReportIcon,
} from './styles'

const ReportsOnboarding = ({ amCharts4Loaded, onboardingVisible, setOnboardingVisible, user }) => {
  const [setIntros, { data }] = useMutation(SET_INTROS)
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

  const plansContent = {
    ENTRY: 'has access to large and mega cap stocks.',
    PREMIUM: 'has access to mid and higher cap stocks.',
    BUSINESS: 'has access to small and higher cap stocks.',
    FUND: 'has access to all stocks.',
  }

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
          You can use AI Reports to check the scores of your existing portfolio or use it to analyze new stocks.
        </OnboardingText>
        <OnboardingText>
          The AI Score indicates how attractive a business is from a value/growth investment perspective, by estimating
          the probable future.
        </OnboardingText>
        <OnboardingText>
          AI Score is just one of the +100 algorithms we use for Formula Stocks, but it is very effective on it's own.
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
          height: windowWidth > 1020 ? '300px' : '280px',
        }}
      />
      <AIScoreTextWrapper>
        <OnboardingHeader>AI Score returns</OnboardingHeader>
        <OnboardingText>
          The chart on the left shows the stock market sorted into buckets based on the AI score of each stock. Each bar
          shows the average return for a range of AI scores, e.g. AI score 90 to 100 on returned a 30.15% annual IRR.
        </OnboardingText>
        <ul>
          <li>
            <Bold>IRR</Bold> refers to Internal Rate of Return, geometric.
          </li>
          <li>
            <Bold>Win rate</Bold> refers to percentage of stocks sold with positive return. (gray line).
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
