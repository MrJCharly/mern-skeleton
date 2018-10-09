import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth-helper'

const render = (props) => (
  auth.isAuthenticated() ? (
    <Component {...props}/>
  ) : (
    <Redirect to={{
      pathname: '/signin',
      state: {from: props.location}
    }} />
  )
)

const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route {...rest} render={render}
  />
}

export default PrivateRoute
