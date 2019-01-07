import React from 'react'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import { OnboardingWrapper, OnboardingContent } from './styles'

const Suggestions = () => (
  <OnboardingWrapper>
    <OnboardingContent>
      <OnboardingHeader>2. Using Suggestions</OnboardingHeader>
      <OnboardingText>
        The suggestions page offer a wide set of buying recommendations. Pick those you prefer and ignore the rest.
      </OnboardingText>
      <OnboardingText>
        Please note that suggested percentages, can be thought of as a percentage of cash available for investment this
        month. For example if you have $3,000 available for investment in May, and a suggestions says 10% this means
        $300 dollars in May. This percentage is a guide only, but contains some usable indications about odds. In
        practical terms, if you run a small portfolio, you would choose a size that is right for you to give adequate
        diversification. Maybe focus only on a couple of the larger position sizes suggested.
      </OnboardingText>
      <OnboardingText>
        Suggestions are updated every Tuesday evening, US EST. With suggestions, you generally have to make your own
        decisions about when to sell. A typical holding period is 2 years.
      </OnboardingText>
    </OnboardingContent>
  </OnboardingWrapper>
)

export default Suggestions
