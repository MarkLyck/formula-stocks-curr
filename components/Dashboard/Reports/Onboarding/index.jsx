import { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Link from 'next/link'
import searchIcon from 'static/icons/reports/ai_report_search.svg'
import OnboardingModal from 'ui-components/Modal/Onboarding'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import Tooltip from 'ui-components/Tooltip'
import AIScoreChart from './AIScoreChart'
import withCharts from 'ui-components/Charts/withCharts'
import useWindowWidth from 'common/hooks/useWindowWidth'
import { ReportIcon } from '../styles'
import {
  AIReportsWrapper,
  AIReportsTextWrapper,
  AIScoreWrapper,
  AIScoreTextWrapper,
  IconBackground,
  Bold,
} from './styles'

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $intros: Json) {
    updateUser(id: $id, intros: $intros) {
      id
      intros
    }
  }
`

const ReportsOnboarding = ({ amCharts4Loaded, onboardingVisible, setOnboardingVisible, user }) => {
  if (!amCharts4Loaded) return null
  const [pageIndex, setPageIndex] = useState(0)

  const onRequestClose = updateUser => {
    if (user.intros.reports !== true) {
      user.intros.reports = true
      updateUser({
        variables: {
          id: user.id,
          intros: user.intros,
        },
      })
    }
    setOnboardingVisible(false)
  }
  const windowWidth = useWindowWidth()

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
          Introducing a revolutionary easy way to pick stocks. Artificial Intelligence produces a single measure, the AI
          score, which indicates the overall attractiveness of a business from your viewpoint as an investor. AI Score
          looks ahead into the probable future, which may be non-linear, cyclical and mean-reverting. Hence, a stock
          that did well in the past, might well score low, or vice versa.
        </OnboardingText>
        <OnboardingText>Try Business for access to more AI reports by market cap.</OnboardingText>
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
        id="aiScoreBarChart"
        winrate
        style={{
          width: getChartWidth(),
          height: windowWidth > 1020 ? '320px' : '280px',
        }}
      />
      <AIScoreTextWrapper>
        <OnboardingHeader>AI Score returns</OnboardingHeader>
        <OnboardingText>
          The entire stock market is sorted into buckets based on the AI score of each stock. Each of 20 buckets display
          the average return for an interval of AI scores, e.g. AI score 90 to 100 = 30.15% IRR.
        </OnboardingText>
        <ul>
          <li>
            <Bold>IRR</Bold> refers to Internal Rate of Return, geometric.
          </li>
          <li>
            <Bold>Win rate</Bold> refers to percentage sold with positive return. (grey line).
          </li>
        </ul>
        <OnboardingText>
          For a more in depth explanation{' '}
          <Link href="/dashboard/articles/ai-score">
            <a>see our article on AI Reports.</a>
          </Link>
        </OnboardingText>
      </AIScoreTextWrapper>
    </AIScoreWrapper>
  )

  return (
    <Mutation mutation={UPDATE_USER}>
      {(updateUser, { data }) => (
        <OnboardingModal
          isOpen={onboardingVisible}
          onRequestClose={onRequestClose.bind(null, updateUser)}
          activePageIndex={pageIndex}
          setPageIndex={setPageIndex}
          pages={[Intro, AIScoreIntro]}
          position="AIReports"
        />
      )}
    </Mutation>
  )
}

export default withCharts(ReportsOnboarding, { version: 4 })
