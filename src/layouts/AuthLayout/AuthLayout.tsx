import React from 'react'

import { ResponsiveBox } from '../../components/Box/Box'
import Container from '../../components/Container/Container'

import { useThemeContext } from '../../hooks/use-theme-context'
import { useWindowDimensions } from '../../hooks/use-window-dimensions'

import AuthView, { AuthViewProps } from '../../views/AuthView/AuthView'

import AuthorInfo from '../layout-components/AuthorInfo'
import Logo from '../layout-components/Logo'

const AuthLayout: React.FC<AuthViewProps> = (props) => {
  const dimensions = useWindowDimensions()
  const [mode] = useThemeContext()
  
  return (
    <Container width={dimensions.width >= 600 ? 480 : undefined} margin="60px auto">
      <ResponsiveBox>
        <Logo theme={mode} />
        <AuthView {...props} />
      </ResponsiveBox>
      <AuthorInfo />
    </Container>
  )
}

export default AuthLayout