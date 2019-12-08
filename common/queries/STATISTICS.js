import { gql } from 'apollo-boost'

export const BACKTESTED_STATISTICS = gql`
  query BACKTESTED_STATISTICS($planName: String) {
    plan(planID: $planName) {
      statistics {
        cAGR
        averageGainPerPosition
        averageLossPerPosition
        averageNumberOfPositionsInPortfolio
        expectancyRatio
        formulasUsed
        gainToPainRatio
        iRRArithmeticMean
        iRRGeometricMean
        mARRatio
        maxDrawdown36Months
        maxDrawdown45Years
        positionsSoldWithLoss
        positionsSoldWithProfit
        rAROC
        rewardToRiskRatio
        roundtripTradesPerYear
        sharpeRatio
        sortinoRatio
        sterlingRatio
        totalReturn
        ulcerIndex
        valueAtRisk
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
