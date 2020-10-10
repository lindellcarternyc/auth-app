import React from 'react'
import styled from 'styled-components'
import { useWindowDimensions } from '../../hooks/use-window-dimensions'

import { COLORS } from '../colors'

const Box = styled.div`
  border: 1px solid ${COLORS.GRAY5};
  border-radius: 4px;
  margin: 0 auto;
  padding: 1rem;
`

export const ResponsiveBox: React.FC<{ children: React.ReactNode, style?: React.CSSProperties }> = ({ children, style }) => {
  const dimensions  = useWindowDimensions()
  if (dimensions.width >= 600) {
    return <Box style={style}>{children}</Box>
  }
  return <>{children}</>
}

export default Box