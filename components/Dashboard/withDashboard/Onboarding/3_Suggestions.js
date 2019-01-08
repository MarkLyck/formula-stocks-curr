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
        Please note that suggested percentages here, refers to a percentage of cash available for investment this month.
        E.g. with $3,000 available for investment in May, and a suggestion that says 10%, it suggests $300 dollars in
        May as a guide only. In practical terms, if you run a small portfolio, you would choose the size that is right
        for you to provide adequate diversification. Maybe focus only on a couple of the larger position sizes
        suggested.
      </OnboardingText>
      <OnboardingText>
        Suggestions are updated every Tuesday evening, US EST. With suggestions, you generally have to decide when to
        sell. A typical holding period is 2 years.
      </OnboardingText>
    </OnboardingContent>
  </OnboardingWrapper>
)

export default Suggestions
