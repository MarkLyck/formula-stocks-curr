import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const ModalContainer = styled.div`
  padding: 24px 16px;
`

export const smallModalContentStyles = {
  content: {
    position: 'absolute',
    width: '360px',
    height: 'auto',
    top: '50%',
    left: '50%',
    right: 'unset',
    bottom: 'unset',
    padding: '0',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
  },
}

export const fullPageModalContentStyle = {
  content: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '0',
    overflowY: 'scroll',
  },
  overlay: {
    background: 'white',
  },
}

export const LegalContainer = styled.div`
  padding: 32px;
  overflow-y: auto;
  margin-top: 64px;
  p {
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 500;
    margin-bottom: 8px;
  }
`

export const AppBar = styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  height: 72px;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);

  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
  }

  button {
    background: none;
    border: none;
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
  }
`
