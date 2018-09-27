import React from 'react'
import { hot } from 'react-hot-loader'

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello World everyone!!</h2>
      </div>
    )
  }
}

export default hot(module)(HelloWorld)
