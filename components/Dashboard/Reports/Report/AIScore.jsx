import React from 'react'
import styled from 'react-emotion'
import withCharts from 'ui-components/Charts/withCharts'
import MultiGaugeChart from 'ui-components/Charts/MultiGaugeChart'
import { ExpandedScore, BoldValue, FadedValue, Beside } from './styles'

export const AIScoreContainer = styled(ExpandedScore)`
  position: relative;
  padding-top: 24px;
  height: 236px;
  &:hover {
    cursor: default;
  }
  @media (min-width: 850px) {
    width: 100%;
    max-width: 100%;
  }
`

export const AIScoreValue = styled.h1`
  color: ${props => props.theme.colors[props.color]};
  font-weight: 500;
  font-size: 2rem;
  position: absolute;
  bottom: 56px;
  left: 50%;
  transform: translateX(-50%);
`

export const AIScoreText = styled.h2`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: ${props => props.theme.colors.black};
  opacity: 0.5;
  font-weight: 400;
  font-size: 1.2rem;
`

const NUM_SECTIONS = 21
const MAX = 100
const MIN = -100

const AIScore = ({ value, name, amCharts4Loaded }) => {
  const outputValue = value * 100
  let valueColor = 'black'
  if (outputValue > (MAX * 2) / NUM_SECTIONS / 2) {
    valueColor = 'green'
  } else if (outputValue < -((MAX * 2) / NUM_SECTIONS / 2)) {
    valueColor = 'red'
  }

  return (
    <AIScoreContainer>
      {amCharts4Loaded && <MultiGaugeChart numberOfSections={NUM_SECTIONS} min={MIN} max={MAX} value={outputValue} />}
      <AIScoreValue color={valueColor}>
        {outputValue > 0 ? `+${outputValue.toFixed(0)}` : outputValue.toFixed(0)}
      </AIScoreValue>
      <AIScoreText>AI Score</AIScoreText>
    </AIScoreContainer>
  )
}

export default React.memo(withCharts(AIScore, { version: 4 }))
