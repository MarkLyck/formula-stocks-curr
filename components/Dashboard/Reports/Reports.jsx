import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Highlighter from 'react-highlight-words'
import { Table, Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

import LoadingError from 'ui-components/Error/LoadingError'
import Header from 'ui-components/Header'
import Loader from 'ui-components/Loader'
import Report from 'components/Dashboard/Reports/Report'
import useWindowWidth from 'common/hooks/useWindowWidth'
import { SEARCH_REPORTS_QUERY } from 'common/queries'
import ReportsOnboarding from './Onboarding'

const AIScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 2000px;
  padding: 32px;

  @media (max-width: 600px) {
    padding: 16px;
  }
`

const AIScoreBox = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid #ebedf5;
  border-radius: 4px;
  box-shadow: 0 4px 14px 0 rgba(111, 120, 156, 0.08);
  box-sizing: border-box;
`

const StyledTable = styled(Table)`
  width: 100%;

  .ant-table-pagination {
    margin-right: 16px;
  }

  @media (max-width: 600px) {
    .ant-table-expand-icon-th {
      width: 0;
    }
    .ant-table-row-expand-icon-cell {
      visibility: hidden;
    }
  }
`

const Score = styled.h3`
  color: ${props => props.theme.colors[props.valueColor]};
  text-align: center;
  font-weight: 500;
`

export const HowToUseThisButton = styled(Button)`
  color: ${props => props.theme.colors.primary};
  margin: 24px auto 0;

  &:hover {
    text-decoration: underline;
  }
`

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const Reports = ({ user }) => {
  if (!user || !user.intros) return null

  const hasSeenReportIntro = user && user.intros && user.intros.reports
  const windowWidth = useWindowWidth()
  const [onboardingVisible, setOnboardingVisible] = useState(!hasSeenReportIntro)
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const { loading: reportsLoading, error, data } = useQuery(SEARCH_REPORTS_QUERY, {
    variables: { searchTerm },
  })

  if (error) return <LoadingError error={error} />

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = clearFilters => {
    clearFilters()
    setSearchText('')
  }

  let searchInput

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select())
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  })

  const columns = [
    {
      title: 'Ticker',
      dataIndex: 'ticker',
      width: windowWidth > 600 ? 160 : 120,
      sorter: (a, b) => (a.ticker < b.ticker ? 1 : -1),
      ...getColumnSearchProps('ticker'),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      ellipsis: true,
      sorter: (a, b) => (a.ticker < b.ticker ? 1 : -1),
      ...getColumnSearchProps('name'),
    },
    {
      title: 'AI Score',
      dataIndex: 'aIScore',
      defaultSortOrder: 'descend',
      width: windowWidth > 600 ? 120 : 110,
      sorter: (a, b) => a.aIScore - b.aIScore,
      render: aiScore => {
        const humanReadableAIScore = `${aiScore > 0 ? '+' : ''}${(aiScore * 100).toFixed(2)}`
        let valueColor = 'black'
        if (aiScore > 0) {
          valueColor = 'green'
        } else if (aiScore < 0) {
          valueColor = 'red'
        }

        return <Score valueColor={valueColor}>{humanReadableAIScore}</Score>
      },
    },
  ]

  if (windowWidth > 720) {
    columns.splice(2, 0, {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      render: price => <p>{formatter.format(price)}</p>,
    })
  }

  const reports =
    data && data.aIReportsList
      ? data.aIReportsList.items.map(report => ({
          key: report.ticker,
          ...report,
        }))
      : []

  return (
    <AIScoreContainer>
      {onboardingVisible && (
        <ReportsOnboarding
          onboardingVisible={onboardingVisible}
          setOnboardingVisible={setOnboardingVisible}
          user={user}
        />
      )}
      <Header>AI Reports</Header>
      <AIScoreBox>
        <StyledTable
          columns={columns}
          dataSource={reports}
          loading={reportsLoading || !data || !user || !user.plan}
          ellipsis={true}
          expandRowByClick={true}
          expandedRowRender={report => <Report report={report} />}
        />
      </AIScoreBox>
      <HowToUseThisButton onClick={() => setOnboardingVisible(true)}>How do I use this?</HowToUseThisButton>
    </AIScoreContainer>
  )
}

export default Reports
