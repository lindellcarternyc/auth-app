import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../colors'

const Box = styled.div`
  border: 1px solid ${COLORS.GRAY5};
`

const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

const useWindowDimensions = (): { width: number, height: number } => {
  const [dimensions, setDimensions] = React.useState(getWindowDimensions())

  const handleResize = () => {
    setDimensions(getWindowDimensions())
  }

  React.useEffect(() => {
    document.addEventListener('resize', handleResize)
    return () => document.removeEventListener('resize', handleResize)
  }, [])

  return dimensions
}

export const ResponsiveBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { width } = useWindowDimensions()
  if (width >= 600) {
    return <Box>{children}</Box>
  }
  return <>{children}</>
}

export default Box