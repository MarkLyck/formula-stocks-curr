import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import mq from '~/common/utils/mq'
import { useQuery } from '@apollo/react-hooks'
import Sect, { Section } from '~/ui-components/Section'
import SectionTitle from '~/ui-components/Section/SectionTitle'
import Beside from '~/ui-components/Section/Beside'
import Disclaimer from '~/ui-components/Disclaimer'
import DualBarChart from '~/ui-components/Charts/DualBarChart'
import { LAUNCH_STATISTICS, BACKTESTED_STATISTICS, LAUNCH_HISTORY } from '~/common/queries'

const SectionContainer = styled('div')`
  ${Section} {
    ${mq.small(css`
      .chart-container {
        display: none;
      }
      .text-container {
        margin-right: 0;
      }
    `)};
  }
`

const Introduction = ({ winRatio, portfolioReturn, planName }) => {
  const { loading, data: launchHistoryData } = useQuery(LAUNCH_HISTORY, {
    variables: {
      planName: 'entry',
    },
  })

  if (loading) return null

  const portfolioYields = launchHistoryData.plan.launchHistory

  let returns2016, returns2017, returns2018
  if (portfolioYields && portfolioYields.length) {
    let janBalance2016, decBalance2016, janBalance2017, decBalance2017, janBalance2018, decBalance2018
    portfolioYields.forEach((point) => {
      if (point.date.includes('2016')) {
        if (point.date.includes('-01-')) {
          janBalance2016 = point.balance
        } else if (point.date.includes('-12-')) {
          decBalance2016 = point.balance
        }
      } else if (point.date.includes('2017')) {
        if (point.date.includes('-01-')) {
          janBalance2017 = point.balance
        } else if (point.date.includes('-12-')) {
          decBalance2017 = point.balance
        }
      } else if (point.date.includes('2018')) {
        if (point.date.includes('-01-')) {
          janBalance2018 = point.balance
        } else if (point.date.includes('-12-')) {
          decBalance2018 = point.balance
        }
      }
    })
    returns2016 = ((decBalance2016 - janBalance2016) / janBalance2016) * 100
    returns2017 = ((decBalance2017 - janBalance2017) / janBalance2017) * 100
    returns2018 = ((decBalance2018 - janBalance2018) / janBalance2018) * 100
  }

  return (
    <SectionContainer>
      <Sect>
        <SectionTitle>Invest intelligently</SectionTitle>
        <Beside>
          <div className="text-container">
            <p>
              Formula Stocks offers a better way to invest. We forecast which stocks will go up, before they go up.{' '}
              <b>+{Math.floor(winRatio)}%</b> of the time we have made such an estimate, it has proved a successful long
              term investment. You simply buy these stocks in your own account.
              <br />
              <br />
              Investing using these estimates, cumulative returns since 2009 have been{' '}
              <b>+{Math.floor(portfolioReturn)}%</b>
              <sup>*</sup> vs. the S&P500's 225%. Our Entry portfolio returned <b>+{returns2016.toFixed(2)}%</b> in 2016
              and <b>+{returns2017.toFixed(2)}%</b> in 2017. Powered by Artificial Intelligence forecasting, this
              performance strongly exceeds the 6-7% average returns typically expected from the stock market.
              <br />
              <br />
            </p>
            <p>
              Join us to better your returns, save on fees, and moderate your risk. Sign up for a 30-day free trial
              without any obligations.
            </p>
            <Disclaimer>
              <sup>*</sup>Past performance is not neccesarily indicative of future results.
            </Disclaimer>
          </div>
          <DualBarChart
            primaryStatistic={Math.floor(winRatio)}
            secondaryStatistic={59}
            primaryName={planName}
            secondaryName="Market"
            primaryHeight={Math.floor(winRatio)}
            secondaryHeight={59}
            description="Winners in %"
            unit="%"
          />
        </Beside>
      </Sect>
    </SectionContainer>
  )
}

Introduction.defaultProps = {
  winRatio: 90,
  portfolioReturn: 500,
  planName: 'entry',
}

Introduction.propTypes = {
  winRatio: PropTypes.number,
  portfolioReturn: PropTypes.number,
  planName: PropTypes.string,
}

export default Introduction
