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

const chartData = [
  { aiScoreMin: -100, aiScoreMax: -90, irr: -9.13, winrate: 48 },
  { aiScoreMin: -90, aiScoreMax: -80, irr: -6.1, winrate: 49 },
  { aiScoreMin: -80, aiScoreMax: -70, irr: -2.57, winrate: 52 },
  { aiScoreMin: -70, aiScoreMax: -60, irr: -1.55, winrate: 53 },
  { aiScoreMin: -60, aiScoreMax: -50, irr: 0.5, winrate: 54 },
  { aiScoreMin: -50, aiScoreMax: -40, irr: 2.12, winrate: 56 },
  { aiScoreMin: -40, aiScoreMax: -30, irr: 3.95, winrate: 58 },
  { aiScoreMin: -30, aiScoreMax: -20, irr: 3.97, winrate: 59 },
  { aiScoreMin: -20, aiScoreMax: -10, irr: 6.22, winrate: 62 },
  { aiScoreMin: -10, aiScoreMax: -0, irr: 8.06, winrate: 65 },
  { aiScoreMin: 0, aiScoreMax: 10, irr: 9.67, winrate: 67 },
  { aiScoreMin: 10, aiScoreMax: 20, irr: 10.57, winrate: 70 },
  { aiScoreMin: 20, aiScoreMax: 30, irr: 11.57, winrate: 72 },
  { aiScoreMin: 30, aiScoreMax: 40, irr: 13.09, winrate: 75 },
  { aiScoreMin: 40, aiScoreMax: 50, irr: 15.37, winrate: 77 },
  { aiScoreMin: 50, aiScoreMax: 60, irr: 17.03, winrate: 80 },
  { aiScoreMin: 60, aiScoreMax: 70, irr: 20.31, winrate: 82 },
  { aiScoreMin: 70, aiScoreMax: 80, irr: 22.89, winrate: 85 },
  { aiScoreMin: 80, aiScoreMax: 90, irr: 26.94, winrate: 86 },
  { aiScoreMin: 90, aiScoreMax: 100, irr: 30.15, winrate: 90 },
]

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
          Introducing a revolutionary easy way to pick stocks. Our Artificial Intelligence analyzes stocks thoroughly
          and produces a single measure, the <Bold>AI score</Bold>, which indicates the relative attractiveness of an
          investment. Type the name or symbol of a stock you are interested in, and gain unique insight available
          nowhere else.
        </OnboardingText>
        <OnboardingText>Try Business for access to more AI reports by market cap.</OnboardingText>
      </AIReportsTextWrapper>
    </AIReportsWrapper>
  )

  const getChartWidth = () => {
    if (windowWidth > 1020) return '480px'
    if (windowWidth < 1020 && windowWidth > 850) return '600px'
    else if (windowWidth > 480) return '400px'
    return windowWidth - 48
  }

  const AIScoreIntro = (
    <AIScoreWrapper>
      <AIScoreChart
        id="aiScoreBarChart"
        data={chartData}
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
          section="AIReports"
        />
      )}
    </Mutation>
  )
}

export default withCharts(ReportsOnboarding, { version: 4 })
