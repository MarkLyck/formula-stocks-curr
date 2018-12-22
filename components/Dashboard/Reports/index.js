import React, { Component, useState } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import hasPermissions from 'common/utils/hasPermissions'
import searchIcon from 'static/icons/reports/ai_report_search.svg'
import errorIcon from 'static/icons/reports/ai_report_error.svg'
import LoadingError from 'ui-components/Error/LoadingError'
import PlanPermissionError from 'ui-components/Error/PlanPermissionError'
import Report from 'components/Dashboard/Reports/Report'
import SearchBar from './SearchBar'
import ReportItem from './ReportItem'
import { ReportContainer, SectionHeader, IconContainer, ReportIcon, IconTitle, IconSubtitle } from './styles'
import ReportsOnboarding from './Onboarding'

const SEARCH_REPORTS_QUERY = gql`
  query report($searchTerm: String) {
    allStockReports(filter: { OR: [{ ticker_starts_with: $searchTerm }, { name_starts_with: $searchTerm }] }) {
      date
      name
      stockPrice
      scores
      aiScore
      ticker
    }
  }
`

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [onboardingVisible, setOnboardingVisible] = useState(false)
  const [selectedReport, setSelectedReport] = useState(null)
  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value)
    setSelectedReport(null)
  }

  const renderInitial = loading => (
    <ReportContainer>
      {onboardingVisible && (
        <ReportsOnboarding onboardingVisible={onboardingVisible} setOnboardingVisible={setOnboardingVisible} />
      )}
      <SectionHeader>Search</SectionHeader>
      <SearchBar searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} loading={loading} />
      <IconContainer>
        <ReportIcon
          dangerouslySetInnerHTML={{
            __html: searchIcon,
          }}
        />
        <IconTitle>AI Investment reports</IconTitle>
        <IconSubtitle>Entry has access to > 1000 mio. market capitalization stocks</IconSubtitle>
      </IconContainer>
    </ReportContainer>
  )

  const renderReports = data => {
    const isSingleReport = (data.allStockReports && data.allStockReports.length === 1) || selectedReport

    if (isSingleReport) {
      const report = selectedReport ? selectedReport : data.allStockReports[0]
      return (
        <React.Fragment>
          {onboardingVisible && (
            <ReportsOnboarding onboardingVisible={onboardingVisible} setOnboardingVisible={setOnboardingVisible} />
          )}
          <Report report={report} setOnboardingVisible={setOnboardingVisible} />
        </React.Fragment>
      )
    } else if (data.allStockReports.length === 0) {
      return (
        <IconContainer>
          <ReportIcon
            dangerouslySetInnerHTML={{
              __html: errorIcon,
            }}
          />
          <IconTitle>No reports found</IconTitle>
          <IconSubtitle>We couldn't find any reports with that name</IconSubtitle>
        </IconContainer>
      )
    }

    return data.allStockReports.map(report => (
      <ReportItem key={report.ticker} report={report} setSelectedReport={setSelectedReport} />
    ))
  }

  if (!searchTerm.length) {
    return renderInitial()
  }

  return (
    <Query query={SEARCH_REPORTS_QUERY} variables={{ searchTerm }}>
      {({ loading, error, data }) => {
        if (error || !data) return <LoadingError error={error} />
        return (
          <ReportContainer>
            <SectionHeader>Search</SectionHeader>
            <SearchBar searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} loading={loading} />
            {!loading && renderReports(data)}
          </ReportContainer>
        )
      }}
    </Query>
  )
}

export default Reports
