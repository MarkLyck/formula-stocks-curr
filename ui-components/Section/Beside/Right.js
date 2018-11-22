import styled from 'react-emotion'
import { sideStyles } from './index'

const Right = styled.div`
  ${props => sideStyles(props)} margin-left: 24px;
`

export default Right
