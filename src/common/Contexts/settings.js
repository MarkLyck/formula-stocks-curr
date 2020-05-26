import React, { useState } from 'react'
import { hasStorage } from '~/common/utils/featureTests'

let defaultSettings = {
  chartType: 'line',
  theme: 'light',
}

if (hasStorage && localStorage.settings) {
  defaultSettings = JSON.parse(localStorage.settings)
}

const SettingsContext = React.createContext(defaultSettings)

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings)

  const handleNewSettings = (settings) => {
    setSettings(settings)
    defaultSettings = settings
    if (hasStorage) {
      localStorage.settings = JSON.stringify(settings)
    }
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings: (settings) => handleNewSettings(settings),
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContext
