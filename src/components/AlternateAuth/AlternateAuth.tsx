import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../colors'

const AltAuthText = styled.p`
  font-size: 0.85rem;
  color: ${COLORS.GRAY1};
  cursor: pointer;

  & span {
    color: ${COLORS.BLUE1};

    &:hover {
      text-decoration: underline;
    }
  }
`
export interface AlternateAuthProps {
  type: 'LOGIN' | 'REGISTER'
  onClick: () => void
}

const getText = (type: 'LOGIN' | 'REGISTER' ): { text: string, link: string } => {
  if (type === 'LOGIN') {
    return {
      text: 'Already a member?',
      link: 'Login'
    }
  }

  return {
    text: 'Don\'t have an account yet?',
    link: 'Register'
  }
}

const AlternateAuth: React.FC<AlternateAuthProps> = ({ type, onClick }) => {
  const { text, link } = getText(type)
  return (
    <AltAuthText>
      {text}{' '}
      <span onClick={onClick}>{link}</span>
    </AltAuthText>
  )
}

export default AlternateAuth