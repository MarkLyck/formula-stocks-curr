import gql from 'graphql-tag'
import platform from 'platform'
import fetchJsonP from 'fetch-jsonp'
import { getDeviceType } from 'common/utils/helpers'
import { isClient, hasStorage } from 'common/utils/featureTests'
import { IP_API_KEY } from 'common/constants'

const CREATE_VISITOR = gql`
  mutation createVisitor($device: Json!, $location: Json!, $referrer: String!) {
    createVisitor(device: $device, location: $location, referrer: $referrer) {
      id
    }
  }
`

const createNewVisit = async (geoApiResponse, apolloClient) => {
  const { city, zip, country_code, country_name, latitude, longitude, ip, location } = geoApiResponse
  const country_flag_emoji = location ? location.country_flag_emoji : undefined

  const response = await apolloClient
    .mutate({
      mutation: CREATE_VISITOR,
      variables: {
        referrer: document.referrer,
        device: {
          os: platform.os.family,
          product: platform.product,
          browser: platform.name,
          type: getDeviceType(),
        },
        location: {
          city,
          zip,
          country_code,
          country_name,
          country_flag_emoji,
          latitude,
          longitude,
          ip,
        },
      },
    })
    .catch(err => console.error(err))
  if (hasStorage && response && response.data) {
    localStorage.setItem('visitorID', response.data.createVisitor.id)
  }
}

const blackListedReferrers = [
  'http://localhost:3000/',
  'http://localhost:3000',
  'http://localhost:3000/__/',
  'https://zeit.co/',
]

const newVisitor = apolloClient => {
  // don't mistakenly create visitors during development.
  if (blackListedReferrers.includes(document.referrer)) return null
  // ignore E2E tests and programatic browsers.
  if (platform.name === 'Electron') return null
  if (!isClient || (hasStorage && localStorage.getItem('visitorID'))) return null

  // TODO create a microservice for this call to hide API_KEY
  // - MINOR priority free API and no security concerns. Only statistics from where visitors come from
  return fetchJsonP(`https://api.ipapi.com/check?access_key=${IP_API_KEY}`)
    .then(response => {
      return response.json()
    })
    .then(geoData => {
      if (geoData.ip) {
        createNewVisit(geoData, apolloClient)
      } else {
        console.error('ipapi call error', geoData.error)
        createNewVisit({}, apolloClient)
      }
    })
    .catch(err => {
      console.error('ipapi call failed', err)

      createNewVisit({}, apolloClient)
    })
}

export default newVisitor
