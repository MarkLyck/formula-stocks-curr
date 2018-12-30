import { css } from '@emotion/core'
import styled from '@emotion/styled'
import ReactModal from 'react-modal'
import mq from 'common/utils/mq'
import { boxStyle } from 'ui-components/Box'

if (typeof document !== 'undefined') {
  ReactModal.setAppElement('body')
}

export const Modal = styled(ReactModal)`
  ${boxStyle};
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  min-width: 400px;

  h2 {
    font-size: 1.2rem;
    padding: 16px;
  }

  button {
    margin: auto 16px 16px;
    display: flex;
    justify-content: center;
  }

  ${mq.medium(css`
    width: 80%;
  `)};

  ${mq.small(css`
    width: 100%;
    height: 100%;
    min-width: 0;
    border-radius: 0;
  `)};
`

export const ListContainer = styled.div`
  overflow-y: auto;
  margin-bottom: 16px;
  .gray-item {
    background: ${props => props.theme.colors.offWhite};
  }
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`

export const ItemValue = styled.div`
  margin-left: 24px;
  font-weight: 500;
`
