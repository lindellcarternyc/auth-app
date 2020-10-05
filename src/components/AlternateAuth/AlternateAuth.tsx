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
  text: string
  link: {
    text: string
    to: string
  }
  onClick: (path: string) => void
}

const AlternateAuth: React.FC<AlternateAuthProps> = ({ text, link, onClick }) => {
  return (
    <AltAuthText>
      {text}{' '}
      <span onClick={() => onClick(link.to)}>{link.text}</span>
    </AltAuthText>
  )
}

export default AlternateAuth