import React from 'react'
import LazyLoad from 'react-lazyload'
import Section from '~/ui-components/Section'
import SectionTitle from '~/ui-components/Section/SectionTitle'
import Beside from '~/ui-components/Section/Beside'
import Left from '~/ui-components/Section/Beside/Left'
import Right from '~/ui-components/Section/Beside/Right'
import { BesideContainer, Screenshot } from './styles'

const WhatIsIt = () => (
  <Section data-offwhite>
    <SectionTitle>What is it?</SectionTitle>
    <BesideContainer>
      <Beside>
        <Left data-center>
          <LazyLoad height={303} offset={100} once>
            <Screenshot src="static/images/screenshots/trades.png" alt="" />
          </LazyLoad>
        </Left>
        <Right>
          <p>
            We offer stock recommendations: What to buy and when to sell.
            <br />
            <br />
            Intelligent portfolio management is designed to build wealth through a model portfolio that you can easily
            replicate. We systematically buy low and sell high, combining higher reward with lower risk.
            <br />
            <br />
            You can also pick better stocks individually via AI investment reports and recommendations. He who has the
            best information wins.
          </p>
        </Right>
      </Beside>
    </BesideContainer>
  </Section>
)

export default WhatIsIt
