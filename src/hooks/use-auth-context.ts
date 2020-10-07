import { useContext } from 'react'
import AuthContext, { AuthState } from '../context/auth.context'

export const useAuthContext = (): [AuthState, { login: (data: { email: string, password: string }) => void }] => {
  const {
    state, login
  } = useContext(AuthContext)

  return [state, { login }]
}