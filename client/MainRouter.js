import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'

class MainRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    )
  }
}

export default MainRouter
