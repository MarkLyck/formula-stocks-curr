import React from 'react'
import Return from './Return'
import { ReturnsContainer, Divider } from './styles'

const AnnualReturns = ({ portfolioYields, totalBalance }) => {
  if (!portfolioYields || !portfolioYields.length) return <ReturnsContainer />
  // the date exactly e.g. 2 years ago, will return the balance of the last date of the month.
  // skip 1 additional month back to get the correct starting date.
  const additionalMonth = 1

  // CASH is already included in this balance, DO NOT ADD CASH TO THIS VALUE AGAIN.
  const balance5YearsAgo = portfolioYields[portfolioYields.length - 12 * 5 - additionalMonth].balance
  const balance3YearsAgo = portfolioYields[portfolioYields.length - 12 * 3 - additionalMonth].balance
  const balance2YearsAgo = portfolioYields[portfolioYields.length - 12 * 2 - additionalMonth].balance
  const balance1YearAgo = portfolioYields[portfolioYields.length - 12 - additionalMonth].balance

  const percentIncrease = balance => ((totalBalance - balance) * 100) / balance

  return (
    <ReturnsContainer>
      <Return title="5 years" className="five-years" returnSince={percentIncrease(balance5YearsAgo).toFixed(2)} />
      <Divider className="divider" />
      <Return title="36 months" className="three-years" returnSince={percentIncrease(balance3YearsAgo).toFixed(2)} />
      <Divider className="divider" />
      <Return title="24 months" className="two-years" returnSince={percentIncrease(balance2YearsAgo).toFixed(2)} />
      <Divider className="divider" />
      <Return title="12 months" className="one-year" returnSince={percentIncrease(balance1YearAgo).toFixed(2)} />
    </ReturnsContainer>
  )
}

export default AnnualReturns
