import React from 'react'
import Return from './Return'
import { ReturnsContainer, Divider } from './styles'

const AnnualReturns = ({ portfolioYields, totalBalance }) => {
  let additionalMonths = 1
  const fiveYearStart = portfolioYields.slice(-(12 * 5 + additionalMonths))[0].balance
  const threeYearStart = portfolioYields.slice(-(12 * 3 + additionalMonths))[0].balance
  const twoYearStart = portfolioYields.slice(-(12 * 2 + additionalMonths))[0].balance
  const oneYearStart = portfolioYields.slice(-12 - additionalMonths)[0].balance

  return (
    <ReturnsContainer>
      <Return
        title="5 years"
        className="five-years"
        returnSince={(((totalBalance - fiveYearStart) / fiveYearStart) * 100).toFixed(2)}
      />
      <Divider className="divider" />
      <Return
        title="36 months"
        className="three-years"
        returnSince={(((totalBalance - threeYearStart) / threeYearStart) * 100).toFixed(2)}
      />
      <Divider className="divider" />
      <Return
        title="24 months"
        className="two-years"
        returnSince={(((totalBalance - twoYearStart) / twoYearStart) * 100).toFixed(2)}
      />
      <Divider className="divider" />
      <Return
        title="12 months"
        className="one-year"
        returnSince={(((totalBalance - oneYearStart) / oneYearStart) * 100).toFixed(2)}
      />
    </ReturnsContainer>
  )
}

export default AnnualReturns
