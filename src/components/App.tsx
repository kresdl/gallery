import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Browse from './Browse'
import Mag from './Mag'

const App = () => {
  return (
    <Switch>
      <Route path="/:img">
        <Mag />
      </Route>
      <Route path="/">
        <Browse />
      </Route>
    </Switch>
  )
}

export default App