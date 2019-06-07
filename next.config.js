// Fixes npm packages that depend on `fs` module
const nextConfig = { webpack: config => ({ ...config, node: { fs: 'empty' } }), target: 'serverless' }

module.exports = (phase, { defaultConfig }) => {
  const withCSS = require('@zeit/next-css')
  return withCSS(nextConfig)
}

// const withPlugins = require('next-compose-plugins')
// const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
// const withOffline = require('next-offline')

// const nextConfig = {
//   webpack: (config, options) => {
//     config.target = 'serverless'
//     return config
//   },
// }

// module.exports = withPlugins(
//   [
//     [
//       withBundleAnalyzer,
//       {
//         analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
//         analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
//         bundleAnalyzerConfig: {
//           server: {
//             analyzerMode: 'static',
//             reportFilename: '../../bundles/server.html',
//           },
//           browser: {
//             analyzerMode: 'static',
//             reportFilename: '../bundles/client.html',
//           },
//         },
//       },
//     ],
//     [withOffline],
//   ],
//   nextConfig
// )
