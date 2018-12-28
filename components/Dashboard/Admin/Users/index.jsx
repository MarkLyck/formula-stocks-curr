import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withDashboard from 'components/Dashboard/withDashboard'
import { TableBody, TableCell, TableHead, TableRow } from 'ui-components/Table'
import LoadingError from 'ui-components/Error/LoadingError'
import GenericLoader from 'ui-components/Loader'
import User from './User'
// import CreateUser from './CreateUser'
import { UsersContainer } from './styles'

const USERS_QUERY = gql`
  query {
    allUsers {
      id
      createdAt
      lastSeen
      name
      email
      type
    }
  }
`

const UserList = ({ allUsers }) => (
  <Query query={USERS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <GenericLoader />
      if (error) return <LoadingError error={error} />

      return (
        <UsersContainer>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Signed up</TableCell>
              <TableCell>Last seen</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.allUsers.map(user => (
              <User user={user} key={user.id} />
            ))}
          </TableBody>
          {/* <CreateUser /> */}
        </UsersContainer>
      )
    }}
  </Query>
)

UserList.propTypes = {
  allUsers: PropTypes.array,
}

export default withDashboard(UserList)
