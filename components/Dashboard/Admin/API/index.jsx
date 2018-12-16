import React, { Component } from 'react'
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
import { FileDrop, Container } from './styles'
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

class FileUploader extends Component {
  state = {
    uploadingFiles: [],
    successfullUploads: [],
    errorUploading: '',
  }

  updateSuccesfullUploads = file => {
    this.setState(state => {
      return {
        successfullUploads: state.successfullUploads.concat([file]),
        uploadingFiles: state.uploadingFiles.filter(f => f.name !== file.name),
      }
    })
  }

  onDrop = (updatePlan, allPlans, files) => {
    const badFiles = files.filter(file => acceptedFilenames.indexOf(file.name) === -1)
    if (!badFiles.length) {
      files.forEach(file => {
        this.setState(state => ({ uploadingFiles: files }))
        extractJSONFromFile(file)
          .then(json => {
            console.log('json', json)
            if (json.name.includes('aiscore')) {
              mutateReportData(json, this.props.apolloClient, this.updateSuccesfullUploads.bind(null, file))
            } else {
              let planName = json.name.split('.')[0].split('_')[1]
              if (planName === 'basic') planName = 'entry'

              q.defer(mutatePlanData, json, updatePlan, this.updateSuccesfullUploads.bind(null, file), planName)
            }
          })
          .catch(err => {
            console.error(err)
            this.setState({ errorUploading: `Error: ${err}` })
          })
      })
    }
  }

  render() {
    const { apolloClient } = this.props
    const { uploadingFiles, successfullUploads, errorUploading } = this.state
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
                  <FileDrop onDrop={this.onDrop.bind(null, updatePlan, data.allPlans)} accept="application/json">
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
                </Container>
              )}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}

export default withDashboard(withCharts(FileUploader))
