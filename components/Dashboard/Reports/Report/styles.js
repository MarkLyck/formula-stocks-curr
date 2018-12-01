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
`

export const FadedValue = styled.h2`
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  opacity: 0.5;
`
