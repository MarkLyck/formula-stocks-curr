import { hasStorage, isBrowser } from 'common/utils/featureTests'
import Router from 'next/router'

const logoutUser = to => {
  if (isBrowser) window.authToken = undefined
  if (hasStorage) localStorage.removeItem('authToken')
  Router.push(to ? to : '/')
}

export default logoutUser
