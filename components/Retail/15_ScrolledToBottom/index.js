import React from 'react'
import Section from 'ui-components/Section'
import SectionTitle from 'ui-components/Section/SectionTitle'
import Subtitle from 'ui-components/Section/Subtitle'
import Button from 'ui-components/Button'
import { ChatLink } from './styles'

const ScrolledToBottom = ({ toggleSignUpModal }) => {
  if (typeof window !== 'undefined') {
    window.intercomSettings = {
      app_id: '194mpvo',
      custom_launcher_selector: '#talk-to-us',
    }
  }

  return (
    <Section data-offwhite>
      <SectionTitle>Now that you have scrolled all the way to the bottom...</SectionTitle>
      <Subtitle>It can be just the right moment to stop reading and do some clicking instead.</Subtitle>
      <Button variant="raised" onClick={toggleSignUpModal}>
        I'm ready to try
      </Button>
      <ChatLink id="talk-to-us" href="mailto:i194mpvo@incoming.intercom.io">
        Want more information? - Simply ask.
      </ChatLink>
    </Section>
  )
}

export default ScrolledToBottom
