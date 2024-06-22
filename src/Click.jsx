import React, { Component } from 'react'
import UpdateComponent from './HOC';
 class Click extends Component {
  render() {
    let {Increment, count} = this.props

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
      </div>
    )
  }
}
export default UpdateComponent(Click);
