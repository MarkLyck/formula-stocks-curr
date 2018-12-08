import React from 'react'
import Script from 'react-load-script'
import { isClient } from 'common/utils/featureTests'

const loadAmCharts4 = async () =>
  Promise.all([
    import('@amcharts/amcharts4/core'),
    import('@amcharts/amcharts4/charts'),
    // import('@amcharts/amcharts4/themes/animated'),
  ])

const withCharts = (Component, settings = {}) => {
  class WithCharts extends React.Component {
    state = {
      amChartsCoreStatus: false,
      amSerialChartsLoaded: false,
      amPieChartsLoaded: false,
      amChartsLoadingError: false,
      amCharts4Loaded: !!window.am4core && !!window.am4charts,
    }

    amChartsSerialStatus = false
    amChartsPieStatus = false
    amChartsThemeStatus = false

    areChartDependenciesLoaded = () => {
      if (this.state.amChartsCoreStatus && this.amChartsThemeStatus) {
        if (this.amChartsSerialStatus) this.setState({ amSerialChartsLoaded: true })
        if (this.amChartsPieStatus) this.setState({ amPieChartsLoaded: true })
      }
    }

    onLoadAmChartsCore = () => {
      this.setState({ amChartsCoreStatus: true })
      this.areChartDependenciesLoaded()
    }

    onLoadAmChartsSerial = () => {
      this.amChartsSerialStatus = true
      this.areChartDependenciesLoaded()
    }

    onLoadAmChartsPie = () => {
      this.amChartsPieStatus = true
      this.areChartDependenciesLoaded()
    }

    onLoadAmChartsTheme = () => {
      this.amChartsThemeStatus = true
      this.areChartDependenciesLoaded()
    }

    componentDidMount() {
      if (isClient && !window.am4core && !window.am4charts) {
        if (settings.version === 4) {
          loadAmCharts4().then(([am4core, am4charts]) => {
            window.am4core = am4core
            window.am4charts = am4charts
            import('@amcharts/amcharts4/themes/animated').then(am4themes_animated => {
              window.am4core.useTheme(am4themes_animated.default)
              this.setState({ amCharts4Loaded: true })
            })
          })
        }
      }
    }

    render() {
      const {
        amChartsCoreStatus,
        amSerialChartsLoaded,
        amPieChartsLoaded,
        amCharts4Loaded,
        amChartsLoadingError,
      } = this.state

      return (
        <React.Fragment>
          <Component
            serialChartsReady={amSerialChartsLoaded}
            pieChartsReady={amPieChartsLoaded}
            chartError={amChartsLoadingError}
            amCharts4Loaded={amCharts4Loaded}
            {...this.props}
          />
          {settings.version !== 4 && (
            <Script url="https://www.amcharts.com/lib/3/amcharts.js" onLoad={this.onLoadAmChartsCore} />
          )}
          {settings.version !== 4 && amChartsCoreStatus ? (
            <React.Fragment>
              <Script url="https://www.amcharts.com/lib/3/serial.js" onLoad={this.onLoadAmChartsSerial} />
              <Script url="https://www.amcharts.com/lib/3/themes/light.js" onLoad={this.onLoadAmChartsTheme} />
              {settings.loadPieChart && (
                <Script url="https://www.amcharts.com/lib/3/pie.js" onLoad={this.onLoadAmChartsPie} />
              )}
            </React.Fragment>
          ) : null}
        </React.Fragment>
      )
    }
  }

  return WithCharts
}

export default withCharts
