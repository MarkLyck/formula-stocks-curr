import { useState } from 'react'
import styled from 'react-emotion'
import searchIcon from 'static/icons/reports/ai_report_search.svg'
import OnboardingModal from 'ui-components/Modal/Onboarding'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import Tooltip from 'ui-components/Tooltip'
import AIScoreChart from './AIScoreChart'
import withCharts from 'ui-components/Charts/withCharts'
import useWindowWidth from 'common/hooks/useWindowWidth'
import { ReportIcon } from '../styles'

const AIReportsWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`
const AIReportsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 24px 32px;
  @media (max-width: 850px) {
    margin-top: 16px;
    padding: 0;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

const AIScoreWrapper = styled.div`
  display: flex;
  @media (max-width: 1020px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

const AIScoreTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 380px;
  ul {
    padding: 16px 0;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.black};
    li {
      position: relative;
      padding: 8px 16px;
      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        content: '';
        background: ${props => props.theme.colors.lightGray};
        height: 8px;
        width: 8px;
        border-radius: 50%;
      }
    }
  }
  @media (max-width: 1020px) {
    margin-top: 16px;
    width: 600px;
  }
  @media (max-width: 850px) {
    margin-top: 16px;
    width: 400px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

const IconBackground = styled.div`
  height: 240px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.polar};
  border-radius: 4px;
  @media (max-width: 850px) {
    width: 100%;
  }
`

const Bold = styled.span`
  font-weight: 500;
`

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

const Valueaxes = [{}]

const series = [
  {
    valueY: 'irr',
    categoryX: 'aiScoreMin',
  },
]

const ReportsOnboarding = ({ amCharts4Loaded, onboardingVisible, setOnboardingVisible, userPlan }) => {
  if (!amCharts4Loaded) return null
  const [pageIndex, setPageIndex] = useState(0)
  const onRequestClose = () => setOnboardingVisible(false)
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
          Introducing a revolutionary easy way to pick stocks. Artificial Intelligence analyzes all US stocks with a
          market cap. over 10 bln. which has sufficient historical data available. The relative attractiveness of a
          stock as an investment is boiled down to one single number.
        </OnboardingText>
        <OnboardingText>
          <Bold>{userPlan}</Bold> {plansContent[userPlan]}
        </OnboardingText>
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
          the future return for an interval of AI scores, e.g. AI score 90 to 100 = 30.15% IRR.
        </OnboardingText>
        <ul>
          <li>
            <Bold>IRR</Bold> refers to Internal Rate of Return, geometric.
          </li>
          <li>
            <Bold>Win rate</Bold> refers to the percentage of investments which is sold with a positive return.
          </li>
        </ul>
        <OnboardingText>
          For a more in depth explanation <a>see our article on AI Reports.</a>
        </OnboardingText>
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
      section="AIReports"
    />
  )
}

export default withCharts(ReportsOnboarding, { version: 4 })
