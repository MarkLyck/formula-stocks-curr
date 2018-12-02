import React from 'react'
import withCharts from 'ui-components/Charts/withCharts'
import MultiGaugeChart from 'ui-components/Charts/MultiGaugeChart'
import { ScoreSection, BoldValue, FadedValue, ExpandedScore, Beside, Value } from './styles'

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
    <ExpandedScore>
      <BoldValue>{name}</BoldValue>
      {amCharts4Loaded && <MultiGaugeChart numberOfSections={NUM_SECTIONS} min={MIN} max={MAX} value={outputValue} />}
    </ExpandedScore>
  )
}

export default withCharts(AIScore, { version: 4 })
