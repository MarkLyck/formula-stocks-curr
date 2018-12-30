import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableBody, TableHeadCell, TableHead, TableRow } from 'ui-components/Table'
import Visitor from './Visitor'
import { tableStyle } from './styles'

const VisitorList = ({ visitors }) => (
  <Table css={tableStyle}>
    <TableHead>
      <TableRow>
        <TableHeadCell>Location</TableHeadCell>
        <TableHeadCell>referrer</TableHeadCell>
        <TableHeadCell>Visited</TableHeadCell>
        <TableHeadCell>Device</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {visitors.map(visitor => (
        <Visitor visitor={visitor} key={visitor.id} />
      ))}
    </TableBody>
  </Table>
)

export default VisitorList
