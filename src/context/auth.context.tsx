import React from 'react'
import { AuthData } from '../interfaces/auth.interface'

export type AuthState = { 
  status: 'INITIAL'
  user: null
  error: null
} | {
  status: 'SUCCESS'
  user: { }
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

const mockApiCall = () => {
  return new Promise((res) => {
    window.setTimeout(() => {
      res()
    }, 2500)
  })
}

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = React.useState<AuthState>({ 
    status: 'INITIAL',
    user: null,
    error: null  
  })

  const login = async (data: AuthData) => {
    setState({ status: 'LOADING', user: null, error: null })
    await mockApiCall()
    setState({ status: 'SUCCESS', user: {}, error: null })
  }

  const register = async (data: AuthData) => {
    setState({ status: 'LOADING', user: null, error: null })
    await mockApiCall()
    setState({ status: 'SUCCESS', user: {}, error: null })
  }

  return (
    <AuthContext.Provider value={{
      state, login, register
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext