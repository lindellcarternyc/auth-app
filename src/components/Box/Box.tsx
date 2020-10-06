import React from 'react'
import styled from 'styled-components'
import { useWindowDimensions } from '../../hooks/use-window-dimensions'

import { COLORS } from '../colors'

const Box = styled.div<{ width: number }>`
  border: 1px solid ${COLORS.GRAY5};
  border-radius: 4px;
  width: ${({ width }) => width}px;
  margin: 0 auto;
  padding: 1rem;
`

export const ResponsiveBox: React.FC<{ children: React.ReactNode, width: number }> = ({ children, width }) => {
  const dimensions  = useWindowDimensions()
  if (dimensions.width >= 600) {
    return <Box width={width}>{children}</Box>
  }
  return <>{children}</>
}

export default Box