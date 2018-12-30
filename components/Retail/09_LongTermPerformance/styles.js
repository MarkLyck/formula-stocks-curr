import styled from '@emotion/styled'
import { boxStyle } from 'ui-components/Box'

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
  max-height: 800px;
  br {
    display: none;
  }
  .longterm-legends {
    z-index: 10;
  }
  #single-long-term-performance-graph {
    overflow: hidden;
    ${boxStyle};
    height: 100%;
  }
`
