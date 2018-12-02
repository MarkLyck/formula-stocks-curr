import { useState } from 'react'
import BulletChart from 'ui-components/Charts/BulletChart'
import { ScoreSection, BoldValue, FadedValue, ExpandedScore, Beside, Value } from './styles'

const NUM_SECTIONS = 11
const MAX = 100
const MIN = -100

const Score = ({ value, name }) => {
  const [isExpanded, setExpanded] = useState(false)
  const handleOnClick = () => setExpanded(!isExpanded)

  const outputValue = value * 100
  let valueColor = 'black'
  if (outputValue > (MAX * 2) / NUM_SECTIONS / 2) {
    valueColor = 'green'
  } else if (outputValue < -((MAX * 2) / NUM_SECTIONS / 2)) {
    valueColor = 'red'
  }

  if (isExpanded) {
    return (
      <ExpandedScore onClick={handleOnClick}>
        <Beside>
          <BoldValue>{name}</BoldValue>
          <Value valueColor={valueColor}>
            {outputValue > 0 ? `+${outputValue.toFixed(0)}` : outputValue.toFixed(0)}
          </Value>
        </Beside>
        <BulletChart value={outputValue} min={MIN} max={MAX} numberOfSections={NUM_SECTIONS} withMarkers fullWidth />
      </ExpandedScore>
    )
  }

  return (
    <ScoreSection onClick={handleOnClick}>
      <BoldValue>{name}</BoldValue>
      <BulletChart value={outputValue} min={MIN} max={MAX} numberOfSections={NUM_SECTIONS} />
    </ScoreSection>
  )
}

export default Score
