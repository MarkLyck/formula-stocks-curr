import React from 'react'
import { format } from 'date-fns'
import AIScore from './AIScore'
import Score from './Score'
import { ScoreList, BesideSection, BoldValue, FadedValue, HowToUseThisButton } from './styles'
import { SectionHeader } from '../styles'

const Report = ({ report, setOnboardingVisible }) => {
  let { date, name, ticker, price, scores } = report

  const dateGenerated = format(new Date(date), 'MM/DD/YYYY')
  return (
    <React.Fragment>
      <SectionHeader>AI Investment Report</SectionHeader>
      <BesideSection>
        <BoldValue>
          {ticker} - {name}
        </BoldValue>
        <FadedValue>${price}</FadedValue>
      </BesideSection>
      <AIScore value={scores.ai_score} name="AI Score" />

      <SectionHeader>Summary</SectionHeader>
      <ScoreList>
        <Score value={scores.ai_reward} name="Reward" />
        <Score value={scores.ai_safety} name="Safety" />
      </ScoreList>

      <SectionHeader>AI Scores</SectionHeader>
      <ScoreList>
        <Score value={scores.ai_growth} name="Growth" />
        <Score value={scores.ai_value} name="Value" />
        <Score value={scores.ai_profitability} name="Profitability" />
        <Score value={scores.ai_soundness} name="Soundness" />
        <Score value={scores.ai_soundness} name="Stewardship" />
      </ScoreList>

      <BesideSection>
        <BoldValue>Report generated</BoldValue>
        <FadedValue>{dateGenerated}</FadedValue>
      </BesideSection>
      <HowToUseThisButton onClick={() => setOnboardingVisible(true)}>How do I use this?</HowToUseThisButton>
    </React.Fragment>
  )
}

export default Report
