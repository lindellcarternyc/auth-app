import React from 'react'
import styled from 'styled-components'

export interface LoaderProps {
  type?: 'spinner' | 'bars'
  size?: number,
  trackColor?: string
  loadColor?: string
}

type StyledLoaderProps = Omit<LoaderProps, 'type'>

const getDimensions =  ({ size }: StyledLoaderProps): string => {
  const actualSize = (size === undefined || size < 24) ? 24 : size
  return `width: ${actualSize}px;
height: ${actualSize}px;`
}

const Spinner = styled.div<StyledLoaderProps>`
  ${getDimensions}
  border: 4px solid;
  border-radius: 50%;
  
  ${({ trackColor, loadColor }) => {
    const borderColor = trackColor === undefined ? 'rgba(255, 255, 255, 0.2)' : trackColor
    const borderTopColor = loadColor === undefined ? 'white' : loadColor
    return `border-color: ${borderColor};
  border-top-color: ${borderTopColor};`
  }}
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

const Bars = styled.div<StyledLoaderProps>`
  ${getDimensions}
`

const Loader: React.FC<LoaderProps> = ({ type, ...rest }) => {
  if (type === 'bars') return <Bars {...rest} />
  return <Spinner {...rest} />
}

export default Loader