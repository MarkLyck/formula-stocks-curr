import React from 'react'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import { OnboardingWrapper, OnboardingContent } from './styles'

const ModelPortfolio = () => (
  <OnboardingWrapper>
    <OnboardingContent>
      <OnboardingHeader>1. Using the model portfolio</OnboardingHeader>
      <OnboardingText>
        {`Mirroring our model portfolio is quite easy. Everything has been taken care of for you. It is adjusted on the
        1st of every month.`}
      </OnboardingText>
      <OnboardingText>
        {`You mirror it by purchasing the portfolio, and then simply adjust it by executing the trades listed each month
        on the Trades page. You need to log in once a month to keep it updated, usually by selling and buying a few
        stocks.`}
      </OnboardingText>
      <OnboardingText>
        {`In the portfolio you see the positions weighted as percentages of portfolio net worth 
        which are easily adjusted to the size relevant for you. However if you run a small portfolio,
        you would simply want to ignore small trades. Gradual changes are made to existing position sizes,
        and if you observe a trade adding, say, < 0,5%, simply ignore this and focus instead on larger,
        multi-percentage-point changes. (Small adjustments matter for very large portfolios,
        but are irrelevant for small portfolios).`}
      </OnboardingText>
    </OnboardingContent>
  </OnboardingWrapper>
)

export default ModelPortfolio
