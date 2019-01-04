import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

const slideIn = keyframes`
  0% {
      transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`

const expandedMenu = css`
  box-sizing: content-box;
  width: 180px;
  button {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    width: 180px;
    height: 72px;
    svg {
      font-size: 1.4rem;
    }
    h4 {
      position: absolute;
      left: calc(50px + 8px);
      top: 50%;
      transform: translateY(-50%);
      text-align: left;
      margin: 0;
      font-size: 1rem;
      font-weight: 400;
    }
  }
  > button:last-child {
    bottom: 0;
  }
`

export const MenuList = styled.ul`
  position: relative;
  background: ${props => props.theme.colors.darkGray};
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.25);
  z-index: 15;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  height: 100%;
  box-sizing: border-box;
  button {
    width: 90px;
  }

  > button:last-child {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 850px) {
    display: ${props => (props.isVisible ? 'block' : 'none')};
    ${props => (props.isVisible ? expandedMenu : '')};
    transform: translateX(0);
    animation: ${slideIn} 0.2s ease-out;
  }

  @media (min-width: 1440px) {
    ${expandedMenu};
  }

  @media (max-height: 500px) {
    > button:last-child {
      display: none;
    }
  }

  @media (max-height: 430px) {
    > button:nth-of-type(4) {
      display: none;
    }
  }
`
