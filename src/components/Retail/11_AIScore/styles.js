import styled from '@emotion/styled'
import { css } from '@emotion/core'
import mq from '~/common/utils/mq'
import Beside from '~/ui-components/Section/Beside'
import Left from '~/ui-components/Section/Beside/Left'
import Right from '~/ui-components/Section/Beside/Right'
import { boxStyle } from '~/ui-components/Box'

export const aiScoreStyle = css`
  width: 100%;
  @media (max-width: 994px) {
    margin: 16px 0;
  }
`

export const BesideContainer = styled.div`
  ${Beside} {
    align-items: center;
    ${(props) =>
      props.reverse
        ? mq.large(css`
            flex-direction: column-reverse;
            > div {
              width: 100%;
              max-width: 100%;
              margin: 0;
            }
          `)
        : mq.large(css`
            flex-direction: column;
            > div {
              width: 100%;
              max-width: 100%;
              margin: 0;
            }
          `)}
  }
  ${Left} {
    ${mq.large(
      css`
        margin: 0;
      `
    )}
  }
  ${Right} {
    ${mq.large(
      css`
        margin: 0;
      `
    )}
  }
`

export const HideSmall = styled.div`
  @media (max-width: 994px) {
    display: none;
  }
`

export const HideLarge = styled.div`
  margin-top: 16px;
  @media (min-width: 994px) {
    display: none;
  }
`
