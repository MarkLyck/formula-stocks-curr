import { useState } from 'react'
import { queue } from 'd3-queue'
import withDashboard from 'components/Dashboard/withDashboard'
import withCharts from 'ui-components/Charts/withCharts'
import LoadingError from 'ui-components/Error/LoadingError'
import GenericLoader from 'ui-components/Loader'
import { Query, Mutation } from 'react-apollo'
import { ALL_PLANS, UPDATE_PLAN, TEST } from './queries'
import { extractJSONFromFile, mutatePlanData } from './planMutation'
import mutateReportData from './reportMutation'
import plansData from './plansData'
import { FileDrop, Container, Console } from './styles'
import JSONIcon from './json_icon.svg'

const acceptedFilenames = [
  'annual_basic.json',
  'annual_entry.json',
  'annual_premium.json',
  'annual_business.json',
  'annual_fund.json',
  'monthly_basic.json',
  'monthly_entry.json',
  'monthly_premium.json',
  'monthly_business.json',
  'monthly_fund.json',
  'weekly_basic.json',
  'weekly_entry.json',
  'weekly_premium.json',
  'weekly_business.json',
  'weekly_fund.json',
  'aiscore.json',
]
let q = queue(1)

const FileUploader = ({ apolloClient }) => {
  const [uploadingFiles, setUploadingFiles] = useState([])
  const [successfullUploads, setSuccessfullUploads] = useState([])
  const [errorUploading, setErrorUploading] = useState('')
  const [log, addLog] = useState([{ type: 'log', text: 'ready', timeStamp: new Date() }])

  const apiConsole = {
    log: entry => addLog({ log: log.push({ type: 'log', text: entry, timeStamp: new Date() }) }),
    error: entry => addLog({ log: log.push({ type: 'error', text: entry, timeStamp: new Date() }) }),
  }

  const updateSuccesfullUploads = file => {
    setSuccessfullUploads(successfullUploads.concat([file]))
    setUploadingFiles(uploadingFiles.filter(f => f.name !== file.name))
  }

  const onDrop = (updatePlan, allPlans, files) => {
    apiConsole.log('file dropped')
    const badFiles = files.filter(file => acceptedFilenames.indexOf(file.name) === -1)
    if (!badFiles.length) {
      apiConsole.log('filenames validated')
      files.forEach(file => {
        setUploadingFiles({ uploadingFiles: files })
        apiConsole.log(file.name, 'extracting json')
        extractJSONFromFile(file)
          .then(json => {
            apiConsole.log(file.name, 'json extracted')
            if (json.name.includes('aiscore')) {
              try {
                apiConsole.log('running mutateReportData')
                mutateReportData(json, apolloClient, updateSuccesfullUploads.bind(null, file), apiConsole)
              } catch (err) {
                console.error(err)
                apiConsole.error('ERROR caught in mutateReportData: ', err)
                setErrorUploading(`Error: ${err}`)
              }
            } else {
              let planName = json.name.split('.')[0].split('_')[1]
              if (planName === 'basic') planName = 'entry'
              apiConsole.log(file.name, 'plan name corresponds to: ', planName)

              q.defer(mutatePlanData, json, updatePlan, updateSuccesfullUploads.bind(null, file), planName)
            }
          })
          .catch(err => {
            console.error(err)
            apiConsole.error('ERROR invalid JSON: ', file.name)
            apiConsole.error(`Error: ${err}`)
            setErrorUploading(`Error: ${err}`)
          })
      })
    } else {
      apiConsole.error('invalid filename detected!')
    }
  }

  return (
    <Query query={ALL_PLANS}>
      {({ loading, error, data }) => {
        if (loading) return <GenericLoader />
        if (error || !data.allPlans) return <LoadingError error={error} />

        data.allPlans.forEach(plan => (plansData[plan.name.toLowerCase()] = plan))

        return (
          <Mutation mutation={UPDATE_PLAN}>
            {updatePlan => (
              <Container data-cy="drag-and-drop">
                <h2>Update API</h2>
                <FileDrop onDrop={onDrop.bind(null, updatePlan, data.allPlans)} accept="application/json">
                  <h3>Drag and drop JSON files here</h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: JSONIcon,
                    }}
                  />
                </FileDrop>
                <p>Uploading files: {uploadingFiles.length}</p>
                <p>successfullUploads: {successfullUploads.length}</p>
                <p>errorUploading: {errorUploading}</p>
                <Console>
                  {log.map(entry => (
                    <p className={entry.type} key={entry.timeStamp + entry.text}>
                      > {entry.text}
                    </p>
                  ))}
                </Console>
              </Container>
            )}
          </Mutation>
        )
      }}
    </Query>
  )
}

export default withDashboard(withCharts(FileUploader))
