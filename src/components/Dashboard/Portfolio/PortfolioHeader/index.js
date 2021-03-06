import React from 'react'
import PropTypes from 'prop-types'
import PortfolioChart from './PortfolioChart'
import AllocationChart from './AllocationChart'
import Tooltip from '~/ui-components/Tooltip'
import { HeaderContainer, Header, RightSide, LeftSide } from './styles'

const getIncrease = (startSum, endSum) => (((endSum - startSum) / startSum) * 100).toFixed(2)

const PortfolioHeader = ({
  portfolioYields,
  marketPrices,
  planName,
  portfolio,
  portfolioHoldingsLoading,
  launchHistoryLoading,
  marketLoading,
  allocationMap,
  totalBalance,
  updatedAt,
  amCharts4Loaded,
  hasPlanPerms,
}) => {
  let planReturnSince2009 = ''
  let marketReturnSince2009 = ''

  if (portfolioYields && portfolioYields.length) {
    planReturnSince2009 = getIncrease(portfolioYields[0].balance, totalBalance)
    if (planReturnSince2009 <= 0) planReturnSince2009 = ''
  }
  if (marketPrices.length) {
    marketReturnSince2009 = getIncrease(marketPrices[0].price, marketPrices[marketPrices.length - 1].price)
  }

  return (
    <HeaderContainer>
      <LeftSide>
        <Header>
          <h4>Portfolio yields</h4>
        </Header>

        <PortfolioChart
          portfolioYields={portfolioYields}
          marketPrices={marketPrices}
          totalBalance={totalBalance}
          updatedAt={updatedAt}
          planName={planName}
          amCharts4Loaded={amCharts4Loaded}
        />
      </LeftSide>
      <RightSide>
        <div className="plan-results results">
          <h3 className="plan-name">{planName} Formula</h3>
          <p>
            <span>+{planReturnSince2009}% </span>
            since 2009
          </p>
        </div>
        <div className="market-results results">
          <div className="market-name">
            <h3>DJIA</h3>
            <Tooltip tip={'Dow Jones Industrial Average'} position="left" width="242" />
          </div>
          <p>
            <span>+{marketReturnSince2009}% </span>
            since 2009
          </p>
        </div>
        {hasPlanPerms && (
          <AllocationChart
            portfolio={portfolio}
            id="allocation-chart"
            amCharts4Loaded={amCharts4Loaded}
            allocationMap={allocationMap}
          />
        )}
      </RightSide>
    </HeaderContainer>
  )
}

PortfolioHeader.propTypes = {
  portfolioYields: PropTypes.array,
  marketPrices: PropTypes.array,
  planName: PropTypes.string,
  portfolio: PropTypes.array,
}

export default PortfolioHeader
