import React from 'react'
import { Redirect } from 'react-router-dom'
import { ResponsiveBox } from '../components/Box/Box'
import Container from '../components/Container/Container'

import { useAuthContext } from '../hooks/use-auth-context'
import { useThemeContext } from '../hooks/use-theme-context'
import { useWindowDimensions } from '../hooks/use-window-dimensions'
import { ROUTES } from '../routes/constants'
import ProfileView from '../views/Profile/ProfileView'

const Home: React.FC = () => {
  const [authState] = useAuthContext()
  const { width } = useWindowDimensions()
  const [mode] = useThemeContext()

  if (authState.status === 'INITIAL') {
    return <Redirect to={ROUTES.REGISTER} />
  }

  if (authState.status === 'ERROR') {
    return <p>Error!!!!!</p>
  }

  return (
    <Container margin="60px auto" width={width >= 600 ? 650 : undefined}>
      <ResponsiveBox style={{ padding: 0 }}>
        <ProfileView
          size={width >= 600 ? 'large' : 'small'}
          header={{
            title: 'Profile',
            subtitle: 'Some info may be visible to others',
            onClickEdit: () => { }
          }}
          mode={mode}
          profile={authState.user!.profile}
        />
      </ResponsiveBox>
    </Container>

  )
}

export default Home