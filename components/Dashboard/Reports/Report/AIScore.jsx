import React from 'react'
import withCharts from 'ui-components/Charts/withCharts'
import MultiGaugeChart from 'ui-components/Charts/MultiGaugeChart'
import { AIScoreContainer, BoldValue, FadedValue, Beside, AIScoreValue, AIScoreText } from './styles'

const NUM_SECTIONS = 11
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
      <AIScoreText>Overall AI Score</AIScoreText>
    </AIScoreContainer>
  )
}

export default withCharts(AIScore, { version: 4 })
