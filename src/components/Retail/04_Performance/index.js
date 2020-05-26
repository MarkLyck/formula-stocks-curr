import React from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { Element } from 'react-scroll'
import Section from '~/ui-components/Section'
import SectionTitle from '~/ui-components/Section/SectionTitle'
import Subtitle from '~/ui-components/Section/Subtitle'
import LaunchPerformance from './LaunchPerformance'
import { MARKET_PRICE_HISTORY, LAUNCH_HISTORY } from '~/common/queries'

const Performance = ({ portfolioYields, planName, amCharts4Loaded }) => {
  const { loading: marketLoading, error: marketError, data: marketData } = useQuery(MARKET_PRICE_HISTORY, {
    variables: {
      marketType: 'DJIA',
      fromDate: '2009-01-30',
    },
  })

  const { loading: launchHistoryLoading, error: launchHistoryError, data: launchHistoryData } = useQuery(
    LAUNCH_HISTORY,
    {
      variables: {
        planName,
      },
    }
  )

  const marketHistory = marketData ? marketData.marketPricingHistoriesList.items : []
  const launchHistory = launchHistoryData ? launchHistoryData.plan.launchHistory : []

  return (
    <React.Fragment>
      <Element name="performance" />
      <LazyLoad height={690} offset={500} once>
        <Section>
          <SectionTitle>Performance</SectionTitle>
          <Subtitle>Unleveraged returns since 2009, compared to the Dow Jones Industrial Average.</Subtitle>
          <LaunchPerformance
            portfolioYields={launchHistory}
            marketHistory={marketHistory}
            planName={planName}
            amCharts4Loaded={amCharts4Loaded}
          />
        </Section>
      </LazyLoad>
    </React.Fragment>
  )
}

Performance.propTypes = {
  portfolioYields: PropTypes.array,
  planName: PropTypes.string,
}

export default Performance
