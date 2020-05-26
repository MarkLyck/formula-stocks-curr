import { useState } from 'react'
import BulletChart from '~/ui-components/Charts/BulletChart'
import { ScoreSection, BoldValue, FadedValue, ExpandedScore, Beside, Value, HelpText } from './styles'

const NUM_SECTIONS = 11
const MAX = 100
const MIN = -100

const tips = {
  Reward: 'Higher values, indicates better odds for a higher future return (alpha).',
  Safety: "Higher values, indicates better odds for a positive future return. Inverse of 'risk'",
  Growth: 'Higher values indicate better capacity for growth',
  Value:
    'Higher values indicate better value. Value is the relationship between what you pay and what you get in return.',
  Profitability: 'Higher values indicate a more profitable business model',
  Soundness: 'Higher values indicates the degree to which the business appears to be sound.',
  Stewardship:
    'Higher values indicates the extent with which management actions appear aligned with shareholder interests.',
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
      <Value valueColor={valueColor}>{outputValue > 0 ? `+${outputValue.toFixed(0)}` : outputValue.toFixed(0)}</Value>
    </ScoreSection>
  )
}

export default Score
