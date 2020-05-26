import styled from '@emotion/styled'
import { darken } from 'polished'
import Box, { boxStyle } from '~/ui-components/Box'

export const ChangePlanContainer = styled.div`
  margin: 32px auto;
  max-width: 400px;
  box-sizing: border-box;

  .title {
    padding-left: 16px;
    font-size: 1.2rem;
    font-weight: 300;
  }
`

export const ChangePlanPaper = styled(Box)`
  flex-direction: column;
  margin-top: 16px;
`

export const LargeFlatButton = styled.button`
  ${boxStyle};
  width: 100%;
  height: 72px;
  padding: 16px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: ${(props) => props.theme.colors[props.color]};
  display: flex;
  justify-content: ${(props) => props.align || 'left'};

  color: white;
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight || '500'};
  border: none;

  &:hover {
    background: ${(props) => darken(0.05, props.theme.colors[props.color])};
  }
`

export const modalContentStyles = {
  content: {
    top: '50%',
    right: 'unset',
    bottom: 'unset',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    background: 'none',
    border: 'none',
    borderRadius: '0',
    margin: 'auto',
    width: '400px',
  },
}

export const ModalContainer = styled.div`
  ${boxStyle};
  outline: none;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 1.3rem;
    font-weight: 300;
    margin: 28px;
  }

  .bold {
    font-weight: 600;
  }

  .beside {
    width: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  button {
    margin-top: 28px;
  }
`
