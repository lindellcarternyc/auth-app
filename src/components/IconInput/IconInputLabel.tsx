import React from 'react'
import styled from 'styled-components'

export interface IconInputLabelProps {
  text: string
  active: boolean
  htmlFor: string
}

const StyledIconInputLabel = styled.label<Pick<IconInputLabelProps, 'active'>>`
  font-size: 0.95rem;
  position: absolute;
  left: ${({ active }) => {
    if (active) return '4px'
    return '32px'
  }};
  bottom: ${({ active }) => {
    if (active) return 'calc(100% + 4px)'
  }};
  line-height: 1.5rem;
`

const IconInputLabel: React.FC<IconInputLabelProps> = ({ text, active, htmlFor }) => {
  return <StyledIconInputLabel active={active} htmlFor={htmlFor}>{text}</StyledIconInputLabel>
}

export default IconInputLabel