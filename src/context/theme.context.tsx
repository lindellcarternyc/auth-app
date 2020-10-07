import React, { createContext, useState } from 'react'
import { Theme } from '../interfaces/Theme.interface'

type ThemeContextValue = Theme & { toggleMode: () => void }

const ThemeContext = createContext<ThemeContextValue>({
  mode: 'DARK',
  toggleMode: () => { }
})

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'LIGHT' | 'DARK'>('DARK')

  const toggleMode = () => setMode(current => current === 'DARK' ? 'LIGHT' : 'DARK')

  return (
    <ThemeContext.Provider value={{
      mode, toggleMode
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext