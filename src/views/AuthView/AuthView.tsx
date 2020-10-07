import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../components/colors'

import RenderIf from '../../components/RenderIf/RenderIf'
import AuthForm from '../../forms/AuthForm/AuthForm.container'
import SocialButtonGroup from '../../components/SocialButton/SocialButtonGroup'
import AlternateAuth, { AlternateAuthProps } from '../../components/AlternateAuth/AlternateAuth'
import { useThemeContext } from '../../hooks/use-theme-context'

export interface AuthViewProps {
  type: 'LOGIN' | 'REGISTER'
  onSubmit: (data: { email: string, password: string }) => void
  isLoading: boolean
  alternateAuth: AlternateAuthProps
}

const StyledAuthView = styled.div<{ mode: 'LIGHT' | 'DARK'}>`
  .auth-header {
    color: ${({ mode }) => {
      if (mode === 'LIGHT') return COLORS.BLACK1
      return COLORS.GRAY4
    }};
    margin-bottom: 2rem;
    * {
      margin: 0;
    }

    h1 {
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: 1.125rem;
    }

    p {
      margin: 0;
    }
  }

  .auth-footer {
    p {
      font-size: 0.875rem;
      color: ${COLORS.GRAY1};
      text-align: center;
    }
  }
`

const getHeaderText = (type: 'LOGIN' | 'REGISTER') => {
  if (type === 'LOGIN') return ({
    title: 'Login'
  })

  return {
    title: 'Join thousands of learners from around the world',
    subtitle: 'Master web development by making real-life projects. There are multiple paths for you to choose'
  }
}

const AuthView: React.FC<AuthViewProps> = ({ onSubmit, type, isLoading, alternateAuth }) => {
  const { title, subtitle } = getHeaderText(type)
  const [mode] = useThemeContext()
  
  return (
    <StyledAuthView mode={mode}>
      <div className="auth-header">
        <h1>{title}</h1>
        <RenderIf condition={subtitle !== undefined && subtitle.length > 0}>
          <p>{subtitle}</p>
        </RenderIf>
      </div>
      <AuthForm isLoading={isLoading} type={type} onSubmit={onSubmit} />
      <div className="auth-footer">
        <p>or continue with these social profiles</p>
        <SocialButtonGroup />
        <AlternateAuth {...alternateAuth} />
      </div>
    </StyledAuthView>
  )
}

export default AuthView