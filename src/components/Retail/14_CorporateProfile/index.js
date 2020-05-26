import React from 'react'
import LazyLoad from 'react-lazyload'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from '~/ui-components/Section'
import SectionTitle from '~/ui-components/Section/SectionTitle'
import Beside from '~/ui-components/Section/Beside'
import Left from '~/ui-components/Section/Beside/Left'
import Right from '~/ui-components/Section/Beside/Right'
import {
  BesideContainer,
  Card,
  ProfileImg,
  ProfileTextContainer,
  Subtitle,
  SocialMediaLink,
  SocialMediaContainer,
} from './styles'

const CorporateProfile = () => (
  <LazyLoad height={514} offset={100} once>
    <Section data-white>
      <SectionTitle>Corporate profile</SectionTitle>
      <BesideContainer>
        <Beside>
          <Left>
            <Subtitle>About us</Subtitle>
            <p>
              Formula Stocks develops cognitive computing technologies since 2003 designed to achieve above-average
              performance in equity markets. Technology includes deep learning, business analytics, decisionmaking,
              probability estimation, and prediction technologies. Product suites can be used as a standalone tool to
              assist investors, or operate as autonomous decisionmakers. Artificial intelligence fund management
              solutions capable of portfolio construction, portfolio management & risk/reward management.
              <br />
              <br />
              Address: Formula Stocks ApS | Ribe Landevej 39, DK-6100 Haderslev. Denmark
              <br />
              <br />
              Contact us at: <a href="mailto:info@formulastocks.com">info@formulastocks.com</a>
            </p>
            <SocialMediaContainer>
              <SocialMediaLink href="https://www.facebook.com/formulastocks/" target="_blank">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </SocialMediaLink>
              <SocialMediaLink href="https://twitter.com/FormulaStocks" target="_blank">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </SocialMediaLink>
            </SocialMediaContainer>
          </Left>

          <Right>
            <Subtitle>Executive team</Subtitle>
            <Card>
              <ProfileImg
                srcSet="static/images/corporate/Thomas.jpg,
              static/images/corporate/Thomas@2x.jpg 2x"
                src="static/images/corporate/Thomas.jpg"
                alt=""
              />
              <ProfileTextContainer>
                <h5>Thomas Lyck</h5>
                <p>CEO</p>
              </ProfileTextContainer>
            </Card>
            <Card>
              <ProfileImg
                srcSet="static/images/corporate/Mark.jpg,
              static/images/corporate/Mark@2x.jpg 2x"
                src="static/images/corporate/Mark.jpg"
                alt=""
              />
              <ProfileTextContainer>
                <h5>Mark Lyck</h5>
                <p>COO</p>
              </ProfileTextContainer>
            </Card>
            <Card>
              <ProfileImg
                srcSet="static/images/corporate/Marie.jpg,
              static/images/corporate/Marie@2x.jpg 2x"
                src="static/images/corporate/Marie.jpg"
                alt=""
              />
              <ProfileTextContainer>
                <h5>Marie Lauritzen</h5>
                <p>CHRO</p>
              </ProfileTextContainer>
            </Card>
          </Right>
        </Beside>
      </BesideContainer>
    </Section>
  </LazyLoad>
)

export default CorporateProfile
