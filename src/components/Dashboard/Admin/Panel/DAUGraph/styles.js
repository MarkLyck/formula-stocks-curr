import styled from '@emotion/styled'
import Box from '~/ui-components/Box'

export const Container = styled(Box)`
  margin: 8px 16px 16px;
`

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  #dau-graph {
    height: 400px;
  }
  br {
    display: none;
  }
  .chart-balloon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .balloon-value {
      font-size: 1.25rem;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    #dau-graph {
      height: 250px;
    }
  }
`
