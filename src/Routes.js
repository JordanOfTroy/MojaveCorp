import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'


export default (
  <Switch>
    <Route exact path = '/' component = {Home} />
    <Route path = '/About' component = {About} />
    <Route path = '/Contact' component = {Contact} />
  </Switch>
)