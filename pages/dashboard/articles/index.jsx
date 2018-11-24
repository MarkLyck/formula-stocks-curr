import React from 'react'
import withDashboard from 'components/Dashboard/withDashboard'
import ArticlesList from 'components/Articles'

const Articles = ({ location }) => <ArticlesList location={location} />

export default withDashboard(Articles)
