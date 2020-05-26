let { useState, useEffect } = require('react')

const getSize = () => window.innerWidth

function useWindowWidth() {
  let [windowWidth, setWindowWidth] = useState(getSize())

  function handleResize() {
    setWindowWidth(getSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}

module.exports = useWindowWidth
