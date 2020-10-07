import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeContextProvider } from './context/theme.context'
import { AuthContextProvider } from './context/auth.context'

import AppWrapper from './components/AppWrapper'

import Routes from './routes'

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <ThemeContextProvider>
          <AppWrapper>
            <Routes />
          </AppWrapper>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
