import React from 'react'
import { OnboardingHeader, OnboardingText } from '~/ui-components/Modal/Onboarding/styles'
import { OnboardingWrapper, OnboardingContent } from './styles'

const Memberships = () => (
  <OnboardingWrapper>
    <OnboardingContent>
      <OnboardingHeader>Different memberships available.</OnboardingHeader>
      <OnboardingText>
        We have four different products ranging from personal usage to professional fund management. These offer
        different levels of performance and selection of AI Reports available. You can click the 'Entry' button to
        change between plans. This will give you a peek into the performance of each.
      </OnboardingText>
      <OnboardingText>
        For more comprehensive information on using Formula Stocks, please see our Articles or feel free to ask us any
        questions you might have.
      </OnboardingText>
    </OnboardingContent>
  </OnboardingWrapper>
)

export default Memberships
