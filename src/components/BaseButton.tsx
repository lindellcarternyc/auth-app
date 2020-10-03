import React from 'react'
import styled from 'styled-components'

interface BaseButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const BaseButtonWrapper = styled.button`
  background: transparent;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
`

const BaseButton: React.FC<BaseButtonProps> = ({ children, onClick, className }) => {
  const handleClick = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (onClick) onClick()
  }

  return (
    <BaseButtonWrapper onClick={handleClick} className={className}>{children}</BaseButtonWrapper>
  )
}

export default BaseButton