import { useEffect } from 'react'
import { isClient } from 'common/utils/featureTests'
import theme from 'common/theme'

const createChart = settings => {
  if (!isClient) return () => {}
  const { numberOfSections, min, max, value } = settings

  const { am4core, am4charts } = window

  let chart = am4core.create('mutliGaugeChartDiv', am4charts.GaugeChart)
  chart.innerRadius = -36

  const axis = chart.xAxes.push(new am4charts.ValueAxis())
  axis.min = -100
  axis.max = 100
  axis.strictMinMax = true
  axis.renderer.labels.template.fill = am4core.color(theme.colors.black)
  axis.renderer.labels.template.opacity = 0.5
  axis.renderer.grid.template.disabled = true

  const sections = new Array(numberOfSections).fill(0)

  const createRange = ({ value, endValue, opacity = 1, color }) => {
    const range = axis.axisRanges.create()
    range.value = value
    range.endValue = endValue
    range.axisFill.fillOpacity = opacity
    range.axisFill.fill = am4core.color(color)
  }

  const valuesPerSection = (max * 2) / numberOfSections
  sections.forEach((_, i) => {
    const isNegativeSection = i < Math.floor(numberOfSections / 2)
    const isPositiveSection = i > Math.floor(numberOfSections / 2)

    let opacity = 1
    if (isNegativeSection) {
      opacity = 1 - (2 * i) / (numberOfSections - 1)
    } else if (isPositiveSection) {
      opacity = (2 * i) / (numberOfSections - 1) - 1
    }

    let color = theme.colors.polar
    if (isNegativeSection) color = theme.colors.red
    else if (isPositiveSection) color = theme.colors.green

    createRange({
      value: -100 + valuesPerSection * i,
      endValue: -100 + valuesPerSection * i + valuesPerSection,
      opacity,
      color,
    })
  })

  const hand = chart.hands.push(new am4charts.ClockHand())
  hand.fill = am4core.color(theme.colors.black)
  hand.stroke = am4core.color(theme.colors.black)
  hand.fillOpacity = 1
  hand.strokeWidth = 0
  hand.radius = am4core.percent(98)
  hand.innerRadius = am4core.percent(60)
  hand.pin.disabled = true
  console.log(hand)
  hand.showValue(value, am4core.ease.cubicOut)

  return chart
}

const MultiGaugeChart = ({ ...settings }) => {
  let chart
  useEffect(() => {
    const chart = createChart(settings)

    return () => {
      if (chart) chart.dispose()
    }
  })

  return <div id="mutliGaugeChartDiv" style={{ height: '200px' }} />
}

export default MultiGaugeChart
