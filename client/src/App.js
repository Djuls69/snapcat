import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Register from './components/register/Register'
import Login from './components/login/Login'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
    </Switch>
  )
}

export default App
