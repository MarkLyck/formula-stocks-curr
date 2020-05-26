import React from 'react'
import styled from '@emotion/styled'
import { useQuery } from '@apollo/react-hooks'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LATEST_FILES } from '~/common/queries'
import Box from '~/ui-components/Box'

const FileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 32px;
`

const File = styled(Box)`
  position: relative;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }
`
const FileIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-bottom: 16px;
`

const FileName = styled.p`
  text-align: center;
  font-size: 0.6rem;
`

const Title = styled.h2`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 500;
`

const FileDate = styled.span`
  font-size: 0.6rem;
  color: ${(props) => props.theme.colors.purple};
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
`

const LatestUploads = () => {
  const { data, error, loading } = useQuery(LATEST_FILES)
  if (loading || error) return null
  const files = data.filesList.items
  return (
    <>
      <Title>Latest uploads</Title>
      <FileContainer>
        {files.map((file) => {
          if (!file || !file.filename) return null
          let icon = ['far', 'file-alt']
          if (file.filename.includes('ai_reports')) {
            icon = 'brain'
          }
          return (
            <>
              <File key={file.downloadUrl + file.createdAt} onClick={() => window.open(file.downloadUrl)}>
                <FileIcon icon={icon} />
                <FileName>{file.filename}</FileName>
                <FileDate>{format(new Date(file.createdAt), 'dd/MM/yyyy HH:mm')}</FileDate>
              </File>
            </>
          )
        })}
      </FileContainer>
    </>
  )
}

export default LatestUploads
