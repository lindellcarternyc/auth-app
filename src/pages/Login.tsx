import React from 'react'

import AuthLayout from '../layouts/AuthLayout/AuthLayout'

const useFakeLogin = (): [{ isLoading: boolean }, { login: (data: { email: string, password: string }) => void }] => {
  const [isLoading, setIsLoading] = React.useState(false)

  return [{
    isLoading
  }, {
    login: (_) => {
      setIsLoading(true)
      return new Promise((res) => {
        window.setTimeout(() => {
          res()
          setIsLoading(false)
        }, 3500)
      })
    }
  }]
}

const Login: React.FC<{}> = () => {
  const [loginState, loginHandlers] = useFakeLogin()

  return (
    <AuthLayout 
      type="LOGIN"
      isLoading={loginState.isLoading}
      alternateAuth={{
        type: 'LOGIN',
        onClick: () => {}
      }}
      onSubmit={loginHandlers.login}
    />
  )
}

export default Login