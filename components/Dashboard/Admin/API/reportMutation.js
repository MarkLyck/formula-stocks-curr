import { CREATE_REPORTS } from './queries'
import deleteAllNodes from './deleteAllNodes'

const mutateReportData = async (file, apolloClient, updateSuccesfullUploads, apiConsole) => {
  const reports = file.data

  const createReports = apiConsole => {
    apiConsole.log('creating new Reports...')
    apolloClient
      .mutate({ mutation: CREATE_REPORTS(reports) })
      .then(data => {
        apiConsole.log('new reports created')
        updateSuccesfullUploads(file)
        console.log('ai reports updated', data)
      })
      .catch(err => {
        apiConsole.error('ERROR creating reports: ' + err)
        console.error('ERROR creating reports: ', err)
      })
  }

  apiConsole.log('deleteAllNodes: StockReport')
  deleteAllNodes('StockReport', apolloClient, apiConsole)
    .then(() => createReports(apiConsole))
    .catch(err => {
      apiConsole.error('ERROR, deleting all StockReport nodes: ' + err)
      console.error('ERROR, deleting all StockReport nodes: ', err)
    })
}

export default mutateReportData
