import styled from '@emotion/styled'
import { css } from '@emotion/core'
import ReactModal from 'react-modal'

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

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transition: backdrop-filter 1.5s ease-out;
`
