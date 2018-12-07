import { useEffect } from 'react'
import { isClient } from 'common/utils/featureTests'
import theme from 'common/theme'

const createChart = settings => {
  const {
    id = 'lineChartDiv',
    insideX = false,
    insideY = false,
    strictMinMax = false,
    min,
    max,
    extraMax = 0,
    series,
    data,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    labelYOffset = 0,
    valuePrefix = '',
    valueSuffix = '',
    gridOpacity = 1,
  } = settings
  const { am4core, am4charts } = window

  // chart
  let chart = am4core.create(settings.id, am4charts.XYChart)
  chart.data = data
  chart.paddingTop = paddingTop
  chart.paddingRight = paddingRight
  chart.paddingBottom = paddingBottom
  chart.paddingLeft = paddingLeft

  // dateAxis
  const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
  dateAxis.renderer.inside = insideX
  dateAxis.tooltipDateFormat = 'MMM, yyyy'
  dateAxis.renderer.grid.template.strokeOpacity = gridOpacity
  dateAxis.renderer.line.strokeOpacity = 0
  dateAxis.renderer.labels.template.fill = am4core.color(theme.colors.white)
  dateAxis.renderer.labels.template.fontSize = 12
  dateAxis.renderer.labels.template.fontWeight = 600
  // dateAxis tooltip
  const dateAxisTooltip = dateAxis.tooltip
  dateAxisTooltip.background.fill = am4core.color(theme.colors.black)
  dateAxisTooltip.background.pointerLength = 0
  dateAxisTooltip.background.cornerRadius = 4
  dateAxisTooltip.fillOpacity = 0.8
  dateAxisTooltip.fontFamily = 'Rubik'
  dateAxisTooltip.fontSize = 12

  // valueAxis
  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
  valueAxis.min = min
  valueAxis.max = max + extraMax
  valueAxis.renderer.inside = insideY
  valueAxis.strictMinMax = strictMinMax
  valueAxis.renderer.labels.template.adapter.add('text', text => valuePrefix + text + valueSuffix)
  valueAxis.renderer.grid.template.strokeOpacity = gridOpacity
  valueAxis.renderer.baseGrid.disabled = true // disables zero-line
  valueAxis.renderer.labels.template.fill = am4core.color(theme.colors.black)
  valueAxis.renderer.labels.template.fontSize = 12
  valueAxis.renderer.labels.template.fontWeight = 400
  valueAxis.renderer.labels.template.paddingLeft = labelYOffset
  valueAxis.tooltip.disabled = true

  // Series
  settings.series.forEach(serie => {
    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = serie.valueY || 'value'
    series.dataFields.dateX = serie.dateX || 'date'
    series.stroke = serie.color
    series.fill = serie.color
    series.strokeWidth = serie.strokeWidth || 2
    series.tooltip.background.fill = am4core.color('#FFFFFF')
    series.tooltip.background.stroke = am4core.color(theme.colors[serie.color])
    series.tooltip.background.strokeWidth = 2
    series.tooltipText = serie.tooltipText
    series.tooltipHTML = serie.tooltipHTML
    series.fillOpacity = serie.fillOpacity || 0
    console.log(series.tooltip)
  })

  // cursor
  chart.cursor = new am4charts.XYCursor()
  chart.cursor.lineX.strokeDasharray = ''
  chart.cursor.lineX.strokeOpacity = 0.2
  chart.cursor.lineY.strokeDasharray = ''
  chart.cursor.lineY.strokeOpacity = 0.2

  chart.zoomOutButton.marginTop = 8
  chart.zoomOutButton.marginRight = 16
  chart.zoomOutButton.background.fill = am4core.color(theme.colors.black)

  return chart
}

const LineChart = ({ ...settings }) => {
  let chart
  useEffect(() => {
    const chart = createChart(settings)
    return () => (chart ? chart.dispose() : null)
  })

  return <div id={settings.id} style={{ width: '100%' }} />
}

export default LineChart
