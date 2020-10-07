import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'

import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import { useAuthContext } from '../hooks/use-auth-context'
import { ROUTES } from '../routes/constants'

const Login: React.FC<{}> = () => {
  const [authState, authHandlers] = useAuthContext()
  const history = useHistory()

  if (authState.status === 'SUCCESS') return <Redirect to={ROUTES.HOME} />
  return (
    <AuthLayout 
      type="LOGIN"
      isLoading={authState.status === 'LOADING'}
      alternateAuth={{
        type: 'REGISTER',
        onClick: () => history.push(ROUTES.REGISTER)
      }}
      onSubmit={authHandlers.login}
    />
  )
}

export default Login