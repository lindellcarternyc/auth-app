import React from 'react'

import { FaEnvelope, FaLock } from 'react-icons/fa'
import styled from 'styled-components'

import IconInput from '../../components/IconInput/PureIconInput'
import LoaderButton from '../../components/LoaderButton/LoaderButton'

export interface AuthFormProps {
  data: {
    email: string
    password: string
  }
  action: {
    text: string
  }
  state: {
    isLoading: boolean
    isValid: boolean
  }
  onChange: (id: 'email' | 'password', value: string) => void
  onSubmit: () => void
}

const StyledForm = styled.form`
  & > * {
    &:nth-child(1) {
      margin-bottom: 2rem;
    }

    &:nth-child(2) {
      margin-bottom: 2rem;
    }
  }
`

const AuthForm: React.FC<AuthFormProps> = ({ data, action, state, onChange, onSubmit }) => {
  const handleChange = (id: string, value: string) => {
    if (id === 'email' || id === 'password') onChange(id, value)
  }

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement> | React.SyntheticEvent<HTMLButtonElement>) => {
    e?.preventDefault()
    e?.stopPropagation()
    
    onSubmit()
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <IconInput
       icon={FaEnvelope} 
       label="Email" 
       value={data.email} id="email" 
       onChange={handleChange}
      />
      <IconInput 
        icon={FaLock} 
        label="Password" 
        value={data.password} 
        id="password" 
        onChange={handleChange}
      />
      <LoaderButton 
        label={action.text} 
        isLoading={state.isLoading} 
        primary
        fullWidth
        disabled={state.isValid === false}
        onClick={() => handleSubmit()}
      />
    </StyledForm>
  )
}

export default AuthForm