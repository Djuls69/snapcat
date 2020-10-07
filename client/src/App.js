import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
    </Switch>
  )
}

export default App
