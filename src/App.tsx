import React from 'react'

import { ThemeContextProvider } from './context/theme.context'
import { AuthContextProvider } from './context/auth.context'

import AppWrapper from './components/AppWrapper'
import Login from './pages/Login'

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <AppWrapper>
          <Login />
        </AppWrapper>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
