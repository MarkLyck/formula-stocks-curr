import styled from 'react-emotion'
import { sideStyles } from './index'

const Left = styled.div`
  ${props => sideStyles(props)} margin-right: 24px;
`

export default Left
