import React from 'react'
import styled from 'styled-components'
import { Theme } from '../../interfaces/Theme.interface'
import { COLORS } from '../colors'

const PageHeaderWrapper = styled.div<{ mode: Theme['mode'], size: 'small' | 'large' }>`
  * {
    margin: 0;
    font-weight: normal;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: ${({ mode }) => {
    if (mode === 'DARK') return COLORS.GRAY4
    return COLORS.BLACK1
  }};

  h1 {
    font-size: ${({ size }) => {
      if (size === 'small') return '1.5rem'
      return '2rem'
    }};
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: ${({ size }) => {
      if (size === 'small') return '0.875rem'
      return '1.125rem'
    }};
  }
`

export interface PageHeaderProps {
  size: 'small' | 'large'
  title: string
  subtitle: string
  mode: Theme['mode']
}

const PageHeader: React.FC<PageHeaderProps> = ({ mode, size, title, subtitle }) => {
  return (
    <PageHeaderWrapper size={size} mode={mode}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </PageHeaderWrapper>
  )
}

export default PageHeader