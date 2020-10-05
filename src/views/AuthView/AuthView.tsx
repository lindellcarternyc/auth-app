import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../components/colors'

import RenderIf from '../../components/RenderIf/RenderIf'
import AuthForm from '../../forms/AuthForm/AuthForm.container'
import SocialButtonGroup from '../../components/SocialButton/SocialButtonGroup'
import AlternateAuth, { AlternateAuthProps } from '../../components/AlternateAuth/AlternateAuth'

export interface AuthViewProps {
  title: string
  subtitle?: string
  action: {
    text: string
    handler(data: {email: string, password: string}): Promise<void>
  }
  isLoading: boolean
  alternateAuth: AlternateAuthProps
}

const StyledAuthView = styled.div`
  .auth-header {
    color: ${COLORS.BLACK1};
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
const AuthView: React.FC<AuthViewProps> = ({ action, title, subtitle, isLoading, alternateAuth }) => {
  const onSubmit = async (data: {email: string, password: string}) => {
    return await action.handler(data)
  }
  return (
    <StyledAuthView>
      <div className="auth-header">
        <h1>{title}</h1>
        <RenderIf condition={subtitle !== undefined && subtitle.length > 0}>
          <p>{subtitle}</p>
        </RenderIf>
      </div>
      <AuthForm isLoading={isLoading} action={{ text: action.text }} onSubmit={onSubmit} />
      <div className="auth-footer">
        <p>or continue with these social profiles</p>
        <SocialButtonGroup />
        <AlternateAuth {...alternateAuth} />
      </div>
    </StyledAuthView>
  )
}

export default AuthView