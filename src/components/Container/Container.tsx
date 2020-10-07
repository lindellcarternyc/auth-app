import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

export interface MarginProps {
  ml?: number | string
  mr?: number | string
  mt?: number | string
  mb?: number | string
  mx?: number | string
  my?: number | string
  margin?: number | string
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement>, MarginProps {
  width?: number
  children: React.ReactElement | React.ReactElement[]

  // margin
  
}

const Wrapper = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ width }) => {
    if (width === undefined) return '100%'
    return `${width}px`
  }};
  margin: ${({ margin }) => {
    if (margin === undefined) return 'auto auto'
    if (typeof margin === 'string') return margin
    return `${margin}px`
  }};
`

const Container: React.FC<ContainerProps> = ({ width, children, ...props }) => {
  return (
    <Wrapper width={width} {...props}>{children}</Wrapper>
  )
}

export default Container