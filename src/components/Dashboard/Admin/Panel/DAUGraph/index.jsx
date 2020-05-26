import React from 'react'
import PropTypes from 'prop-types'
import countBy from 'lodash.countby'
import get from 'lodash.get'
import { format, subDays } from 'date-fns'
import LineGraph from '~/ui-components/Charts/LineGraph'
import theme from '~/common/theme'
import { GraphContainer, Container } from './styles'

const createChartData = (visitors, users) => {
  // gets signup dates from all users
  const signUpDays = countBy(users, (user) => format(user.createdAt, 'yyyy-MM-dd'))

  const cancelDays = countBy(users, (user) =>
    format(new Date(get(user, 'stripeSubscription.canceled_at') * 1000), 'yyyy-MM-dd')
  )

  const visitorData = countBy(visitors, (visitor) => format(visitor.createdAt, 'yyyy-MM-dd'))

  const days = []
  for (let i = 0; i <= 30; i++) {
    days.push(format(subDays(new Date(), 30 - i), 'yyyy-MM-dd'))
  }

  return days.map((date) => ({
    date,
    visitors: visitorData[date] || 0,
    signUps: signUpDays[date] || 0,
    cancelations: cancelDays[date] || 0,
  }))
}

const DAUGraph = ({ visitors, users, amCharts4Loaded }) => {
  if (!amCharts4Loaded) {
    return (
      <div id="result-chart" className="loading">
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
      </div>
    )
  }
  const chartData = createChartData(visitors, users)

  const series = [
    {
      valueY: 'visitors',
      color: theme.colors.primary,
      fillOpacity: 0.4,
      tension: 0.75,
      tooltipText: `new visitors: [bold]{visitors}[/]`,
    },
    {
      valueY: 'signUps',
      color: theme.colors.secondary,
      fillOpacity: 0.6,
      tension: 0.75,
      tooltipText: `Signups: [bold]{signUps}[/]`,
    },
    {
      valueY: 'cancelations',
      color: theme.colors.error,
      fillOpacity: 0.6,
      tension: 0.75,
      tooltipText: `cancelations: [bold]{cancelations}[/]`,
    },
  ]

  return (
    <Container>
      <GraphContainer>
        <LineGraph
          id="dau-graph"
          series={series}
          data={chartData}
          gridOpacity={0}
          insideX
          insideY
          labelYOffset={36}
          paddingLeft={-24}
          paddingRight={-25}
          paddingBottom={-2}
          categoryBoldLabels={true}
          categoryAxisColor="#FFF"
          tooltipDateFormat="d MMM"
          zoomOutButtonMarginRight={32}
        />
      </GraphContainer>
    </Container>
  )
}

DAUGraph.propTypes = {
  visitors: PropTypes.array,
  users: PropTypes.array,
}

export default DAUGraph
