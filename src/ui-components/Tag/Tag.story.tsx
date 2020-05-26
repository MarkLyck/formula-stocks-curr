import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import styled from '@emotion/styled'
import { Tag } from '~/ui-components'

const Container = styled.div`
  padding: 32px;
`

export default {
  title: 'ui components|Tag',
  decorators: [withKnobs],
}

export const tag = () => {
  const value = text('value', 'Value')
  const prefix = text('prefix', 'Prefix: ')
  const loading = boolean('loading', false)

  return (
    <Container>
      <Tag loading={loading} prefix={prefix}>
        {value}
      </Tag>
    </Container>
  )
}
