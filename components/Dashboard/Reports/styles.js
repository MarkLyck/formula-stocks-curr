import styled from 'react-emotion'

export const ReportContainer = styled.div`
  box-sizing: border-box;
  padding: 16px;
  width: 100%;
  height: calc(100% - 140px);
  max-height: 600px;
  max-width: 600px;
  margin: 0 auto;
`

export const SectionHeader = styled.h3`
  font-weight: 500;
  color: ${props => props.theme.colors.purple};
  margin-bottom: 8px;
  margin-top: 24px;
  &:first-child {
    margin-top: 8px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
`

export const ReportIcon = styled.span`
  margin-top: 0 auto;
  svg {
    height: 100%;
  }
`

export const IconTitle = styled.h2`
  font-weight: 500;
  color: ${props => props.theme.colors.purple};
  margin-bottom: 16px;
  font-size: 1.4rem;
`

export const IconSubtitle = styled.h3`
  font-weight: 400;
  color: ${props => props.theme.colors.purple};
  font-size: 1rem;
  margin: 0 24px;
`
