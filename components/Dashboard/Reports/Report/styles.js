import styled from 'react-emotion'
import Box from 'ui-components/Box'

export const ReportContainer = styled.div`
  box-sizing: border-box;
  padding: 16px;
  width: 100%;
`

export const SectionHeader = styled.h3`
  font-weight: 500;
  color: ${props => props.theme.colors.purple};
  margin-bottom: 8px;
  margin-top: 24px;
`

export const BesideSection = styled(Box)`
  padding: 12px;
  margin-bottom: 16px;
  justify-content: space-between;
`

export const BoldValue = styled.h2`
  font-weight: 500;
  min-width: 100px;
  color: ${props => props.theme.colors.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Value = styled.h2`
  font-weight: 500;
  color: ${props => props.theme.colors[props.valueColor]};
`

export const FadedValue = styled.h2`
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  opacity: 0.5;
  margin-left: 16px;
`

export const ScoreSection = styled(BesideSection)`
  &:hover {
    cursor: pointer;
  }
`

export const ExpandedScore = styled(ScoreSection)`
  flex-direction: column;
`

export const Beside = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`
