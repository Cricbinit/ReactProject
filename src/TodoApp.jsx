// import React, { useState } from 'react';
// function TodoApp() {
//     const [todos, setTodos] = useState([]);
//     const [newTodo, setNewTodo] = useState('');
//     const addTodo = () => {
//         if (newTodo.trim() !== '') {
//             setTodos([...todos, { text: newTodo, completed: false }]);
//             setNewTodo('');
//         }
//     };
//     const deleteTodo = (index) => {
//         const updatedTodos = [...todos];
//         updatedTodos.splice(index, 1);
//         setTodos(updatedTodos);
//     };
//     const toggleTodo = (index) => {
//         const updatedTodos = [...todos];
//         updatedTodos[index].completed = !updatedTodos[index].completed;
//         setTodos(updatedTodos);
//     };
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="New task"
//                 value={newTodo}
//                 onChange={(e) => setNewTodo(e.target.value)}
//             />
//             <button onClick={addTodo}>Add</button>
//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>
//                         <span
//                             style={{
//                                 textDecoration: todo.completed ? 'line-through' :
//                                     'none'
//                             }}
//                         >
//                             {todo.text}
//                         </span>
//                         <button onClick={() => toggleTodo(index)}>
//                             {todo.completed ? 'Uncheck' : 'Check'}
//                         </button>
//                         <button onClick={() => deleteTodo(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default TodoApp;


// import React, { useState } from 'react'

// const TodoApp = () => {
//     let [todos, setTodos] = useState([]);
//     let [newTodo, setNewTodo] = useState("");
//     let addTodo = ()=>{
//      if(newTodo.trim()!== ""){
//         setTodos([...todos, {text:newTodo, completed:false}]);
//         setNewTodo("")
//      }
//     }

// let deleteTodo = (index)=>{
//     let updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos)
// }

// let toggleTodo = (index)=>{
//     let updatedTodos = [...todos];
//     updatedTodos[index].completed = !updatedTodos[index].completed;
//     setTodos(updatedTodos)
// }

//   return (
//     <div>
//         <input 
//         type="text"
//         value={newTodo}
//       onChange={(e)=>setNewTodo(e.target.value)}
//         placeholder='Entre your task'
//          />
//          <button onClick={addTodo}>Add</button>
//          <ul>
//             {todos.map((todo, index)=>{
//                 return(<>
//                 <li key={index}>
//                     <span style={{textDecoration:todo.completed? "line-through":"none"}}>{todo.text}</span>
//                     <button onClick={()=>toggleTodo(index)}>{todo.completed ? "uncheck":"check"}</button>
//                     <button onClick={()=>deleteTodo(index)}>Delete</button>
//                 </li>
//                 </>)
//             })}
//          </ul>
//     </div>
//   )
// }

// export default TodoApp

// !



import React, { useState } from 'react'
const TodoApp = () => {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");
// ~ add function start here
let addTodo = ()=>{
    if(newTodo.trim()!==""){
        setTodos([...todos, {text:newTodo, completed:false}])
        setNewTodo("")
    }
}
// ~ add function end here
// ! deletetodo start here

let deleteTodo = (index)=>{
    let updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos)
}

// ! deletetodo start here
// ~ toggle start here


let toggleTodo =(index)=>{
    let updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos)
}

// ~ toggle end here


  return (
    <div>
        <input 
        type="text"
        placeholder='enter new task'
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
         />
         <button onClick={addTodo}>Add Task</button>
         <ul>
            {todos.map((todo, index)=>{
                return(<>
                <li key={index}>
                    <span style={{textDecoration:todo.completed ? "line-through":"none"}}>{todo.text}</span>
                    <button onClick={()=>toggleTodo(index)}>{todo.completed ? "Uncheck":"check"}</button>
                    <button onClick={()=>deleteTodo(index)}>deleteTodo</button>
                </li>
                </>)
            })}
         </ul>
    </div>
  )
}

export default TodoApp