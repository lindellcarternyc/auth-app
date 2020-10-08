import { useContext } from 'react'
import AuthContext, { AuthState } from '../context/auth.context'
import { AuthAPI } from '../interfaces/auth.interface'


export const useAuthContext = (): [AuthState, AuthAPI] => {
  const {
    state, ...api
  } = useContext(AuthContext)

  return [state, api]
}