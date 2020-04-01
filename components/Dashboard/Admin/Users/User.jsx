import React from 'react'
import PropTypes from 'prop-types'
import { format, formatDistanceStrict, isAfter, subMonths } from 'date-fns'
import { TableCell, TableRow } from 'ui-components/Table'

const dateLastMonth = subMonths(new Date(), 1)
const date3MonthsAgo = subMonths(new Date(), 3)

const User = ({ user }) => {
  let dateClass = isAfter(user.lastSeen, date3MonthsAgo) ? 'old' : 'very-old'
  if (isAfter(user.lastSeen, dateLastMonth)) dateClass = 'new'

  return (
    <TableRow key={user.id} onClick={() => console.log(user)}>
      <TableCell>
        <p>{user.email}</p>
      </TableCell>
      <TableCell>
        <p>{format(new Date(user.createdAt), 'dd/MM/yy')}</p>
      </TableCell>
      <TableCell className={dateClass}>{formatDistanceStrict(new Date(), new Date(user.lastSeen))} ago</TableCell>
      <TableCell className={user.type}>{user.type}</TableCell>
    </TableRow>
  )
}

User.propTypes = {
  user: PropTypes.object,
}

export default User
