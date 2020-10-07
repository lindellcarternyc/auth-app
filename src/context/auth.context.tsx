import React from 'react'

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

interface AuthContextValue {
  state: AuthState
  login(data: { email: string, password: string }): void
}

const AuthContext = React.createContext<AuthContextValue>({
  state: { status: 'INITIAL', user: null, error: null },
  login: () => {}
})

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = React.useState<AuthState>({ 
    status: 'INITIAL',
    user: null,
    error: null  
  })

  const login = async (data: { email: string, password: string }) => {
    setState({ status: 'LOADING', user: null, error: null })
    return new Promise((res) => {
      window.setTimeout(() => {
        res()
        setState({ status: 'SUCCESS', user: { }, error: null })
      }, 2500)
    })
  }

  return (
    <AuthContext.Provider value={{
      state, login
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext