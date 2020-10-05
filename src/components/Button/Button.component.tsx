import React from 'react'
import styled from 'styled-components'
import BaseButton from '../BaseButton'
import { COLORS, lightenOrDarken } from '../colors'

export interface ButtonProps {
  label: string
  primary?: boolean
  fullWidth?: boolean
  onClick?: () => void
  disabled?: boolean
}

export const StyledButton = styled(BaseButton)<Pick<ButtonProps, 'primary' | 'fullWidth' | 'disabled'>>`
  background-color: ${({ primary, disabled }) => {
    if (primary === true) {
      if (disabled) return lightenOrDarken(COLORS.BLUE1, -30)
      return COLORS.BLUE1
    }
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
  width: ${({ fullWidth }) => {
    if (fullWidth) return '100%'
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:hover {
    background-color: ${({ primary, disabled }) => {
      if (primary === true) {
        if (disabled) return lightenOrDarken(COLORS.BLUE1, -30)
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