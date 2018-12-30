import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Beside = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;
  > div:first-of-type {
    margin-right: 24px;
  }
`

export const sideStyles = props => css`
  max-width: calc(50% - 16px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props['data-center'] ? 'center' : 'flex-start'};
`

export default Beside
