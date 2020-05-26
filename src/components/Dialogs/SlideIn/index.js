import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { modalContentStyles, Blur, Modal } from './styles'

class SlideIn extends Component {
  state = {}
  static getDerivedStateFromProps(props, state) {
    ReactModal.setAppElement('body')
    return state
  }

  render() {
    const { children, isVisible, onRequestClose } = this.props
    return (
      <ReactModal
        isOpen={isVisible}
        onRequestClose={onRequestClose}
        style={modalContentStyles}
        overlayClassName="modal-overlay"
      >
        <Blur onClick={onRequestClose} />
        {children}
      </ReactModal>
    )
  }
}

export default SlideIn
