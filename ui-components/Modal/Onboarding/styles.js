import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const modalContentStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    padding: '0',
    background: 'none',
    border: 'none',
    borderRadius: '0',
  },
}

const leftAligned = css`
  left: 200px;
  @media (max-width: 1440px) {
    left: 110px;
  }
`
const centered = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 32px);
  max-width: 600px;
`

const modalPositions = {
  center: centered,
  portfolio: css`
    top: 60px;
  `,
  suggestions: css`
    top: 130px;
  `,
  AIReports: css`
    top: 200px;
  `,
  plans: css`
    top: 80px;
  `,
}

export const OnboardingContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  transform: none;
  background: white;
  outline: none;
  z-index: 11;
  border-radius: 8px;
  transition: all 0.2s;
  ${props => (props.position === 'center' ? centered : leftAligned)}
  ${props => (props.position ? modalPositions[props.position] : modalPositions.portfolio)}

  @media (max-width: 850px) {
    ${centered}
  }

  @media (max-width: 480px) {
    top: unset;
    right: 0;
    bottom: 0;
    left: 0;
    transform: none;
    border-radius: 0;
    width: 100%;
    max-height: 100vh;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #edf3f9;
`

export const IndicatorContainer = styled.div`
  display: flex;
  @media (max-width: 440px) {
    display: none;
  }
`

export const PageIndicator = styled.button`
  background: ${props => (props.isActive ? props.theme.colors.primary : '#dfebf4')};
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
`

export const XButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 12px;
  right: 12px;
  padding: 2px 8px;
  border: none;
  z-index: 11;

  &:hover {
    color: ${props => props.theme.colors.red};
  }
  @media (max-width: 850px) {
    display: none;
  }
`

export const ArrowLeft = styled.div`
  position: absolute;
  top: 36px;
  left: -12px;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-right: 12px solid white;

  @media (max-width: 850px) {
    display: none;
  }
`

export const ArrowTop = styled.div`
  position: absolute;
  top: -12px;
  left: 24px;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-bottom: 12px solid white;
  border-right: 12px solid transparent;

  @media (max-width: 850px) {
    display: none;
  }
`

export const Container = styled.div`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonWrapper = styled.div`
  display: flex;
  button {
    margin-left: 16px;
  }
  @media (max-width: 440px) {
    justify-content: flex-end;
    width: 100%;
  }
`

export const OnboardingHeader = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.purple};
  margin: 16px 0;
`

export const OnboardingText = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.black};
  margin: 8px 0;
`
