import { gql } from 'apollo-boost'

export const FILE_STACK_INFO = gql`
  query {
    fileUploadInfo {
      policy
      signature
      apiKey
      path
    }
  }
`

export const FILE_CREATE_MUTATION = gql`
  mutation fileCreate($fileId: String!, $fileName: String) {
    fileCreate(data: { fileId: $fileId, filename: $fileName }) {
      id
    }
  }
`
