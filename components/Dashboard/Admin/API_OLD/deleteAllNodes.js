import gql from 'graphql-tag'

const GET_ALL_QUERY = T => gql`
  query Get${T}s {
    all${T}s {
      id
    }
  }
`

const DELETE_QUERY = T => gql`
mutation Delete${T}($id: ID!) {
  delete${T}(id: $id) {
    id
  }
}
`

const toIds = array => array.map(e => e.id)
// Returns up to 1,000 ids
const getAll = async (T, apolloClient) => {
  const { data } = await apolloClient.query({
    query: GET_ALL_QUERY(T),
    fetchPolicy: 'network-only', // don't use cache.
  })
  return toIds(data[`all${T}s`])
}

const del = async (T, accounts, apolloClient, apiConsole) =>
  await Promise.all(
    accounts.map(id =>
      apolloClient.mutate({
        mutation: DELETE_QUERY(T),
        variables: { id },
      })
    )
  )

const maxRuns = 3
let allNodesDeleted = false
const deleteAllNodes = async (T, apolloClient, apiConsole, runs, resolve, reject) => {
  apiConsole.log('fetching all node IDs...')
  const allNodes = await getAll(T, apolloClient)
  apiConsole.log('fetched ' + allNodes.length + ' IDs')
  apiConsole.log('deleting nodes...')
  try {
    await del(T, allNodes, apolloClient, apiConsole)
    apiConsole.log(`Deleted: ${allNodes.length} ${T}s`)
    if (allNodes.length === 1000 && runs <= maxRuns) {
      runs += 1
      apiConsole.log('need to fetch more nodes to delete')
      await deleteAllNodes(T, apolloClient, apiConsole, runs, resolve, reject)
    } else {
      apiConsole.log('deleted all nodes')
      resolve()
    }
  } catch (err) {
    apiConsole.error('ERROR: deleting nodes ' + err)
    console.error(err)
    reject()
    return
  }

  return true
}

const detroyAllDataIn = (T, apolloClient, apiConsole) => {
  return new Promise((resolve, reject) => {
    let runs = 1
    console.log('deleting all Nodes')
    deleteAllNodes(T, apolloClient, apiConsole, runs, resolve, reject)
  })
}

export default detroyAllDataIn
