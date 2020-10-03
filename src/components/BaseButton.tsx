import React from 'react'

interface BaseButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, onClick, className }) => {
  const handleClick = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (onClick) onClick()
  }

  return (
    <button onClick={handleClick} className={className}>{children}</button>
  )
}

export default BaseButton