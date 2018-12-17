import React from 'react'
import ReactModal from 'react-modal'
import styled from 'react-emotion'
import { css } from 'emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'ui-components/Button'

const overlayClass = css`
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const modalStyles = `
  box-sizing: border-box;
  position: relative;
  background: white;
  width: 100%;
  max-width: 600px;
  height: auto;
  outline: none;
  z-index: 11;
  border-radius: 8px;
  padding: 16px;
`

const XButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 8px;
  right: 8px;
  padding: 2px 8px;
  border: none;

  &:hover {
    color: ${props => props.theme.colors.red};
  }
`

// const DismissButton = styled(Button)`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 8px;
//   right: 8px;
//   padding: 2px 8px;
//   border: none;

//   &:hover {
//     color: ${props => props.theme.colors.red};
//   }
// `

const HelpModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={console.log} overlayClassName={overlayClass} css={modalStyles}>
      <XButton onClick={onRequestClose}>
        <FontAwesomeIcon icon={['far', 'times']} size="2x" />
      </XButton>
      {children}
      <Button type="light" variant="raised" onClick={onRequestClose}>
        Dismiss
      </Button>
    </ReactModal>
  )
}

export default HelpModal
