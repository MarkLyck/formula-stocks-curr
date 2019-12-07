import { useEffect } from 'react'
import { isBrowser } from 'common/utils/featureTests'
import theme from 'common/theme'

const chartData = [
  { aiScoreMin: -100, aiScoreMax: -90, irr: -9.13, winrate: 48 },
  { aiScoreMin: -90, aiScoreMax: -80, irr: -6.1, winrate: 49 },
  { aiScoreMin: -80, aiScoreMax: -70, irr: -2.57, winrate: 52 },
  { aiScoreMin: -70, aiScoreMax: -60, irr: -1.55, winrate: 53 },
  { aiScoreMin: -60, aiScoreMax: -50, irr: 0.5, winrate: 54 },
  { aiScoreMin: -50, aiScoreMax: -40, irr: 2.12, winrate: 56 },
  { aiScoreMin: -40, aiScoreMax: -30, irr: 3.95, winrate: 58 },
  { aiScoreMin: -30, aiScoreMax: -20, irr: 3.97, winrate: 59 },
  { aiScoreMin: -20, aiScoreMax: -10, irr: 6.22, winrate: 62 },
  { aiScoreMin: -10, aiScoreMax: -0, irr: 8.06, winrate: 65 },
  { aiScoreMin: 0, aiScoreMax: 10, irr: 9.67, winrate: 67 },
  { aiScoreMin: 10, aiScoreMax: 20, irr: 10.57, winrate: 70 },
  { aiScoreMin: 20, aiScoreMax: 30, irr: 11.57, winrate: 72 },
  { aiScoreMin: 30, aiScoreMax: 40, irr: 13.09, winrate: 75 },
  { aiScoreMin: 40, aiScoreMax: 50, irr: 15.37, winrate: 77 },
  { aiScoreMin: 50, aiScoreMax: 60, irr: 17.03, winrate: 80 },
  { aiScoreMin: 60, aiScoreMax: 70, irr: 20.31, winrate: 82 },
  { aiScoreMin: 70, aiScoreMax: 80, irr: 22.89, winrate: 85 },
  { aiScoreMin: 80, aiScoreMax: 90, irr: 26.94, winrate: 86 },
  { aiScoreMin: 90, aiScoreMax: 100, irr: 30.15, winrate: 90 },
]

const createChart = settings => {
  const { zoomOutButtonMarginRight = 0 } = settings
  if (!isBrowser) return () => {}
  const { id, paddingBottom = 0, irrOposite = false } = settings

  const { am4core, am4charts } = window

  let chart = am4core.create(id, am4charts.XYChart)
  chart.data = chartData
  chart.colors.step = 2
  chart.maskBullets = false
  chart.paddingBottom = paddingBottom

  // AXISs
  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
  categoryAxis.dataFields.category = 'aiScoreMax'
  categoryAxis.title.text = 'AI score'
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

  if (settings.winrate) {
    var winrateAxis = chart.yAxes.push(new am4charts.ValueAxis())
    winrateAxis.title.text = 'Win rate'
    winrateAxis.title.fill = am4core.color(theme.colors.gray)
    winrateAxis.renderer.grid.template.disabled = true
    winrateAxis.renderer.labels.template.fill = am4core.color(theme.colors.gray)
    winrateAxis.renderer.labels.template.adapter.add('text', text => `${text}%`)
    winrateAxis.renderer.labels.template.fontSize = 14
    winrateAxis.renderer.opposite = true
    winrateAxis.cursorTooltipEnabled = false
  }

  var irrAxis = chart.yAxes.push(new am4charts.ValueAxis())
  irrAxis.title.text = 'IRR'
  irrAxis.cursorTooltipEnabled = false
  irrAxis.renderer.labels.template.fill = am4core.color(theme.colors.black)
  irrAxis.renderer.labels.template.adapter.add('text', text => `${text}%`)
  irrAxis.renderer.labels.template.fontSize = 14
  irrAxis.renderer.opposite = irrOposite

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
    const isNegativeSection = value < 0
    const isPositiveSection = value > 10

    let color = theme.colors[settings.neutralColor || 'polar']
    if (isNegativeSection) color = theme.colors.red
    else if (isPositiveSection) color = theme.colors.green

    return color
  })
  columnTemplate.adapter.add('fillOpacity', (_, target) => {
    if (target.dataItem) {
      const value = Number(target.dataItem.categoryX)
      let opacity = 1
      opacity = Math.abs(value) / 100
      if (value === 10 || value === 0) return 1
      return opacity
    }

    return 1
  })

  if (settings.winrate) {
    var winrateSeries = chart.series.push(new am4charts.LineSeries())
    winrateSeries.dataFields.valueY = 'winrate'
    winrateSeries.dataFields.categoryX = 'aiScoreMax'
    winrateSeries.yAxis = winrateAxis
    winrateSeries.name = 'Win rate'
    winrateSeries.stroke = theme.colors.gray
    winrateSeries.strokeWidth = 2
    winrateSeries.tooltip.getFillFromObject = false
    winrateSeries.tooltip.background.fill = am4core.color('#fff')
    winrateSeries.tooltip.background.stroke = am4core.color(theme.colors.gray)
    winrateSeries.tooltip.background.strokeWidth = 2
    winrateSeries.tooltip.label.fill = am4core.color(theme.colors.gray)
    winrateSeries.tooltipText = 'Win rate: [bold]{valueY}%[/]'

    var winrateBullet = winrateSeries.bullets.push(new am4charts.Bullet())
    var winrateRectangle = winrateBullet.createChild(am4core.Rectangle)
    winrateBullet.horizontalCenter = 'middle'
    winrateBullet.verticalCenter = 'middle'
    winrateBullet.fill = theme.colors.gray
    winrateBullet.width = 4
    winrateBullet.height = 4
    winrateRectangle.width = 4
    winrateRectangle.height = 4
  }

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
