import React from 'react'
import styled from 'react-emotion'
import { darken } from 'polished'
import Box from 'ui-components/Box'
import theme from 'common/theme'

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-left: 8px;
`

const Section = styled.div`
  width: ${props => 100 / props.numberOfSections}%;
  background: rgba(${props => props.sectionColor + ',' + props.opacity});
  height: 4px;
  box-shadow: 0 2px 4px 0 rgba(111, 120, 156, 0.16);
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

const SelectedSection = styled(Section)`
  position: relative;
  height: 16px;
  background: rgba(${props => props.sectionColor + ',' + props.opacity});
  border: 1px solid ${props => darken(0.1, 'rgba(' + props.sectionColor + ',' + props.opacity + ')')};
  border-radius: 4px;
  &::after {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: "${props => props.value}";
    text-shadow: 0px 1px 1px rgba(0,0,0, 0.1);
    font-size: 8px;
    font-weight: 600;
    color: ${props => (props.neutral ? props.theme.colors.gray : 'white')};
  }
`

const BulletChart = ({ value, min, max, numberOfSections }) => {
  const sections = new Array(numberOfSections).fill(0)
  return (
    <ChartContainer>
      {sections.map((_, i) => {
        const halfNumberOfSections = numberOfSections / 2
        const inNegativeSection = i < Math.floor(numberOfSections / 2)
        const inPositiveSection = i > Math.floor(numberOfSections / 2)
        let opacity = 1
        let currentSectionIsNeutral = false
        if (inNegativeSection) {
          opacity = 1 - ((numberOfSections / halfNumberOfSections) * i) / 10
        } else if (inPositiveSection) {
          opacity = ((numberOfSections / halfNumberOfSections) * i) / 10 - 1
        } else {
          currentSectionIsNeutral = true
        }

        let sectionColor = '255,255,255'
        if (inNegativeSection) sectionColor = '243,68,108'
        else if (inPositiveSection) sectionColor = '18,217,158'

        const valuesIn1Section = (max * 2) / numberOfSections
        const valuesUpUntilNextSection = valuesIn1Section * (i + 1)
        const valueFulLRange = value + max
        if (valuesUpUntilNextSection - valuesIn1Section < valueFulLRange && valuesUpUntilNextSection > valueFulLRange) {
          return (
            <SelectedSection
              key={i}
              sectionColor={sectionColor}
              opacity={opacity}
              numberOfSections={numberOfSections}
              value={value > 0 ? `+${value.toFixed(0)}` : value.toFixed(0)}
              neutral={currentSectionIsNeutral ? true : false}
            />
          )
        }

        return <Section key={i} sectionColor={sectionColor} opacity={opacity} numberOfSections={numberOfSections} />
      })}
    </ChartContainer>
  )
}

export default BulletChart
