import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  font-size: ${(props: any) => (props.buttonSize === 'small' ? '12px' : 'inherit')};
`
