import React from 'react'
import Script from 'react-load-script'
import { isClient } from 'common/utils/featureTests'

const loadAmCharts4 = async () =>
  Promise.all([import('@amcharts/amcharts4/core'), import('@amcharts/amcharts4/charts')])

const withCharts = (Component, settings = {}) => {
  class WithCharts extends React.Component {
    state = {
      amChartsLoadingError: false,
      amCharts4Loaded: isClient && !!window.am4core && !!window.am4charts,
    }

    loadingAm4Charts = false

    componentDidMount() {
      if (isClient && !this.loadingAm4Charts && !window.am4core && !window.am4charts) {
        if (settings.version === 4) {
          this.loadingAm4Charts = true
          loadAmCharts4()
            .then(([am4core, am4charts]) => {
              window.am4core = am4core
              window.am4charts = am4charts
              import('@amcharts/amcharts4/themes/animated').then(am4themes_animated => {
                window.am4core.useTheme(am4themes_animated.default)
                this.setState({ amCharts4Loaded: true })
                this.loadingAm4Charts = false
              })
            })
            .catch(err => {
              console.error(err)
              this.setState({ amChartsLoadingError: true })
            })
        }
      }
    }

    render() {
      const { amCharts4Loaded, amChartsLoadingError } = this.state

      return <Component chartError={amChartsLoadingError} amCharts4Loaded={amCharts4Loaded} {...this.props} />
    }
  }

  return WithCharts
}

export default withCharts
