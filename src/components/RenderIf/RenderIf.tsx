import React from 'react'

export interface RenderIfProps {
  condition: boolean | (() => boolean)
  children: JSX.Element | JSX.Element[]
}

const RenderIf: React.FC<RenderIfProps> = ({ condition, children }) => {
  const shouldRender: boolean = typeof condition === 'boolean'
    ? condition : condition()

  if (shouldRender) return <>{children}</>
  return null
}

export default RenderIf