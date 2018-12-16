import React from 'react'
import { format } from 'date-fns'

import AIScore from './AIScore'
import Score from './Score'
import { BesideSection, BoldValue, FadedValue } from './styles'
import { SectionHeader } from '../styles'

const Report = ({ report }) => {
  let { date, name, ticker, stockPrice, scores } = report

  // reports JSON is saved as strings with singleQuotes.
  date = JSON.parse(date.split("'").join('"'))
  scores = JSON.parse(scores.split("'").join('"'))

  const dateGenerated = format(new Date(date.year, date.month, date.day), 'MM/DD/YYYY')
  return (
    <React.Fragment>
      <SectionHeader>AI Investment Report</SectionHeader>
      <BesideSection>
        <BoldValue>
          {ticker} - {name}
        </BoldValue>
        <FadedValue>${stockPrice}</FadedValue>
      </BesideSection>
      <AIScore value={scores.ai_score} name="AI Score" />

      <SectionHeader>Summary</SectionHeader>
      <Score value={scores.ai_reward} name="Reward" />
      <Score value={scores.ai_safety} name="Safety" />

      <SectionHeader>AI Scores</SectionHeader>
      <Score value={scores.ai_growth} name="Growth" />
      <Score value={scores.ai_value} name="Value" />
      <Score value={scores.ai_profitability} name="Profitability" />
      <Score value={scores.ai_soundness} name="Soundness" />
      <Score value={scores.ai_soundness} name="Stewardship" />

      <BesideSection>
        <BoldValue>Report generated</BoldValue>
        <FadedValue>{dateGenerated}</FadedValue>
      </BesideSection>
    </React.Fragment>
  )
}

export default Report
