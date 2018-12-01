import React from 'react'
import { format } from 'date-fns'
import BulletChart from 'ui-components/Charts/BulletChart'
import { ReportContainer, SectionHeader, BesideSection, BoldValue, FadedValue } from './styles'

const Report = ({ report }) => {
  const { date, name, stockPrice, scores } = report
  const dateGenerated = format(new Date(date.year, date.month, date.day), 'MM/DD/YYYY')
  return (
    <ReportContainer>
      <SectionHeader>AI Investment Report</SectionHeader>
      <BesideSection>
        <BoldValue>{name}</BoldValue>
        <FadedValue>${stockPrice}</FadedValue>
      </BesideSection>

      <SectionHeader>Summary</SectionHeader>
      <BesideSection>
        <BoldValue>Reward</BoldValue>
        <BulletChart value={scores.ai_reward * 100} min={-100} max={100} numberOfSections={11} />
      </BesideSection>
      <BesideSection>
        <BoldValue>Safety</BoldValue>
        <BulletChart value={scores.ai_safety * 100} min={-100} max={100} numberOfSections={11} />
      </BesideSection>

      <SectionHeader>AI Scores</SectionHeader>
      <BesideSection>
        <BoldValue>Soundness</BoldValue>
        <BulletChart value={scores.ai_soundness * 100} min={-100} max={100} numberOfSections={11} />
      </BesideSection>
      <BesideSection>
        <BoldValue>Profitability</BoldValue>
        <BulletChart value={scores.ai_profitability * 100} min={-100} max={100} numberOfSections={11} />
      </BesideSection>
      <BesideSection>
        <BoldValue>Growth</BoldValue>
        <BulletChart value={scores.ai_growth * 100} min={-100} max={100} numberOfSections={11} />
      </BesideSection>
      <BesideSection>
        <BoldValue>Value</BoldValue>
        <BulletChart value={scores.ai_value * 100} min={-100} max={100} numberOfSections={11} />
      </BesideSection>

      <BesideSection>
        <BoldValue>Report generated</BoldValue>
        <FadedValue>{dateGenerated}</FadedValue>
      </BesideSection>
    </ReportContainer>
  )
}

export default Report
