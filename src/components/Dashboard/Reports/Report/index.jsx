import React from 'react'
import { format } from 'date-fns'
import styled from '@emotion/styled'
// import { Mixpanel } from '~/common/analytics/mixpanel'
import AIScore from './AIScore'
import Score from './Score'
import { ScoreList, BesideSection, BoldValue, FadedValue } from './styles'
import { SectionHeader } from '../styles'

const ReportContainer = styled.div`
  display: flex;
  width: 100%;

  > div:nth-child(1) {
    margin-right: 32px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding-right: 50px;

    > div:nth-child(1) {
      margin-right: 0;
    }
  }

  @media (max-width: 600px) {
    padding-right: 0;
  }
`

const ReportPartContainer = styled.div`
  width: calc(50% - 16px);
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Report = ({ report }) => {
  let { date, name, ticker, price, scores } = report

  // useEffect(() => {
  //   Mixpanel.track('Open Report', {
  //     ticker,
  //   })
  // })

  const dateGenerated = format(new Date(date), 'MM/dd/yyyy')
  return (
    <>
      <ReportContainer>
        <ReportPartContainer>
          <SectionHeader>AI Investment Report</SectionHeader>
          <AIScore value={scores.ai_score} id={`ai-score-${ticker}`} name="AI Score" />

          {/* <SectionHeader>Summary</SectionHeader> */}
          <ScoreList>
            <Score value={scores.ai_reward} name="Reward" />
            <Score value={scores.ai_safety} name="Safety" />
          </ScoreList>
        </ReportPartContainer>

        <ReportPartContainer>
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
        </ReportPartContainer>
      </ReportContainer>
    </>
  )
}

export default Report
