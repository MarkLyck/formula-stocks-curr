import { CREATE_REPORTS } from './queries'
import deleteAllNodes from './deleteAllNodes'

const mutateReportData = async (file, apolloClient, updateSuccesfullUploads) => {
  const reports = file.data

  const createReports = () => {
    apolloClient
      .mutate({ mutation: CREATE_REPORTS(reports) })
      .then(data => {
        updateSuccesfullUploads(file)
        console.log('ai reports updated', data)
      })
      .catch(console.error)
  }

  deleteAllNodes('StockReport', apolloClient)
    .then(createReports)
    .catch(console.error)
}

export default mutateReportData
