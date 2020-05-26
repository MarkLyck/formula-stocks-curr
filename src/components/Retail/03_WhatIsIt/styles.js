import styled from '@emotion/styled'
import { css } from '@emotion/core'
import mq from '~/common/utils/mq'
import Beside from '~/ui-components/Section/Beside'
import { boxStyle } from '~/ui-components/Box'

export const BesideContainer = styled.div`
  ${Beside} {
    align-items: center;
    ${mq.large(css`
      flex-direction: column;
      > div {
        width: 100%;
        max-width: 100%;
        margin: 0;
      }
    `)};
  }
`

export const Screenshot = styled.img`
  ${boxStyle};
  height: auto;
  width: 100%;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 992px) {
    margin-bottom: 32px;
  }
`
