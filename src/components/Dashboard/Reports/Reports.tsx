import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Highlighter from 'react-highlight-words'
import { Table, Input, Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'

import LoadingError from '~/ui-components/Error/LoadingError'
import Header from '~/ui-components/Header'
import { Tag, ButtonIcon } from '~/ui-components'
import Report from '~/components/Dashboard/Reports/Report'
import useWindowWidth from '~/common/hooks/useWindowWidth'
import { SEARCH_REPORTS_QUERY } from '~/common/queries'
import ReportsOnboarding from './Onboarding'

const AIScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 2000px;
  padding: 32px;

  .ant-table-pagination.ant-pagination {
    margin-right: 16px;
  }
`

const AIScoreBox = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid #ebedf5;
  border-radius: 4px;
  box-shadow: 0 4px 14px 0 rgba(111, 120, 156, 0.08);
  box-sizing: border-box;

  .ant-table-wrapper {
    width: 100%;
  }
`
const Score = styled.h3`
  color: ${(props: any) => props.theme.colors[props.valueColor]};
  text-align: center;
  font-weight: 500;
`

export const HowToUseThisButton = styled(Button)`
  color: ${(props: any) => props.theme.colors.primary};
  margin: 24px auto 0;

  &:hover {
    text-decoration: underline;
  }
`

const FilterIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const Reports = ({ user }: { user: any }) => {
  if (!user) return null

  const hasSeenReportIntro = user && user.intros && user.intros.reports
  const windowWidth = useWindowWidth()
  const [onboardingVisible, setOnboardingVisible] = useState(!hasSeenReportIntro)
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')

  const { loading: reportsLoading, error, data } = useQuery(SEARCH_REPORTS_QUERY, {
    variables: { searchTerm: '' },
  })

  if (error) return <LoadingError error={error} />

  const handleSearch = (selectedKeys: any[], confirm: () => void, dataIndex: any) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters: () => void) => {
    clearFilters()
    setSearchText('')
  }

  let searchInput: any

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e: any) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<ButtonIcon icon="search" buttonSize="small" />}
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
    filterIcon: (filtered: any) => (
      <FilterIconContainer>
        <FontAwesomeIcon icon="search" style={{ color: filtered ? '#1890ff' : undefined }} />
      </FilterIconContainer>
    ),
    onFilter: (value: any, record: any) => {
      return record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
    },
    onFilterDropdownVisibleChange: (visible?: boolean) => {
      if (visible) {
        setTimeout(() => searchInput.select())
      }
    },
    render: (text: any) => {
      const displayText = dataIndex === 'ticker' ? text.replace('_', '.') : text
      return searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={displayText.toString()}
        />
      ) : (
        displayText
      )
    },
  })

  const columns = [
    {
      title: 'Ticker',
      dataIndex: 'ticker',
      width: windowWidth > 600 ? 160 : 120,
      sorter: (a: any, b: any) => (a.ticker < b.ticker ? 1 : -1),
      ...getColumnSearchProps('ticker'),
      render: (text: any) => {
        return <Tag>{text.replace('_', '.')}</Tag>
      },
    },
    {
      title: 'AI Score',
      dataIndex: 'aIScore',
      defaultSortOrder: 'descend',
      width: windowWidth > 600 ? 120 : 110,
      sorter: (a: any, b: any) => a.aIScore - b.aIScore,
      render: (aiScore: number) => {
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

  if (windowWidth > 460) {
    columns.splice(1, 0, {
      title: 'Name',
      dataIndex: 'name',
      // @ts-ignore
      ellipsis: true,
      sorter: (a: any, b: any) => (a.ticker < b.ticker ? 1 : -1),
      ...getColumnSearchProps('name'),
    })
  }

  if (windowWidth > 720) {
    // @ts-ignore
    columns.splice(2, 0, {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a: any, b: any) => a.price - b.price,
      render: (price: any) => <p>{formatter.format(price)}</p>,
    })
  }

  if (windowWidth > 1000) {
    columns.splice(2, 0, {
      title: 'Sector',
      dataIndex: 'sector',
      // @ts-ignore
      ellipsis: true,
      sorter: (a: any, b: any) => (a.sector < b.sector ? 1 : -1),
      ...getColumnSearchProps('sector'),
    })
  }

  if (windowWidth > 1200) {
    columns.splice(3, 0, {
      title: 'Industry',
      dataIndex: 'industry',
      // @ts-ignore
      ellipsis: true,
      sorter: (a: any, b: any) => (a.industry < b.industry ? 1 : -1),
      ...getColumnSearchProps('industry'),
    })
  }

  const reports =
    data && data.aIReportsList
      ? data.aIReportsList.items.map((report: any) => ({
          key: report.ticker,
          ...report,
        }))
      : []

  return (
    <AIScoreContainer>
      {onboardingVisible && (
        <ReportsOnboarding
          // @ts-ignore
          onboardingVisible={onboardingVisible}
          setOnboardingVisible={setOnboardingVisible}
          user={user}
        />
      )}
      <Header>AI Reports</Header>
      <AIScoreBox>
        <Table
          // @ts-ignore
          columns={columns}
          dataSource={reports}
          loading={reportsLoading || !data || !user}
          ellipsis={true}
          expandRowByClick={true}
          expandedRowRender={(report) => <Report report={report} />}
          pagination={{ simple: windowWidth < 600 ? true : false }}
        />
      </AIScoreBox>
      <HowToUseThisButton onClick={() => setOnboardingVisible(true)}>How do I use this?</HowToUseThisButton>
    </AIScoreContainer>
  )
}

export default Reports
