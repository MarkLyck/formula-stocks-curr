import React from 'react'
import Script from 'react-load-script'
import { isBrowser } from 'common/utils/featureTests'
import { getDeviceType } from 'common/utils/helpers'

const loadAmCharts4 = async () =>
  Promise.all([import('@amcharts/amcharts4/core'), import('@amcharts/amcharts4/charts')])

const withCharts = (Component, settings = {}) => {
  class WithCharts extends React.Component {
    state = {
      amChartsLoadingError: false,
      amCharts4Loaded: isBrowser && !!window.am4core && !!window.am4charts,
    }

    loadingAm4Charts = false

    componentDidMount() {
      if (isBrowser && !this.loadingAm4Charts && !window.am4core && !window.am4charts) {
        if (settings.version === 4) {
          this.loadingAm4Charts = true
          loadAmCharts4()
            .then(([am4core, am4charts]) => {
              window.am4core = am4core
              window.am4charts = am4charts
              if (getDeviceType() === 'desktop') {
                // only load animated theme for desktop devices
                import('@amcharts/amcharts4/themes/animated').then(am4themes_animated => {
                  window.am4core.useTheme(am4themes_animated.default)
                  this.setState({ amCharts4Loaded: true })
                  this.loadingAm4Charts = false
                })
              } else {
                // faster graphs without animations for mobile and tablet.
                this.setState({ amCharts4Loaded: true })
                this.loadingAm4Charts = false
              }
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
