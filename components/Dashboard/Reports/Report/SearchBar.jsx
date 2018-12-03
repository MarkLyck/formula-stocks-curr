import { useState } from 'react'
import styled from 'react-emotion'
import Box from 'ui-components/Box'

const SearchContainer = styled(Box)`
  height: 40px;
`

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0 32px;
`

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search by ticker..." />
    </SearchContainer>
  )
}

export default SearchBar
