import React from 'react'
import LazyLoad from 'react-lazyload'
import { AIScoreWithoutCharts } from 'components/Dashboard/Reports/Report/AIScore'
import AIScoreChart from 'components/Dashboard/Reports/Onboarding/AIScoreChart'
import Section from 'ui-components/Section'
import SectionTitle from 'ui-components/Section/SectionTitle'
import Beside from 'ui-components/Section/Beside'
import Left from 'ui-components/Section/Beside/Left'
import Right from 'ui-components/Section/Beside/Right'
import Disclaimer from 'ui-components/Disclaimer'
import { BesideContainer, Screenshot, aiScoreStyle, HideSmall, HideLarge } from './styles'

const AIScoreSection = ({ amCharts4Loaded }) => (
  <LazyLoad height={658} offset={500} once>
    <Section data-offwhite>
      <SectionTitle>Prefer building your own portfolio?</SectionTitle>
      <BesideContainer>
        <Beside>
          <Left data-center>
            <div>
              AI score is a revolutionary and easy way to gain a winning edge. Artificial Intelligence condenses complex
              business and statistical analysis into a single score.
              <br />
              <br />
              The AI score indicates whether to purchase or avoid a stock. It is colorcoded for simplicity. Red? Avoid!
              Green? Consider buying.
            </div>
          </Left>
          <Right>
            {amCharts4Loaded && (
              <AIScoreWithoutCharts value={0.82} name="AI Score" css={aiScoreStyle} amCharts4Loaded />
            )}
          </Right>
        </Beside>
      </BesideContainer>

      <BesideContainer reverse>
        <Beside>
          <Left>
            {amCharts4Loaded && (
              <AIScoreChart
                id="aiScoreBarChart"
                style={{ width: '100%', height: '280px' }}
                neutralColor="lightGray"
                irrOposite
              />
            )}
          </Left>
          <Right data-center>
            <div>
              <p>
                Stocks with high AI scores outperforms the market. Imagine we divide all stocks into 20 buckets, based
                on their AI score. The graph displays the performance of each bucket<sup>*</sup>.
              </p>
              <br />
              <HideSmall>
                <p>
                  Simply type the name of the stock you are interested in, and get an AI investment report on that stock
                  <sup>**</sup>.
                </p>
                <Disclaimer>
                  <sup>*</sup>Based on statistical studies involving more than 12,000 stocks during several decades.
                  <br />
                  <sup>**</sup>Not all membership levels have access to all stocks.
                </Disclaimer>
              </HideSmall>
            </div>
          </Right>
        </Beside>
      </BesideContainer>
      <HideLarge>
        <p>
          Simply type the name of the stock you are interested in, and get an AI investment report on that stock
          <sup>**</sup>.
        </p>
        <Disclaimer>
          <sup>*</sup>Based on statistical studies involving more than 12,000 stocks during several decades.
          <br />
          <sup>**</sup>Not all membership levels have access to all stocks.
        </Disclaimer>
      </HideLarge>
    </Section>
  </LazyLoad>
)

export default AIScoreSection
