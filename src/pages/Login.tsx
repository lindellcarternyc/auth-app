import React from 'react'

import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import { useAuthContext } from '../hooks/use-auth-context'

const Login: React.FC<{}> = () => {
  const [authState, authHandlers] = useAuthContext()

  return (
    <AuthLayout 
      type="LOGIN"
      isLoading={authState.status === 'LOADING'}
      alternateAuth={{
        type: 'LOGIN',
        onClick: () => {}
      }}
      onSubmit={authHandlers.login}
    />
  )
}

export default Login