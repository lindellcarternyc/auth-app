import React from 'react'
import { useHistory } from 'react-router-dom'

import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import { useAuthContext } from '../hooks/use-auth-context'
import { ROUTES } from '../routes/constants'

const Register: React.FC = () => {
  const [authState, authApi] = useAuthContext()
  const history = useHistory()

  return (
    <AuthLayout
      type="REGISTER"
      alternateAuth={{
        type: "LOGIN",
        onClick: () => history.push(ROUTES.LOGIN)
      }}
      isLoading={authState.status === 'LOADING'}
      onSubmit={authApi.register}
    />
  )
}

export default Register