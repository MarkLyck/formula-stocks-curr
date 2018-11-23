export const hasStorage = (function() {
  try {
    localStorage.setItem('mod', 'mod')
    localStorage.removeItem('mod')
    return true
  } catch (exception) {
    return false
  }
})()

export const usingMocks = (function() {
  return hasStorage && !!window.sessionStorage.getItem('useMocks')
})()

export const isClient = (function() {
  return typeof window !== 'undefined' && window.location
})()
