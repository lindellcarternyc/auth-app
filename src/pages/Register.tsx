import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'

import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import { useAuthContext } from '../hooks/use-auth-context'
import { ROUTES } from '../routes/constants'

const Register: React.FC = () => {
  const [authState, authApi] = useAuthContext()
  const history = useHistory()

  if (authState.status === 'SUCCESS') return <Redirect to={ROUTES.HOME} />

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