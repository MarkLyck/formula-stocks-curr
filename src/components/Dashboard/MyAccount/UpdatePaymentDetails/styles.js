import styled from '@emotion/styled'
import Box, { boxStyle } from '~/ui-components/Box'

export const UpdateCardDetailsContainer = styled.div`
  margin: 32px auto;
  max-width: 400px;
  box-sizing: border-box;

  .title {
    padding-left: 16px;
    font-size: 1.2rem;
    font-weight: 300;
  }
`

export const UpdateDetailsPaper = styled(Box)`
  flex-direction: column;
  padding: 16px 0;
`

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;

  svg {
    color: #737373;
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }

  .stripe-input {
    padding-left: 40px;
    &:hover {
      border-color: hsl(0, 0%, 70%);
      cursor: text;
    }
  }

  &:nth-of-type(2) {
    margin-left: 16px;
  }
`
