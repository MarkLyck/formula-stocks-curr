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

const getAll = async (T, apolloClient) => {
  const { data } = await apolloClient.query({ query: GET_ALL_QUERY(T) })
  return toIds(data[`all${T}s`])
}

const del = async (T, accounts, apolloClient) => {
  await Promise.all(
    accounts.map(id =>
      apolloClient.mutate({
        mutation: DELETE_QUERY(T),
        variables: { id },
      })
    )
  )
}

const toIds = array => array.map(e => e.id)

const detroyAllDataIn = async (T, apolloClient) => {
  const allNodes = await getAll(T, apolloClient)
  console.log('allNodes', allNodes)
  await del(T, allNodes, apolloClient)
  console.log(`Deleted: ${allNodes.length} ${T}s`)
}

async function main(T, apolloClient) {
  await detroyAllDataIn(T, apolloClient)
}

export default main
