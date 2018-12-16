import React from 'react'
import styled from 'react-emotion'
import { darken } from 'polished'
import Box from 'ui-components/Box'
import theme from 'common/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: ${props => (props.fullWidth ? '0' : '8px')};
`

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Markers = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Marker = styled.p`
  color: ${props => props.theme.colors.black};
  opacity: 0.4;
  font-size: 0.8rem;
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
  height: 20px;
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

  @media (max-width: 420px) {
    &::after {
      content: "";
    }
  }
`

const BulletChart = ({ value, min, max, numberOfSections, withMarkers, fullWidth }) => {
  const sections = new Array(numberOfSections).fill(0)
  return (
    <Container fullWidth={fullWidth}>
      {withMarkers && (
        <Markers>
          <Marker>{min}</Marker>
          <Marker>{0}</Marker>
          <Marker>+{max}</Marker>
        </Markers>
      )}
      <ChartContainer>
        {sections.map((_, i) => {
          const isNegativeSection = i < Math.floor(numberOfSections / 2)
          const isPositiveSection = i > Math.floor(numberOfSections / 2)
          const isNeutralZone = i > Math.floor(numberOfSections / 2) - 2 && i < Math.floor(numberOfSections / 2) + 2
          let opacity = 1

          if (isNegativeSection) {
            opacity = 1 - (2 * i) / (numberOfSections - 1)
          } else if (isPositiveSection) {
            opacity = (2 * i) / (numberOfSections - 1) - 1
          }

          let sectionColor = '240,244,248'
          if (isNegativeSection) sectionColor = '243,68,108'
          else if (isPositiveSection) sectionColor = '18,217,158'

          const valuesPerSection = (max * 2) / numberOfSections
          const valuesUpUntilNextSection = valuesPerSection * (i + 1)
          const valueFulLRange = value + max
          if (
            valuesUpUntilNextSection - valuesPerSection <= valueFulLRange &&
            valuesUpUntilNextSection >= valueFulLRange
          ) {
            return (
              <SelectedSection
                key={i}
                sectionColor={sectionColor}
                opacity={opacity}
                numberOfSections={numberOfSections}
                value={value > 0 ? `+${value.toFixed(0)}` : value.toFixed(0)}
                neutral={isNeutralZone ? true : false}
              />
            )
          }

          return <Section key={i} sectionColor={sectionColor} opacity={opacity} numberOfSections={numberOfSections} />
        })}
      </ChartContainer>
    </Container>
  )
}

export default BulletChart
