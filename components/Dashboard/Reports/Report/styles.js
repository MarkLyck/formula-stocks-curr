import styled from 'react-emotion'
import Box from 'ui-components/Box'

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
  margin-left: 8px;
  color: ${props => props.theme.colors[props.valueColor]};
`

export const FadedValue = styled.h2`
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  opacity: 0.5;
  margin-left: 16px;
`

export const ScoreList = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 850px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const ScoreSection = styled(BesideSection)`
  @media (max-width: 850px) {
    &:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 850px) {
    width: 100%;
    max-width: 320px;
    margin-right: 16px;
    &:nth-child(even) {
      margin-right: 0;
    }
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

export const HelpText = styled.p`
  color: ${props => props.theme.colors.gray};
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 0.8rem;
  font-weight: 500;

  @media (min-width: 850px) {
    display: none;
  }
`
