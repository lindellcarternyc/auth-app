import React from 'react'

import { ThemeContextProvider } from './context/theme.context'
import AppWrapper from './components/AppWrapper'
import Login from './pages/Login'

function App() {
  return (
    <ThemeContextProvider>
      <AppWrapper>
        <Login />
      </AppWrapper>
    </ThemeContextProvider>
  );
}

export default App;
