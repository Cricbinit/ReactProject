// import React, { Component } from 'react'
// import UpdateComponent from './HOC'

//  class Hover extends Component {
   
//   render() {
//     let {Increment, count} = this.props;
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onMouseOver={Increment}> Count</button>
//       </div>
//     )
//   }
// }
// export default UpdateComponent(Hover)


import React from 'react'
const Hover = ({user}) => {
  return (
    <div>
      <h1>user : {user.name}</h1>
    </div>
  )
}

export default Hover