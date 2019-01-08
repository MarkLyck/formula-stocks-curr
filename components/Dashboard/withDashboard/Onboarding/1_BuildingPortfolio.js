import React from 'react'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import { OnboardingWrapper, OnboardingContent } from './styles'

const BuildingPortfolio = () => (
  <OnboardingWrapper>
    <OnboardingContent>
      <OnboardingHeader>Building you portfolio</OnboardingHeader>
      <OnboardingText>
        If you are looking for the easiest way possible you would use the model portfolio, where everything is
        prepackaged.
      </OnboardingText>
      <OnboardingText>
        If you prefer a hands-on approach in decision making, do your own research, use multiple strategies, or have a
        legacy portfolio, you would probably prefer to build your own portfolio. This is supported in two ways:
      </OnboardingText>
      <OnboardingText>
        Suggestions yields specific buy recommendations. These are easy to follow, have very good odds and often high
        performance.
      </OnboardingText>
      <OnboardingText>
        Artificial Intelligence investment reports may be the thing for you, if you like doing your own research, use
        multiple investment methods or want to know more about individual investments.
      </OnboardingText>
    </OnboardingContent>
  </OnboardingWrapper>
)

export default BuildingPortfolio
