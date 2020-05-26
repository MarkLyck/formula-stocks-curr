import styled from '@emotion/styled'
import { boxStyle } from '~/ui-components/Box'

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
  max-height: 800px;
  br {
    display: none;
  }
  #single-long-term-performance-graph {
    overflow: hidden;
    ${boxStyle};
    height: 100%;
  }
`

export const ChartLoaderContainer = styled.div`
  ${boxStyle};
  width: 100%;
  height: 65vh;
  max-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`
