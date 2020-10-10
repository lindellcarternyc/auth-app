import React from 'react'
import styled from 'styled-components'
import useAuthState from '../../hooks/use-auth-state'

import { useThemeContext } from '../../hooks/use-theme-context'
import { useWindowDimensions } from '../../hooks/use-window-dimensions'
import { Theme } from '../../interfaces/Theme.interface'
import { COLORS } from '../colors'
import Navbar from '../Navbar/Navbar'
import RenderIf from '../RenderIf/RenderIf'

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
  const [authState] = useAuthState()
  const { width } = useWindowDimensions()

  return (
    <StyledWrapper mode={mode}>
      <RenderIf condition={authState.status === 'SUCCESS'}>
        <Navbar mode={mode}
          size={width >= 600 ? 'large' : 'small'}
          profile={authState.user!.profile}
          onClickLink={id => console.log('click '+ id)}
          activeLink={''}
          onClickSignOut={() => {}}
        />
      </RenderIf>
      {children}
    </StyledWrapper>
  )
}

export default AppWrapper