import React from 'react'
import styled from 'styled-components'
import { IconType } from 'react-icons'

import { COLORS } from '../colors'
import IconInputLabel from './IconInputLabel'

export interface PureIconInputProps {
  icon: IconType 
  label: string
  id: string
  onFocus?: (_: any) => void
  onBlur?: (_: any) => void
  value: string
  onChange?: (id: string, value: string) => void
  type?: 'text' | 'email' | 'password'
  readOnly?: boolean
}

const IconInputWrapper = styled.div`
  border: 1px solid ${COLORS.GRAY5};
  border-radius: 4px;
  color: ${COLORS.GRAY1};
  height: 48px;
  display: flex;
  padding: 8px;
  align-items: center;
  position: relative;
`

const DOMInput = styled.input`
  width: 100%;
  margin-left: 8px;
`
  
const PureIconInput: React.FC<PureIconInputProps> = ({ icon, label, id, onFocus, onBlur, onChange, value }) => {
  const [active, setActive] = React.useState(value.length > 0)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleFocus = React.useCallback((e: any) => {
    setActive(true)
    if (onFocus) onFocus(e)
  }, [onFocus])

  const handleBlur = React.useCallback((e: any) => {
    if (value.length === 0) {
      setActive(false)
    }
    if (onBlur) onBlur(e)
  }, [onBlur, value])

  React.useEffect(() => {
    const input = inputRef.current
    if (input) {
      input.addEventListener('focus', handleFocus)
      input.addEventListener('blur', handleBlur)

      return () => {
        input.removeEventListener('focus', handleFocus)
        input.removeEventListener('blur', handleBlur)
      }
    }
  }, [handleFocus, handleBlur])

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(id, evt.target.value)
  }

  return (
    <IconInputWrapper>
      {icon({})}
      <IconInputLabel htmlFor={id} active={active} text={label} />
      <DOMInput ref={inputRef} onChange={handleChange} value={value} />
    </IconInputWrapper>
  )
}

export default PureIconInput