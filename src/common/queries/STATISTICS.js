import { gql } from 'apollo-boost'

// updated
export const BACKTESTED_STATISTICS = gql`
  query BACKTESTED_STATISTICS($planName: String) {
    plan(planID: $planName) {
      statistics {
        cAGR
        averageGainPerPosition
        averageLossPerPosition
        averageNumberOfPositionsInPortfolio
        formulasUsed
        gainToPainRatio
        iRRArithmeticMean
        iRRGeometricMean
        maxDrawdown36Months
        maxDrawdown45Years
        positionsSoldWithLoss
        positionsSoldWithProfit
        roundtripTradesPerYear
        sortinoRatio
        totalReturn
        winLossRatio
      }
    }
  }
`

export const SIMPLE_BACKTESTED_STATISTICS = gql`
  query SIMPLE_BACKTESTED_STATISTICS($planName: String) {
    plan(planID: $planName) {
      statistics {
        cAGR
        winLossRatio
      }
    }
  }
`

export const LAUNCH_STATISTICS = gql`
  query LAUNCH_STATISTICS($planName: String) {
    plan(planID: $planName) {
      statisticsSinceLaunch {
        totalReturn
        positionsSoldWithProfit
        positionsSoldWithLoss
        winLossRatio
        cAGR
        iRRGeometricMean
      }
    }
  }
`
