import React from 'react'
import styled from '@emotion/styled'
import Loader from 'static/icons/loader.svg'
import StatisticsLoader from '~/ui-components/statisticsContainer/StatisticsLoader'

const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`

const SuggestionsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Icon = styled.span`
  margin-top: 8px;
  svg {
    height: 80px;
  }
`

const SuggestionsLoader = ({ suggestionsType }) => (
  <Container>
    <StatisticsLoader />
    <SuggestionsContainer>
      <Icon
        dangerouslySetInnerHTML={{
          __html: Loader,
        }}
      />
      <p>Loading {suggestionsType}s...</p>
    </SuggestionsContainer>
  </Container>
)

export default SuggestionsLoader
