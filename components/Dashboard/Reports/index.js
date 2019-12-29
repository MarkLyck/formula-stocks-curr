import React, { Component, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import searchIcon from 'static/icons/reports/ai_report_search.svg'
import errorIcon from 'static/icons/reports/ai_report_error.svg'
import LoadingError from 'ui-components/Error/LoadingError'
import Loader from 'ui-components/Loader'
import Report from 'components/Dashboard/Reports/Report'
import { SEARCH_REPORTS_QUERY } from 'common/queries'
import SearchBar from './SearchBar'
import ReportItem from './ReportItem'
import { ReportContainer, SectionHeader, IconContainer, ReportIcon, IconTitle, IconSubtitle } from './styles'
import ReportsOnboarding from './Onboarding'

const marketCaps = {
  ENTRY: 5000,
  PREMIUM: 2000,
  BUSINESS: 250,
  FUND: 0,
}

const getMarketCap = user => {
  if (user.type === 'admin') return 0
  return marketCaps[user.plan]
}

const Reports = ({ user }) => {
  const hasSeenReportIntro = user && user.intros && user.intros.reports
  const [searchTerm, setSearchTerm] = useState('')
  const [onboardingVisible, setOnboardingVisible] = useState(!hasSeenReportIntro)
  const [selectedReport, setSelectedReport] = useState(null)
  const { loading, error, data } = useQuery(SEARCH_REPORTS_QUERY, {
    variables: { searchTerm, marketCap: getMarketCap(user) },
  })

  if (!user || !user.plan) return <Loader />
  if (error || !data) return <LoadingError error={error} />

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value)
    setSelectedReport(null)
  }

  const renderOnboarding = () =>
    onboardingVisible && (
      <ReportsOnboarding
        onboardingVisible={onboardingVisible}
        setOnboardingVisible={setOnboardingVisible}
        user={user}
      />
    )

  const renderInitial = () => (
    <ReportContainer>
      {renderOnboarding()}
      <SectionHeader>Search</SectionHeader>
      <SearchBar searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <IconContainer>
        <ReportIcon
          dangerouslySetInnerHTML={{
            __html: searchIcon,
          }}
        />
        <IconTitle>AI Investment reports</IconTitle>
        <IconSubtitle>Entry has access to stocks with a market cap over $5 billion.</IconSubtitle>
      </IconContainer>
    </ReportContainer>
  )

  const renderReports = data => {
    const isSingleReport = (data.allStockReports && data.allStockReports.length === 1) || selectedReport

    if (isSingleReport) {
      const report = selectedReport ? selectedReport : data.allStockReports[0]
      return (
        <React.Fragment>
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
    <ReportContainer>
      {renderOnboarding()}
      <SectionHeader>Search</SectionHeader>
      <SearchBar searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} loading={loading} />
      {!loading && renderReports(data)}
    </ReportContainer>
  )
}

export default Reports
