import React from 'react'

import AuthForm, { AuthFormProps } from './AuthForm'

interface AuthFormContainerProps extends Pick<AuthFormProps, 'action'> {
  isLoading: boolean
  onSubmit: (data: { email: string, password: string }) => void
}

const isValidPassword = (password: string) => password.length > 5
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
const AuthFormContainer: React.FC<AuthFormContainerProps> = ({ action, isLoading, onSubmit }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isValid, setIsValid] = React.useState(false)

  const onChange = (id: 'email' | 'password', value: string) => {
    if (id === 'email') {
      setEmail(value)
      if (isValidEmail(value) && isValidPassword(password)) setIsValid(true)
    }
    if (id === 'password') {
      setPassword(value)
      if (isValidPassword(value) && isValidEmail(email)) setIsValid(true)
    }
  }

  const handleSubmit = () => {
    if (isValid) onSubmit({
      email, password
    })
  }

  return (
    <AuthForm 
      data={{ email, password }}
      onChange={onChange}
      action={action}
      state={{
        isLoading,
        isValid
      }}
      onSubmit={handleSubmit}
    />
  )
}

export default AuthFormContainer