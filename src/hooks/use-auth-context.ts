import { useContext } from 'react'
import AuthContext, { AuthState } from '../context/auth.context'
import { AuthData } from '../interfaces/auth.interface'

export const useAuthContext = (): [AuthState, { login: (data: AuthData) => void }] => {
  const {
    state, login
  } = useContext(AuthContext)

  return [state, { login }]
}