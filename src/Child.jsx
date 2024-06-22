// import React from 'react';
// import { PropTypes } from "prop-types"
// const Child = (props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.id}</h1>
//             <h1>{props.age}</h1>
//             <h1>{props.skills}</h1>
//         </div>
//     );
// }


// Child.defaultProps = {
// name:"rohit",
// id:"12",
// age:45

// }

// Child.propTypes = {
//     name:PropTypes.string,
//     skills:PropTypes.object
// }

// export default Child;



// import React from 'react'
// import { PropTypes } from 'prop-types';

// const Child = (props) => {
//   return (
//     <div>
//         <h1>{props.name}</h1>
//         <h1>{props.id}</h1>
//         <h2>{props.work}</h2>
//     </div>
//   )
// }

// export default Child

// Child.defaultProps = {
//     name:"xyz",
//     id:1001
// }

// Child.propTypes={
//     name:PropTypes.string,
//     id:PropTypes.number
// }



// ~ 
// import React from 'react'

// const Child = ({state}) => {
//   return (
//     <div>
//         {state ? (<>
//         <h1>HI i am login page</h1>
//         </>):(<>
//         Hi i am logout page</>)}
//     </div>
//   )
// }

// export default Child




// import React from 'react'

// const Child = ({isTaskDone, task}) => {
//   return (
//     <div>
//         {isTaskDone ? task + "✔️":task +"❌"}
//     </div>
//   )
// }

// export default Child



import React from 'react'

const Child = ({user}) => {
  return (
    <div>
      <h1>{user.age}</h1>
    </div>
  )
}

Child.defaultProps = {

age :200

}

export default Child