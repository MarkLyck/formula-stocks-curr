import styled from '@emotion/styled'

export const DashboardLayout = styled.div`
  display: flex;
  height: 100vh;
`
export const DashboardContent = styled.div`
  width: 100%;

  background: ${props => props.theme.colors.polar};
  ${'' /* overflow-y: scroll; */}
  -webkit-overflow-scrolling: touch;
  position: relative;
  @media (max-width: 850px) {
    margin-top: 0;
  }
`
