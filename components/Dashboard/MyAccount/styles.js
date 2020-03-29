import styled from '@emotion/styled'
import Box from 'ui-components/Box'

export const MyAccountContainer = styled(Box)`
  flex-direction: column;
  margin: 32px auto;
  padding: 24px;
  max-width: 400px;

  .user-info {
    font-weight: 400;
    margin: 8px 0;
    font-size: 1.1rem;
  }
  .user-plan {
    text-transform: capitalize;
  }
`

export const Title = styled.h3`
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.gray};
`
