import { DELETE_REPORTS, CREATE_REPORTS } from './queries'

const mutateReportData = async (file, apolloClient, updateSuccesfullUploads, planName, finished) => {
  const reports = file.data
  console.log('reports', reports)

  const deleteAllReports = await apolloClient
    .mutate({ mutation: DELETE_REPORTS })
    .then(data => console.log('deleted', data))
    .catch(err => console.error(err))

  // const response = await apolloClient
  //   .mutate({
  //     mutation: CREATE_REPORTS(reports),
  //   })
  //   .then(data => console.log('success', data))
  //   .catch(err => console.error(err))
}

export default mutateReportData
