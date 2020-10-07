import { useContext } from 'react'
import ThemeContext from '../context/theme.context'

export const useThemeContext = (): ['LIGHT' | 'DARK', () => void] => {
  const { mode, toggleMode } = useContext(ThemeContext)

  return [mode, toggleMode]
}