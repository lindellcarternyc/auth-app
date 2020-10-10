import React from 'react'
import styled from 'styled-components'

import { Theme } from '../../interfaces/Theme.interface'
import { COLORS } from '../colors'

export interface ViewHeaderProps {
  mode: Theme['mode']
  title: string
  subtitle: string
}

const StyledviewHeader = styled.div<Pick<ViewHeaderProps, 'mode'>>`
  * {
    font-weight: normal;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: ${({ mode }) => {
      if (mode === 'DARK') return COLORS.GRAY4
      return COLORS.BLACK1
    }};
  }

  h4 {
    color: ${({ mode }) => {
      if (mode === 'DARK') return COLORS.GRAY1
      return COLORS.BLACK1
    }};
  }
`

const ViewHeader: React.FC<ViewHeaderProps> = ({ mode, title, subtitle }) => {
  return (
    <StyledviewHeader mode={mode}>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </StyledviewHeader>
  )
}

export default ViewHeader