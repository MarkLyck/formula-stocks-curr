import styled from '@emotion/styled'
import { Table } from '~/ui-components/Table'
import { boxStyle } from '~/ui-components/Box'

export const UsersContainer = styled(Table)`
  ${boxStyle};
  display: table;
  margin: 16px;
  width: calc(100% - 32px);

  .old {
    color: ${(props) => props.theme.colors.gray};
  }
  .very-old {
    color: ${(props) => props.theme.colors.lightGray};
  }

  .demo,
  .admin {
    color: ${(props) => props.theme.colors.gray};
  }

  .unpaid,
  .canceling,
  .canceled {
    color: ${(props) => props.theme.colors.red};
  }

  .subscriber {
    color: ${(props) => props.theme.colors.primary};
  }

  .trial {
    color: ${(props) => props.theme.colors.green};
  }

  @media (max-width: 660px) {
    td:last-child {
      display: none;
    }
  }
  @media (max-width: 540px) {
    td:nth-of-type(2) {
      display: none;
    }
    td:first-of-type {
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        max-width: 180px;
      }
    }
  }
  @media (max-width: 380px) {
    td:nth-of-type(3) {
      display: none;
    }
    td:first-of-type {
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        max-width: 240px;
      }
    }
  }
`
