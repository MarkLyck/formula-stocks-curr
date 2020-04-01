import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'
import { GRAPHQL_ENDPOINT } from 'common/constants'
import { hasStorage, isBrowser } from 'common/utils/featureTests'

let apolloClient = null

const authLink = setContext((_, { headers }) => {
  const token = hasStorage ? localStorage.getItem('authToken') : ''

  return {
    headers: { ...headers, Authorization: token ? `Bearer ${token}` : '' },
  }
})

const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT, credentials: 'same-origin', fetch: !isBrowser && fetch })

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
