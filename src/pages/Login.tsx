import React from 'react'

import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import { useAuthContext } from '../hooks/use-auth-context'

// const useFakeLogin = (): [{ isLoading: boolean }, { login: (data: { email: string, password: string }) => void }] => {
//   const [isLoading, setIsLoading] = React.useState(false)

//   return [{
//     isLoading
//   }, {
//     login: (_) => {
//       setIsLoading(true)
//       return new Promise((res) => {
//         window.setTimeout(() => {
//           res()
//           setIsLoading(false)
//         }, 3500)
//       })
//     }
//   }]
// }

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