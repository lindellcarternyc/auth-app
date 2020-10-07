import React from 'react'
import { Redirect } from 'react-router-dom'

import { useAuthContext } from '../hooks/use-auth-context'
import { ROUTES } from '../routes/constants'

const Home: React.FC = () => {
  const [authState] = useAuthContext()

  if (authState.status === 'INITIAL') {
    return <Redirect to={ROUTES.REGISTER} />
  }

  return (
    <div>HOME</div>
  )
}

export default Home