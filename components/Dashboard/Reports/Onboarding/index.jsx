import { useState } from 'react'
import OnboardingModal from 'ui-components/Modal/Onboarding'
import AIScoreChart from './AIScoreChart'
import withCharts from 'ui-components/Charts/withCharts'

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

const ReportsOnboarding = ({ amCharts4Loaded }) => {
  if (!amCharts4Loaded) return null
  const [isVisible, setVisibility] = useState(true)
  const onRequestClose = () => setVisibility(false)

  return (
    <OnboardingModal isOpen={isVisible} onRequestClose={onRequestClose}>
      <AIScoreChart id="aiScoreBarChart" data={chartData} />
      <p>
        Use this chart to observe the performance typically associated with an AI Score level. Each bar indicates
        approx. 1/20th of the entire US stock market. IRR refers to "Geometric Internal Rate of Return," or "the
        annualized effective compounded return rate" in its geometric form. Winrate refers to the percentage of
        investments which delivers a positive return in the investment period. A bar with an indication of "100" refers
        to Ai score interval [90-100]. Performance numbers for AI Score levels are based on 5 decades of backtested
        historical performance using Formula Stocks portfolio management solutions. The nature of statistical averages
        are such, that in order to expect somewhat similar results akin to an AI score level, a wider sample must be
        employed, i.e. a larger number of stocks must be consistently owned for longer periods of time.
      </p>
    </OnboardingModal>
  )
}

export default withCharts(ReportsOnboarding, { version: 4 })
