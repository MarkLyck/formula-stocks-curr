import React from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { withTheme } from 'emotion-theming'
import Section from '~/ui-components/Section'
import SectionTitle from '~/ui-components/Section/SectionTitle'
import Beside from '~/ui-components/Section/Beside'
import Left from '~/ui-components/Section/Beside/Left'
import Right from '~/ui-components/Section/Beside/Right'
import { BesideContainer, Screenshot, Table, TableBody, TableRow, TableCell, TableHeadCell, StockName } from './styles'
import { LATEST_SELLS } from '~/common/queries'
const removeDupes = (list) => {
  let names = {}

  const newList = list.reduce((acc, curr) => {
    if (!names[curr.ticker]) {
      names[curr.ticker] = true
      acc.push(curr)
    }
    return acc
  }, [])

  return newList
}

const WhatToExpect = ({ planName, winRatio }) => {
  const { loading, data } = useQuery(LATEST_SELLS, {
    variables: { planName },
  })

  const latestSells = !loading ? data.plan.latestSells.items : []

  return (
    <LazyLoad height={899} offset={100} once>
      <Section data-offwhite>
        <SectionTitle>What to expect</SectionTitle>
        <BesideContainer>
          <Beside>
            <Left>
              <p>
                When you first buy a stock, already within 30 days, 62.16% of our recommendations statistically see a
                price increase. Your mileage may vary and depend upon current market conditions.
                <br />
                <br />A typical holding period is 2 years during which price, on average, gradually come to reflect the
                business prospects we have projected. After which statistically 90% will have seen a price increase.
                <br />
                <br />
                Our win-ratio of {Math.floor(winRatio)}% compares favorably to 59% for a typical basket of stocks.
              </p>
            </Left>
            <Right>
              <Screenshot src="static/images/screenshots/portfolio.png" alt="" />
            </Right>
          </Beside>
        </BesideContainer>
        <p>
          Using Formula Stocks gives you an edge. Use it consistently, diversified, for years: Odds accumulate in your
          favour, and you are likely to perform better than most.
          <br />
          <br />
          Latest portfolio sales:
        </p>
        <Table>
          <thead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell className="purchase-price-header" numeric>
                Bought at
              </TableHeadCell>
              <TableHeadCell className="sales-price-header" numeric>
                Sold at
              </TableHeadCell>
              <TableHeadCell numeric>Return</TableHeadCell>
            </TableRow>
          </thead>
          <TableBody>
            {removeDupes(latestSells).map((sell, i) => {
              const percentReturn = (((sell.soldAt - sell.boughtAt) * 100) / sell.boughtAt).toFixed(2)
              return (
                <TableRow key={sell.name + i}>
                  <TableCell className="stock-name">
                    <StockName>{sell.name}</StockName> ({sell.ticker})
                  </TableCell>
                  <TableCell className="purchase-price" numeric>
                    ${sell.boughtAt.toFixed(2)}
                  </TableCell>
                  <TableCell className="sales-price" numeric>
                    ${sell.soldAt.toFixed(2)}
                  </TableCell>
                  <TableCell className={`percent-return ${percentReturn > 0 ? 'positive' : 'negative'}`} numeric>
                    {percentReturn}%
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Section>
    </LazyLoad>
  )
}

WhatToExpect.defaultProps = {
  latestSells: [],
}

WhatToExpect.propTypes = {
  latestSells: PropTypes.array.isRequired,
}

export default withTheme(WhatToExpect)
