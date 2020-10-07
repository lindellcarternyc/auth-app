import React from 'react'

import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import { useAuthContext } from '../hooks/use-auth-context'

const Register: React.FC = () => {
  const [authState, authApi] = useAuthContext()
  return (
    <AuthLayout
      type="REGISTER"
      alternateAuth={{
        type: "REGISTER",
        onClick: () => {}
      }}
      isLoading={authState.status === 'LOADING'}
      onSubmit={authApi.register}
    />
  )
}

export default Register