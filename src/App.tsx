import React from 'react'

import { ThemeContextProvider } from './context/theme.context'
import { AuthContextProvider } from './context/auth.context'

import AppWrapper from './components/AppWrapper'
// import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <AppWrapper>
          {/* <Login /> */}
          <Register />
        </AppWrapper>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
