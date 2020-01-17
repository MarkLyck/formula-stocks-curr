import { Upload, Icon, message } from 'antd'
import styled from '@emotion/styled'

const { Dragger } = Upload

const props = {
  name: 'file',
  multiple: true,
  accept: '.json',
  action:
    'https://www.filestackapi.com/api/store/S3?key=YOUR_API_KEY_HERE&policy=YOUR_POLICY_HERE&signature=YOUR_SIGNATURE_HERE&path=YOUR_PATH_HERE',
  onChange(info) {
    console.log('info', info)
    const { status } = info.file

    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

const APIContainer = styled.div`
  padding: 48px;
`

const StyledDragger = styled(Dragger)`
  padding: 64px;
`

const Uploader = () => (
  <APIContainer>
    <StyledDragger {...props}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Click to browse or drag .json file to upload</p>
      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
    </StyledDragger>
  </APIContainer>
)

export default Uploader
