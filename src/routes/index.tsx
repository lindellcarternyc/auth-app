import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ROUTES } from './constants'
import { Login, Register } from '../pages'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={ROUTES.LOGIN} exact>
        <Login />
      </Route>
      <Route path={ROUTES.REGISTER} extact>
        <Register />
      </Route>
      <Route path={ROUTES.HOME}>
        <div>HOME</div>
      </Route>
    </Switch>
  )
}

export default Routes