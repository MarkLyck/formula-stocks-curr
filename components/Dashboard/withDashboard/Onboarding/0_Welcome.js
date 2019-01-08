import React from 'react'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import { OnboardingWrapper, OnboardingContent } from './styles'

const Welcome = () => (
  <OnboardingWrapper>
    <OnboardingContent>
      <OnboardingHeader>Welcome to Formula Stocks!</OnboardingHeader>
      <OnboardingText>
        Use stocks selected by Formula Stocks to better your returns. These stocks have an above average probability of
        becoming winners in the future. ~90% of these have typically been sold with a profit. You buy the stocks through
        your regular bank or broker.
      </OnboardingText>
      <OnboardingText>
        You should always own a diversified portfolio of stocks in order to minimize risk. Depending on your personal
        preference you can build this portfolio in different ways.
      </OnboardingText>
      <OnboardingText>
        You can use our pre-constructed portfolios for ease of use, or build your own. You'll have to decide which
        method works best for you.
      </OnboardingText>
    </OnboardingContent>
  </OnboardingWrapper>
)

export default Welcome
