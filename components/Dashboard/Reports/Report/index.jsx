import React from 'react'
import { format } from 'date-fns'
import SearchBar from './SearchBar'
import AIScore from './AIScore'
import Score from './Score'
import { ReportContainer, SectionHeader, BesideSection, BoldValue, FadedValue } from './styles'

const Report = ({ report }) => {
  const { date, name, stockPrice, scores } = report
  const dateGenerated = format(new Date(date.year, date.month, date.day), 'MM/DD/YYYY')
  return (
    <ReportContainer>
      <SectionHeader>Search</SectionHeader>
      <SearchBar />
      <SectionHeader>AI Investment Report</SectionHeader>
      <BesideSection>
        <BoldValue>{name}</BoldValue>
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
      <Score value={scores.ai_stewardship} name="Stewardship" />

      <BesideSection>
        <BoldValue>Report generated</BoldValue>
        <FadedValue>{dateGenerated}</FadedValue>
      </BesideSection>
    </ReportContainer>
  )
}

export default Report
