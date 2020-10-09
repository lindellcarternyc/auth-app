import React from 'react'
import styled from 'styled-components'

const PageHeaderWrapper = styled.div<{ size: 'small' | 'large' }>`
  * {
    margin: 0;
    font-weight: normal;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

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
}

const PageHeader: React.FC<PageHeaderProps> = ({ size, title, subtitle }) => {
  return (
    <PageHeaderWrapper size={size}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </PageHeaderWrapper>
  )
}

export default PageHeader