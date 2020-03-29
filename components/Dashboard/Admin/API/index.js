import { Upload, Icon, message } from 'antd'
import { useQuery, useMutation } from '@apollo/react-hooks'
import styled from '@emotion/styled'
import { FILE_STACK_INFO, FILE_CREATE_MUTATION } from 'common/queries'
const { Dragger } = Upload

const APIContainer = styled.div`
  padding: 48px;
`

const StyledDragger = styled(Dragger)`
  padding: 64px;
`

const customRequest = data => {
  data.onProgress({ percent: 10 })
  console.log(data)
  return fetch(data.action, {
    method: 'POST',
    body: data.file,
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => {
      data.onProgress({ percent: 90 })
      return response.json()
    })
    .then(response => {
      console.log('response', response)
      data.onSuccess(response)
    })
    .catch(err => {
      data.onError(err)
      console.error('err', err)
    })
}

const Uploader = () => {
  const { loading, error, data: fileStackData } = useQuery(FILE_STACK_INFO)
  const [fileCreateMutation, { data }] = useMutation(FILE_CREATE_MUTATION)

  if (loading || error || !fileStackData) return ''

  const FILESTACK_API_KEY = fileStackData.fileUploadInfo.apiKey
  const FILESTACK_SIGNATURE = fileStackData.fileUploadInfo.signature
  const FILESTACK_POLICY = fileStackData.fileUploadInfo.policy
  const FILESTACK_PATH = fileStackData.fileUploadInfo.path
  const FILE_STACK_URL = `https://www.filestackapi.com/api/store/S3?key=${FILESTACK_API_KEY}&policy=${FILESTACK_POLICY}&signature=${FILESTACK_SIGNATURE}&path=${FILESTACK_PATH}`

  const handleChange = info => {
    console.log('info', info)
    const { status } = info.file

    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }

    console.log('res', info.file.response)

    if (status === 'done' && info.file.response.url) {
      // run MUTATION TO ADD TO 8BASE
      const urlList = info.file.response.url.split('/')
      const fileId = urlList[urlList.length - 1]

      fileCreateMutation({
        variables: {
          fileId,
          fileName: info.file.name,
        },
      })

      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }

  return (
    <APIContainer>
      <StyledDragger
        name="file"
        multiple
        accept=".json"
        headers={{ 'Content-type': 'application/json' }}
        action={FILE_STACK_URL}
        onChange={handleChange}
        customRequest={customRequest}
      >
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">Click to browse or drag .json file to upload</p>
        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
      </StyledDragger>
    </APIContainer>
  )
}

export default Uploader
