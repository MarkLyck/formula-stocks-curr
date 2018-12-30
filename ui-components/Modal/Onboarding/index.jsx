import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'ui-components/Button'
import useWindowWidth from 'common/hooks/useWindowWidth'
import {
  OnboardingContainer,
  modalContentStyles,
  Arrow,
  XButton,
  Container,
  Divider,
  IndicatorContainer,
  PageIndicator,
  ButtonWrapper,
} from './styles'

const getWidth = () => window.innerWidth
const HelpModal = ({ isOpen, onRequestClose, activePageIndex, pages, setPageIndex }) => {
  const windowWidth = useWindowWidth()

  const next = () => (activePageIndex === pages.length - 1 ? onRequestClose() : setPageIndex(activePageIndex + 1))

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      style={modalContentStyles}
    >
      <OnboardingContainer>
        <Arrow />
        <XButton onClick={onRequestClose}>
          <FontAwesomeIcon icon={['far', 'times']} size="2x" />
        </XButton>
        <Container>{pages[activePageIndex]}</Container>

        <Divider />

        <Container>
          <IndicatorContainer>
            {pages.map((_, i) => (
              <PageIndicator key={i} onClick={() => setPageIndex(i)} isActive={activePageIndex === i} />
            ))}
          </IndicatorContainer>

          <ButtonWrapper>
            <Button type="light" variant="raised" onClick={onRequestClose}>
              Skip Intro
            </Button>
            <Button variant="raised" onClick={next}>
              {activePageIndex === pages.length - 1 ? 'Finish' : 'Continue'}
            </Button>
          </ButtonWrapper>
        </Container>
      </OnboardingContainer>
    </ReactModal>
  )
}

export default HelpModal
