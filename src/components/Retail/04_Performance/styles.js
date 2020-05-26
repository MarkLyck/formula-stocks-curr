import styled from '@emotion/styled'
import { boxStyle } from '~/ui-components/Box'

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  height: 480px;
  br {
    display: none;
  }
  .portfolio-legends {
    z-index: 10;
    top: 24px;
  }
  #single-launch-performace-graph {
    overflow: hidden;
    ${boxStyle};
    height: 100%;
  }
  .chart-balloon {
    display: flex;
    flex-direction: column;
    align-items: center;
    .plan-name {
      color: ${(props) => props.theme.colors.primary};
      font-size: 0.8rem;
      font-weight: 600;
    }
    .market-name {
      color: ${(props) => props.theme.colors.black};
    }
    .balloon-value {
      font-size: 1rem;
      text-align: center;
    }
  }
`

export const ChartLoaderContainer = styled.div`
  ${boxStyle};
  height: 480px;
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
`
