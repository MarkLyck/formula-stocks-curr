import { css } from '@emotion/core'
import { boxStyle } from 'ui-components/Box'

export const tableStyle = css`
  ${boxStyle};
  display: table;
  width: calc(100% - 32px);
  margin: 16px;

  @media (max-width: 600px) {
    th:nth-of-type(4) {
      display: none;
    }
    td:nth-of-type(4) {
      display: none;
    }
  }

  @media (max-width: 456px) {
    th:nth-of-type(3) {
      display: none;
    }
    td:nth-of-type(3) {
      display: none;
    }
  }
`
