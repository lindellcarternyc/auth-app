import { useState } from 'react'
import api from '../api'
import { AuthState } from '../context/auth.context'
import { MOCK_USER } from '../data/mock-users'
import { AuthAPI, AuthData } from '../interfaces/auth.interface'

const useAuthState = (): [AuthState, AuthAPI] => {
  const [state, setState] = useState<AuthState>({
    status: 'SUCCESS',
    user: MOCK_USER,
    error: null
  })

  const login = async (data: AuthData) => {
    setState({ status: 'LOADING', user: null, error: null })
    const user = await api.login(data)
    setState({ status: 'SUCCESS', user, error: null })
  }

  const register = async (data: AuthData) => {
    setState({ status: 'LOADING', user: null, error: null })
    const user = await api.register(data)
    setState({ status: 'SUCCESS', user, error: null })
  }

  return [
    state,
    { login, register }
  ]
}

export default useAuthState