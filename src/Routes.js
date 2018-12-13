import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'


export default (
  <Switch>
    <Route exact path = '/' component = {Landing} />
    <Route path = '/Home' component = {Home} />
    <Route path = '/About' component = {About} />
    <Route path = '/Contact' component = {Contact} />
  </Switch>
)