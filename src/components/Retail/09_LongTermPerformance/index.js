import React from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { planIds, marketIds } from '~/common/constants'
import Section from '~/ui-components/Section'
import SectionTitle from '~/ui-components/Section/SectionTitle'
import Subtitle from '~/ui-components/Section/Subtitle'
import Disclaimer from '~/ui-components/Disclaimer'
import LongTermGraph from './LongTermGraph'
import { MARKET_PRICE_HISTORY, BACKTESTED_HISTORY } from '~/common/queries'

const Performance = ({ backtestedData, marketPrices, planName, amCharts4Loaded }) => {
  const { loading: marketLoading, error: marketError, data: marketData } = useQuery(MARKET_PRICE_HISTORY, {
    variables: {
      marketType: 'SP500',
      fromDate: '1970-01-30',
    },
  })

  const { loading: backtestedHistoryLoading, error: backtestedHistoryError, data: backtestedHistoryData } = useQuery(
    BACKTESTED_HISTORY,
    {
      variables: {
        planName,
      },
    }
  )

  const marketHistory = marketData ? marketData.marketPricingHistoriesList.items : []
  const backtestedHistory = backtestedHistoryData ? backtestedHistoryData.plan.backtestedHistory : []

  return (
    <LazyLoad height="65vh" offset={500} once>
      <Section data-offwhite>
        <SectionTitle>Long-term performance</SectionTitle>
        <Subtitle>
          Log scale graph 1970 - {new Date().getFullYear()}. How $25,000 invested would have evolved over time
        </Subtitle>
        <LongTermGraph
          planData={backtestedHistory}
          marketPrices={marketHistory}
          planName={planName}
          amCharts4Loaded={amCharts4Loaded}
        />
        <Disclaimer>
          Historical numbers are based on backtested data. Since our 2009 launch we have observed similar results in
          real time. See our ToS for details.
        </Disclaimer>
      </Section>
    </LazyLoad>
  )
}

Performance.propTypes = {
  backtestedData: PropTypes.array,
  marketPrices: PropTypes.array,
  planName: PropTypes.string,
}

export default Performance
