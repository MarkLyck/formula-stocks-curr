import React from 'react'
import styled from 'react-emotion'
import Box from 'ui-components/Box'

const ItemContainer = styled(Box)`
  box-sizing: border-box;
  display: fex;
  justify-content: space-between;
  padding: 16px;
  margin: 8px 0;
  border-left: 0;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    border-left: ${props => `4px solid ${props.theme.colors.primary}`};
  }
`

const Name = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 64px);
`

const Score = styled.h3`
  color: ${props => props.theme.colors[props.valueColor]};
  width: 64px;
  text-align: right;
  font-weight: 500;
`

const ReportItem = ({ report, setSelectedReport }) => {
  const { name, ticker, aiScore } = report

  let outputValue = (aiScore * 100).toFixed(0)
  let valueColor = 'black'
  if (outputValue > 0) {
    valueColor = 'green'
    outputValue = `+${outputValue}`
  } else if (outputValue < 0) {
    valueColor = 'red'
  }

  return (
    <ItemContainer onClick={() => setSelectedReport(report)}>
      <Name>
        {ticker} - {name}
      </Name>
      <Score valueColor={valueColor}>{outputValue}</Score>
    </ItemContainer>
  )
}

export default ReportItem
