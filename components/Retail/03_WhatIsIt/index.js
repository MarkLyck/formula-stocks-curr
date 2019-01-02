import React from 'react'
import LazyLoad from 'react-lazyload'
import Section from 'ui-components/Section'
import SectionTitle from 'ui-components/Section/SectionTitle'
import Beside from 'ui-components/Section/Beside'
import Left from 'ui-components/Section/Beside/Left'
import Right from 'ui-components/Section/Beside/Right'
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
            We offer stock recommendations: what to buy and when to sell. With an unusual twist offering higher expected
            reward, with lower expected risk.
            <br />
            <br />
            Included is a model portfolio designed to build wealth through intelligent portfolio management. You can
            replicate it to better your investment performance. Or use our AI investment reports for individual stock
            picking.
            <br />
            <br />
            Recommendations are for stocks trading on all US exchanges including larger international stocks. Trade
            these from anywhere in the world, through a bank or broker you already use.
            <br />
            <br />
            Using Formula Stocks is easy. Simply follow the instructions, and you'll be handling your own account in no
            time.
          </p>
        </Right>
      </Beside>
    </BesideContainer>
  </Section>
)

export default WhatIsIt
