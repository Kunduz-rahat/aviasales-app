import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Companies from './views/Companies'
import Home from './views/Home'
import Tickets from './views/Tickets'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/tickets'><Tickets /></Route>
        <Route path='/companies'><Companies /></Route>
      </Switch>
    </Router>
  )
}

export default App