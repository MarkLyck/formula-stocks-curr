import React from 'react'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import { OnboardingWrapper, OnboardingContent } from './styles'

const BuildingPortfolio = () => (
  <OnboardingWrapper>
    <OnboardingContent>
      <OnboardingHeader>Building you portfolio</OnboardingHeader>
      <OnboardingText>
        If you are looking for the easiest way possible you would mirror the model portfolio, where everything is
        pre-packaged.
      </OnboardingText>
      <OnboardingText>
        If you prefer a hands-on approach in decision making, do your own research, use multiple strategies, or have a
        legacy portfolio, you would probably prefer to build your own portfolio. This is supported in two ways: Using
        either Suggestions or AI Reports.
      </OnboardingText>
      <OnboardingText>
        Suggestions yields specific buy recommendations. These are easy to follow, have very good odds and often high
        performance.
      </OnboardingText>
      <OnboardingText>
        If you like doing your own research, use multiple investment methods or just want to know more about your
        individual investments. You might prefer to use our Artificial Intelligence investment reports.
      </OnboardingText>
    </OnboardingContent>
  </OnboardingWrapper>
)

export default BuildingPortfolio
