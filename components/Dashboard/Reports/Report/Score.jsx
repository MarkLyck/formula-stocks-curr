import { useState } from 'react'
import BulletChart from 'ui-components/Charts/BulletChart'
import { ScoreSection, BoldValue, FadedValue, ExpandedScore, Beside, Value, HelpText } from './styles'

const NUM_SECTIONS = 11
const MAX = 100
const MIN = -100

const tips = {
  Reward: 'Higher values, indicates better odds for a higher future return (alpha).',
  Safety: "Higher values, indicates better odds for a positive future return. Inverse of 'risk'",
  Growth: 'Higher values, indicates better growth capability.',
  Value:
    'Higher values, indicates that stock ownership is a better value. Relationship between price and expected return.',
  Profitability: 'Higher values, indicates that the underlying business is a more profitable endeavour.',
  Soundness: 'Higher values, indicates the degree to which the business appears sound.',
  Stewardship: "Higher values, indicates the degree with which the business seems to reward it's shareholders",
}

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
        <HelpText>{tips[name]}</HelpText>
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
