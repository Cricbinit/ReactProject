// import React, { useContext } from 'react'
// import { MyContext } from './MyContext'

// const MyComponent = () => {
//     let {text, setText} = useContext(MyContext)
//     let {input, setInput} = useContext(MyContext)

//     let changeName = ()=>{
//         setText('hello Vivek ')
//         setInput(document.body.style.background="red")
//         setInput("")
//     }
//   return (
//     <div>
//         <h1>{text}</h1>
//         <h2>{input}</h2>
//         <button onClick={changeName}>Click me</button>
//     </div>
//   )
// }

// export default MyComponent


import React, { useContext } from 'react'
import { MyContext } from './MyContext'
const MyComponent = () => {
  let {text, setText} = useContext(MyContext)
  let chnageName = ()=>{
    setText("Hi i ma ")
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={chnageName}>Click me</button>
    </div>
  )
}
export default MyComponent