import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from './core/Menu'
import Home from './core/Home'
import User from './user/User'
import Signin from './auth/Signin'

class MainRouter extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/users' component={User}/>
          <Route exact path='/signin' component={Signin}/>
        </Switch>
      </div>
    )
  }
}

export default MainRouter
