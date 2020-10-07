import React from 'react'
import styled from 'styled-components'

import { useThemeContext } from '../../hooks/use-theme-context'
import { Theme } from '../../interfaces/Theme.interface'
import { COLORS } from '../colors'

const StyledWrapper = styled.div<{ mode: Theme['mode'] }>`
  border: 1px solid transparent;
  display: block;
  height: 100%;
  min-height: 100vh;
  background: ${({ mode }) => {
    if (mode === 'DARK') return COLORS.BLACK1;
    return 'white'
  }};
`

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode] = useThemeContext()
  console.log()
  return (
    <StyledWrapper mode={mode}>{children}</StyledWrapper>
  )
}

export default AppWrapper