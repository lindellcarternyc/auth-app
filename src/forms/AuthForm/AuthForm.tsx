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

const AuthForm: React.FC<AuthFormProps> = ({ data, action, state, onChange }) => {
  const handleChange = (id: string, value: string) => {
    if (id === 'email' || id === 'password') onChange(id, value)
  }

  return (
    <StyledForm>
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
      />
    </StyledForm>
  )
}

export default AuthForm