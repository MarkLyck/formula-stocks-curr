import styled from '@emotion/styled'

export const PlanContainer = styled.div`
  padding: 16px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  background: ${props => (props.isSelected ? '#27a5f9' : 'white')};
  color: ${props => (props.isSelected ? 'white' : props.theme.colors.black)};

  .is-current {
    color: ${props => props.theme.colors.gray};
  }

  &:hover {
    color: ${props => (props.isSelected ? 'white' : props.theme.colors.primary)};
    cursor: pointer;
    .is-current {
      color: ${props => props.theme.colors.gray};
    }
  }
`

export const Price = styled.h3`
  text-align: right;
  font-size: 1.2rem;
  font-weight: 100;
`

export const Cycle = styled.p`
  text-align: right;
  font-size: 0.8rem;
  font-weight: 100;
`
