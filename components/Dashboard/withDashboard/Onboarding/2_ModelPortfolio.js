import React from 'react'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import { OnboardingWrapper, OnboardingContent } from './styles'

const ModelPortfolio = () => (
  <OnboardingWrapper>
    <OnboardingContent>
      <OnboardingHeader>1. Using the model portfolio</OnboardingHeader>
      <OnboardingText>
        Mirroring our model portfolio is quite easy. Everything has been taken care of for you. It is rebalanced on the
        1st of every month.
      </OnboardingText>
      <OnboardingText>
        You mirror it by purchasing the portfolio, and then simply adjust it by executing the trades listed each month
        on the Trades page. You need to log in once a month to keep it updated, usually by selling and buying a few
        stocks.
      </OnboardingText>
      <OnboardingText>
        In the portfolio you see the positions weighted as percentages of portfolio net worth. However if you run a
        small portfolio, you would want to ignore small Trades. Gradual changes are made to existing portfolio position
        sizes, and if you observe for instance a Trade adding only, say, 0,3% or 0,5%, simply ignore this and focus
        instead on larger, multi-percentage-point changes. (Small changes matter for very large portfolios, but are
        irrelevant for small portfolios).
      </OnboardingText>
    </OnboardingContent>
  </OnboardingWrapper>
)

export default ModelPortfolio
