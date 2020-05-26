import styled from '@emotion/styled'

export const DashboardLayout = styled.div`
  display: flex;
  height: 100vh;
`
export const DashboardContent = styled.div`
  width: 100%;
  padding-top: 72px;
  background: ${props => props.theme.colors.polar};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;

  @media (max-width: 850px) {
    padding-top: 0;
  }
`
