import { useEffect } from 'react'
import { isClient } from 'common/utils/featureTests'
import theme from 'common/theme'

const createChart = settings => {
  const { zoomOutButtonMarginRight = 0 } = settings
  if (!isClient) return () => {}
  const { data, id } = settings

  const { am4core, am4charts } = window

  let chart = am4core.create(id, am4charts.XYChart)
  chart.data = data
  chart.colors.step = 2
  chart.maskBullets = false
  chart.paddingBottom = -10

  // AXISs
  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
  categoryAxis.dataFields.category = 'aiScoreMax'
  // categoryAxis.title.text = 'AI score'
  categoryAxis.renderer.grid.template.location = 0
  categoryAxis.renderer.minGridDistance = 25
  categoryAxis.renderer.grid.template.disabled = true
  categoryAxis.renderer.fullWidthTooltip = true
  categoryAxis.renderer.labels.template.fill = am4core.color(theme.colors.black)
  categoryAxis.renderer.labels.template.fontSize = 14
  categoryAxis.adapter.add('getTooltipText', text => `${text - 10} to ${text}`)

  // categoryAxis tooltip
  const categoryAxisTooltip = categoryAxis.tooltip
  categoryAxisTooltip.background.fill = am4core.color(theme.colors.black)
  categoryAxisTooltip.background.cornerRadius = 4
  categoryAxisTooltip.fillOpacity = 0.8
  categoryAxisTooltip.fontFamily = 'Rubik'

  var winrateAxis = chart.yAxes.push(new am4charts.ValueAxis())
  winrateAxis.title.text = 'Win rate'
  winrateAxis.renderer.grid.template.disabled = true
  winrateAxis.renderer.labels.template.fill = am4core.color(theme.colors.black)
  winrateAxis.renderer.labels.template.adapter.add('text', text => `${text}%`)
  winrateAxis.renderer.labels.template.fontSize = 14
  winrateAxis.renderer.opposite = true
  winrateAxis.cursorTooltipEnabled = false

  var irrAxis = chart.yAxes.push(new am4charts.ValueAxis())
  irrAxis.title.text = 'IRR'
  irrAxis.cursorTooltipEnabled = false
  irrAxis.renderer.labels.template.fill = am4core.color(theme.colors.black)
  irrAxis.renderer.labels.template.adapter.add('text', text => `${text}%`)
  irrAxis.renderer.labels.template.fontSize = 14

  // Create series
  var irrSeries = chart.series.push(new am4charts.ColumnSeries())
  irrSeries.dataFields.valueY = 'irr'
  irrSeries.dataFields.categoryX = 'aiScoreMax'
  irrSeries.yAxis = irrAxis
  irrSeries.name = 'IRR'
  irrSeries.tooltip.getFillFromObject = false
  irrSeries.tooltip.background.fill = am4core.color('#fff')
  irrSeries.tooltip.background.stroke = am4core.color(theme.colors.black)
  irrSeries.tooltip.background.strokeWidth = 2
  irrSeries.tooltip.label.fill = am4core.color(theme.colors.black)
  irrSeries.tooltipText = 'IRR: [bold]{irr}%[/]'

  var columnTemplate = irrSeries.columns.template
  columnTemplate.strokeWidth = 0
  columnTemplate.strokeOpacity = 1
  columnTemplate.fillOpacity = 0.8

  columnTemplate.adapter.add('fill', (_, target) => {
    const value = Number(target.dataItem.categoryX)
    const isNegativeSection = value < -10
    const isPositiveSection = value > 1

    let color = theme.colors.polar
    if (isNegativeSection) color = theme.colors.red
    else if (isPositiveSection) color = theme.colors.green

    return color
  })
  columnTemplate.adapter.add('fillOpacity', (_, target) => {
    if (target.dataItem) {
      const value = Number(target.dataItem.categoryX)
      let opacity = 1
      opacity = Math.abs(value) / 100
      if (value === 0 || value === -10) return 1
      return opacity
    }

    return 1
  })

  var winrateSeries = chart.series.push(new am4charts.LineSeries())
  winrateSeries.dataFields.valueY = 'winrate'
  winrateSeries.dataFields.categoryX = 'aiScoreMax'
  winrateSeries.yAxis = winrateAxis
  winrateSeries.name = 'Win rate'
  winrateSeries.stroke = theme.colors.black
  winrateSeries.strokeWidth = 2
  winrateSeries.tooltip.getFillFromObject = false
  winrateSeries.tooltip.background.fill = am4core.color('#fff')
  winrateSeries.tooltip.background.stroke = am4core.color(theme.colors.black)
  winrateSeries.tooltip.background.strokeWidth = 2
  winrateSeries.tooltip.label.fill = am4core.color(theme.colors.black)
  winrateSeries.tooltipText = 'Win rate: [bold]{valueY}%[/]'

  var winrateBullet = winrateSeries.bullets.push(new am4charts.Bullet())
  var winrateRectangle = winrateBullet.createChild(am4core.Rectangle)
  winrateBullet.horizontalCenter = 'middle'
  winrateBullet.verticalCenter = 'middle'
  winrateBullet.fill = theme.colors.black
  winrateBullet.width = 7
  winrateBullet.height = 7
  winrateRectangle.width = 7
  winrateRectangle.height = 7

  // Add cursor
  chart.cursor = new am4charts.XYCursor()
  chart.cursor.fullWidthLineX = true
  chart.cursor.xAxis = categoryAxis
  chart.cursor.lineX.strokeOpacity = 0
  chart.cursor.lineX.fill = am4core.color('#000')
  chart.cursor.lineX.fillOpacity = 0.05

  // Zoomout Button
  chart.zoomOutButton.marginTop = 8
  chart.zoomOutButton.marginRight = zoomOutButtonMarginRight
  chart.zoomOutButton.background.fill = am4core.color(theme.colors.black)
  chart.zoomOutButton.background.states.getKey('hover').properties.fill = am4core.color(theme.colors.darkGray)
  chart.zoomOutButton.background.states.getKey('down').properties.fill = am4core.color('#000')

  return chart
}

const BarChart = ({ ...settings }) => {
  let chart
  useEffect(() => {
    const chart = createChart(settings)
    return () => (chart ? chart.dispose() : null)
  })

  return <div id={settings.id} style={{ ...settings.style }} />
}

export default BarChart
