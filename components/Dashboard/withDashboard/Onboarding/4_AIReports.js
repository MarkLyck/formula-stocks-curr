import React from 'react'
import Link from 'next/link'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import { OnboardingWrapper, OnboardingContent } from './styles'

const AIReports = () => (
  <OnboardingWrapper>
    <OnboardingContent>
      <OnboardingHeader>3. Using AI Reports</OnboardingHeader>
      <OnboardingText>
        Another way to construct your own portfolio is using AI Reports. Go to the AI Reports page. Type in e.g. Apple
        (or its ticker AAPL). You will now see an AI investment report for the company.
      </OnboardingText>
      <OnboardingText>
        It includes an artificial intelligence based AI Score, with strong predictive qualities, and if you deem this
        score good enough, you could choose to add Apple to your portfolio. Or choose to ignore it.
      </OnboardingText>
      <OnboardingText>
        It is also extremely useful as an extra tool for the value investor, the growth investor, or quantitative
        investor as it adds very valuable additional information to virtually any other investment approach.
      </OnboardingText>
      <OnboardingText>
        When using AI Reports, you make your own decisions about when to sell. For more detailed information, please
        read the separate article on AI-Score{' '}
        <Link href="/dashboard/articles/ai-score">
          <a>found here</a>
        </Link>
      </OnboardingText>
    </OnboardingContent>
  </OnboardingWrapper>
)

export default AIReports
