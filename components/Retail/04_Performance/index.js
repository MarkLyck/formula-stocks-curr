import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Element } from 'react-scroll'
import { marketIds } from 'common/constants'
import Section from 'ui-components/Section'
import SectionTitle from 'ui-components/Section/SectionTitle'
import Subtitle from 'ui-components/Section/Subtitle'
import LaunchPerformance from './LaunchPerformance'

const GET_DATA_SINCE_2009 = gql`
  query {
    DJIA: Market(id: "${marketIds.DJIA}") {
      pricesSince2009
    }
  }
`

const Performance = ({ portfolioYields, planName, amCharts4Loaded }) => (
  <Query query={GET_DATA_SINCE_2009}>
    {({ loading, error, data = {} }) => {
      const { DJIA = {} } = data
      return (
        <Section>
          <Element name="performance" />
          <SectionTitle>Performance</SectionTitle>
          <Subtitle>Unleveraged returns since 2009, compared to the Dow Jones Industrial Average.</Subtitle>
          <LaunchPerformance
            portfolioYields={portfolioYields}
            marketPrices={DJIA.pricesSince2009 || []}
            planName={planName}
            amCharts4Loaded={amCharts4Loaded}
          />
        </Section>
      )
    }}
  </Query>
)

Performance.propTypes = {
  portfolioYields: PropTypes.array,
  marketPrices: PropTypes.array,
  planName: PropTypes.string,
}

export default Performance
