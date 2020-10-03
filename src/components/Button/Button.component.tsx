import React from 'react'
import styled from 'styled-components'
import BaseButton from '../BaseButton'
import { COLORS, lightenOrDarken } from '../colors'

export interface ButtonProps {
  label: string
  primary?: boolean
  fullWidth?: boolean
  onClick?: () => void
}

const StyledButton = styled(BaseButton)<Pick<ButtonProps, 'primary' | 'fullWidth'>>`
  background-color: ${({ primary }) => {
    if (primary === true) return COLORS.BLUE1
    return 'transparent'
  }};
  color: ${({ primary }) => {
    if (primary === true) return 'white'
    return COLORS.GRAY1
  }};
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${({ primary }) => primary ? 'transparent' : COLORS.GRAY1 };
  transition: all 0.4s ease-in;
  cursor: pointer;
  width: ${({ fullWidth }) => {
    if (fullWidth) return '100%'
  }};
  display: block;
  outline: none;

  &:hover {
    background-color: ${({ primary }) => {
      if (primary === true) {
        return lightenOrDarken(COLORS.BLUE1, -20)
      }
      return COLORS.GRAY1
    }};
    color: white;
  }
`

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <StyledButton {...props}>{label}</StyledButton>
  )
}