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

export const OnboardingContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 200px;
  left: 220px;
  transform: none;
  background: white;
  outline: none;
  z-index: 11;
  border-radius: 8px;
  transition: all 0.2s;

  @media (max-width: 1440px) {
    left: 110px;
  }

  @media (max-width: 850px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 480px) {
    top: unset;
    right: 0;
    bottom: 0;
    left: 0;
    transform: none;
    border-radius: 0;
    width: 100%;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #edf3f9;
`

export const IndicatorContainer = styled.div`
  display: flex;
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

export const Arrow = styled.div`
  position: absolute;
  top: 40px;
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
`

export const OnboardingHeader = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.purple};
  margin-bottom: 16px;
`

export const OnboardingText = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.black};
  margin: 8px 0;
`
