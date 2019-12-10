import { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import OnboardingModal from 'ui-components/Modal/Onboarding'
import { OnboardingHeader, OnboardingText } from 'ui-components/Modal/Onboarding/styles'
import Welcome from './0_Welcome'
import BuildingPortfolio from './1_BuildingPortfolio'
import ModelPortfolio from './2_ModelPortfolio'
import Suggestions from './3_Suggestions'
import AIReports from './4_AIReports'
import Memberships from './5_Memberships'
import { AIReportsTextWrapper, AIScoreWrapper, AIScoreTextWrapper, IconBackground, Bold } from './styles'

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $intros: JSON) {
    updateUser(id: $id, intros: $intros) {
      id
      intros
    }
  }
`

const pagePositions = ['center', 'center', 'portfolio', 'suggestions', 'AIReports', 'plans']

const Onboarding = ({ onboardingVisible, setOnboardingVisible, user }) => {
  const [pageIndex, setPageIndex] = useState(0)
  const [position, setPosition] = useState(pagePositions[0])

  const updatePageIndex = index => {
    setPosition(pagePositions[index])
    setPageIndex(index)
  }

  const onRequestClose = updateUser => {
    if (user.intros.formulaStocks !== true) {
      user.intros.formulaStocks = true
      updateUser({
        variables: {
          id: user.id,
          intros: user.intros,
        },
      })
    }
    setOnboardingVisible(false)
  }

  return (
    <Mutation mutation={UPDATE_USER}>
      {(updateUser, { data }) => (
        <OnboardingModal
          isOpen={onboardingVisible}
          onRequestClose={onRequestClose.bind(null, updateUser)}
          activePageIndex={pageIndex}
          setPageIndex={updatePageIndex}
          position={position}
          pages={[
            <Welcome />,
            <BuildingPortfolio />,
            <ModelPortfolio />,
            <Suggestions />,
            <AIReports />,
            <Memberships />,
          ]}
          section="AIReports"
        />
      )}
    </Mutation>
  )
}

export default Onboarding
