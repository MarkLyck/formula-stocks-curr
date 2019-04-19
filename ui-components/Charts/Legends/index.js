import styled from '@emotion/styled'

export const Legend = styled.div`
  text-transform: capitalize;
  position: relative;
  margin: 0;
  padding: 0;
  margin: 0 40px 8px 0;
  font-size: 0.75rem;
  margin-right: ${props => `${props.width}px` || 0};
  &:before {
    content: '';
    position: absolute;
    left: -28px;
    top: 0;
    background: ${props => props.color};
    height: 20px;
    width: 20px;
    border-radius: 4px;
  }
`

export const Legends = styled.div`
  position: absolute;
  left: ${props => props.left || 100}px;
  top: ${props => props.top || 24}px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  z-index: 9;
  display: flex;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
`

export default null
