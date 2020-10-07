import { useContext } from 'react'
import AuthContext, { AuthContextValue, AuthState } from '../context/auth.context'

type UseAuthAPI = Pick<AuthContextValue, 'login' | 'register'>

export const useAuthContext = (): [AuthState, UseAuthAPI] => {
  const {
    state, ...api
  } = useContext(AuthContext)

  return [state, api]
}