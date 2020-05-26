import React from 'react'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '~/ui-components/Button'

const BackButton = () => (
  <Button color="primary" variant="raised" type="light" onClick={() => Router.push('/dashboard/articles')}>
    <FontAwesomeIcon icon="angle-left" style={{ marginRight: '8px' }} />
    Articles
  </Button>
)

export default BackButton
