import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import withDashboard from 'components/Dashboard/withDashboard'
import { TableBody, TableCell, TableHead, TableRow } from 'ui-components/Table'
import LoadingError from 'ui-components/Error/LoadingError'
import GenericLoader from 'ui-components/Loader'
import User from './User'
import { UsersContainer } from './styles'
import { USERS_QUERY } from 'common/queries'

const UserList = ({ allUsers }) => {
  const { loading, error, data } = useQuery(USERS_QUERY)
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
        {data.usersList.items.map(user => (
          <User user={user} key={user.id} />
        ))}
      </TableBody>
      {/* <CreateUser /> */}
    </UsersContainer>
  )
}

export default UserList
