import React from 'react'

import { AuthData, AuthUser } from '../interfaces/auth.interface'

import useAuthState from '../hooks/use-auth-state'

export type AuthState = { 
  status: 'INITIAL'
  user: null
  error: null
} | {
  status: 'SUCCESS'
  user: AuthUser
  error: null
} | {
  status: 'LOADING'
  user: null
  error: null
} | {
  status: 'ERROR'
  error: any
  user: null
}

export interface AuthContextValue {
  state: AuthState
  login(data: AuthData): void
  register(data: AuthData): void
}

const AuthContext = React.createContext<AuthContextValue>({
  state: { status: 'INITIAL', user: null, error: null },
  login: () => {},
  register: () => {}
})

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, { login, register }] = useAuthState()

  return (
    <AuthContext.Provider value={{
      state, login, register
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext