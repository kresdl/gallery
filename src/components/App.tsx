import React from 'react'
import { Route } from 'react-router-dom'
import StoreContext from './StoreContext'
import Store from '../Store'
import Main from './Main'
import Mag from './Mag'

const App = () =>
  <StoreContext.Provider value={new Store()}>
    <Route path="/:img">
      <Mag />
    </Route>  
    <Route path="/">
      <Main />
    </Route>
  </StoreContext.Provider>

export default App