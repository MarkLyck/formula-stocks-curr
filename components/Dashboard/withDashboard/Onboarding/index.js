import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import OnboardingModal from 'ui-components/Modal/Onboarding'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import Welcome from './0_Welcome'
import BuildingPortfolio from './1_BuildingPortfolio'
import ModelPortfolio from './2_ModelPortfolio'
import Suggestions from './3_Suggestions'
import AIReports from './4_AIReports'
import Memberships from './5_Memberships'
import { AIReportsTextWrapper, AIScoreWrapper, AIScoreTextWrapper, IconBackground, Bold } from './styles'
import { SET_INTROS } from 'common/queries'

const pagePositions = ['center', 'center', 'portfolio', 'suggestions', 'AIReports', 'plans']

const Onboarding = ({ onboardingVisible, setOnboardingVisible, user }) => {
  const [setIntros, { data }] = useMutation(SET_INTROS)
  const [pageIndex, setPageIndex] = useState(0)
  const [position, setPosition] = useState(pagePositions[0])

  const updatePageIndex = index => {
    setPosition(pagePositions[index])
    setPageIndex(index)
  }

  const onRequestClose = updateUser => {
    if (user.intros.formulaStocks !== true) {
      user.intros.formulaStocks = true
      setIntros({
        variables: {
          id: user.id,
          intros: user.intros,
        },
      })
    }
    setOnboardingVisible(false)
  }

  return (
    <OnboardingModal
      isOpen={onboardingVisible}
      onRequestClose={onRequestClose}
      activePageIndex={pageIndex}
      setPageIndex={updatePageIndex}
      position={position}
      pages={[<Welcome />, <BuildingPortfolio />, <ModelPortfolio />, <Suggestions />, <AIReports />, <Memberships />]}
      section="AIReports"
    />
  )
}

export default Onboarding
