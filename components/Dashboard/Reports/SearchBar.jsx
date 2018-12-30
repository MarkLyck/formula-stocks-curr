import styled from '@emotion/styled'
import Box from 'ui-components/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SectionHeader } from './Report/styles'

const SearchContainer = styled(Box)`
  position: relative;
  height: 40px;
`

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  color: ${props => props.theme.colors.gray};
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`

const LoadingSpinner = styled(FontAwesomeIcon)`
  position: absolute;
  color: ${props => props.theme.colors.primary};
  top: 8px;
  right: 8px;
  font-size: 1.5rem;
`

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0 40px;
`

const SearchBar = ({ searchTerm, handleSearchTermChange, loading }) => {
  return (
    <SearchContainer>
      <Icon icon="search" />
      <SearchInput
        type="text"
        placeholder="Search by ticker or name..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        autoFocus
      />
      {loading && <LoadingSpinner icon="spinner-third" spin />}
    </SearchContainer>
  )
}

export default SearchBar
