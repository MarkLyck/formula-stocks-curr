import styled from '@emotion/styled'

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  margin-bottom: 16px;

  ${props => props.css && props.css}
`

export const TextAreaStyled = styled.textarea`
  border: 1px solid #dedede;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 0.9rem;
  resize: none;
  padding: 16px;
  outline: none;
  width: 100%;
  height: 100%;

  &:hover {
    border-color: hsl(0, 0%, 70%);
    &:focus {
      box-shadow: 0 0 0 1px ${props => props.theme.colors.primary};
    }
  }

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`
