import { useEffect } from 'react'
import { isBrowser } from '~/common/utils/featureTests'
import theme from '~/common/theme'

const createChart = (settings) => {
  if (!isBrowser) return () => {}
  const { id, data, labelText, valueField = 'value', categoryField = 'category', colors = [], tooltipText } = settings

  const { am4core, am4charts } = window

  let chart = am4core.create(id, am4charts.PieChart)
  chart.data = data
  chart.innerRadius = am4core.percent(40)
  chart.radius = am4core.percent(80)

  var label = chart.seriesContainer.createChild(am4core.Label)
  label.text = labelText
  label.horizontalCenter = 'middle'
  label.verticalCenter = 'middle'
  label.fontSize = 16

  var pieSeries = chart.series.push(new am4charts.PieSeries())
  pieSeries.innerRadius = am4core.percent(50)
  pieSeries.dataFields.value = valueField
  pieSeries.dataFields.category = categoryField
  pieSeries.ticks.template.disabled = true
  pieSeries.labels.template.disabled = true
  pieSeries.colors.list = colors.map((color) => am4core.color(color))
  pieSeries.slices.template.tooltipText = tooltipText
  pieSeries.tooltip.getFillFromObject = false
  pieSeries.tooltip.background.fill = am4core.color(theme.colors.white)
  pieSeries.tooltip.background.adapter.add('stroke', (stroke, target) => target.dataItem.slice.stroke)
  pieSeries.tooltip.background.strokeWidth = 2
  pieSeries.tooltip.label.fill = am4core.color(theme.colors.black)

  return chart
}

const PieChart = ({ className, ...settings }) => {
  let chart
  useEffect(() => {
    const chart = createChart(settings)
    return () => (chart ? chart.dispose() : null)
  })

  return <div id={settings.id} className={className} style={{ width: '100%' }} />
}

export default PieChart
