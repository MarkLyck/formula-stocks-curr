import styled from '@emotion/styled'

export const OnboardingWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`

export const OnboardingContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
