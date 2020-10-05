import React from 'react'
import styled from 'styled-components'

interface BaseButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const BaseButtonWrapper = styled.button<{ disabled?: boolean }>`
  background: transparent;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: ${({ disabled }) => {
    if (disabled) return 'not-allowed'
    return 'pointer'
  }};
  margin: 0;
  padding: 0;
`

const BaseButton: React.FC<BaseButtonProps> = ({ children, onClick, className, disabled }) => {
  const handleClick = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (disabled) return
    if (onClick) onClick()
  }

  return (
    <BaseButtonWrapper onClick={handleClick} disabled={disabled} className={className}>{children}</BaseButtonWrapper>
  )
}

export default BaseButton