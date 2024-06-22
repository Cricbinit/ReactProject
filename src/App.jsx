// // // import React, { useRef } from 'react';

// // // const App = () => {
// // // let inputRef = useRef(null)

// // // let handleSubmit = (e)=>{
// // //     e.preventDefault()
// // //     console.log(inputRef.current.value)
// // //     let name = inputRef.current.value;
// // //     console.log(name)
// // //     localStorage.setItem("Name", name)
// // // }
// // //     return (
// // //         <div>
// // //         <h1>unControlled Components</h1>
// // //         <form action="" onSubmit={handleSubmit}>
// // //             <label htmlFor="Name">Name:</label>
// // //             <br />
// // //             <input type="text" ref={inputRef} id='Name' />
// // //             <br />
// // //             <br />
// // //             <button type="submit">Click me</button>
// // //         </form>
// // //         </div>
// // //     );
// // // }

// // // export default App;


// // // import React, { useState } from 'react';

// // // const App = () => {
// // //     let [name , setName] = useState("")
// // //     let [pwd , setPwd] = useState("")

// // //     let handleSubmit = (e)=>{
// // //         e.preventDefault()
// // //         console.log(name, pwd)
// // //   localStorage.setItem("NAME", name)


// // //     }
// // //     return (
// // //         <div>
// // //             <form action="" onSubmit={handleSubmit}>
// // //                 <h1>SignUp</h1>
// // //                 <label htmlFor="name">Name:</label>
// // //                 <br />
// // //                 <input type="text" name='name' value={name} onChange={(e)= />{setName(e.target.value)}} />
// // //                 <br /><br />
// // //                 <label htmlFor="pwd">Name:</label>
// // //                 <br />
// // //                 <input type="password" name='pwd' value={pwd} onChange={(e)= />{setPwd(e.target.value)}} />
// // //                 <br /><br />
// // //                 <button type='submit'>Click me</button>
// // //             </form>
// // //         </div>
// // //     );
// // // }

// // // export default App;

// // // ! FORM VALIDAATION
// // // import React, { useState } from 'react';
// // // import "./Global.css"
// // // const App = () => {
// // //   const [formData, setFormData] = useState({
// // //     username: '',
// // //     email: '',
// // //     password: '',
// // //   });

// // //   const [errors, setErrors] = useState({});

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Validate the form data
// // //     const validationErrors = validateForm(formData);
// // //     setErrors(validationErrors);

// // //     // If there are no errors, submit the form
// // //     if (Object.keys(validationErrors).length === 0) {
// // //       // Perform form submission logic here
// // //       console.log('Form submitted:', formData);
// // //     }
// // //   };

// // //   const validateForm = (data) => {
// // //     let errors = {};

// // //     // Example validation rules
// // //     if (!data.username.trim()) {
// // //       errors.username = 'Username is required';
// // //     }

// // //     if (!data.email.trim()) {
// // //       errors.email = 'Email is required';
// // //     } else if (!isValidEmail(data.email)) {
// // //       errors.email = 'Invalid email format';
// // //     }

// // //     if (!data.password.trim()) {
// // //       errors.password = 'Password is required';
// // //     }

// // //     return errors;
// // //   };

// // //   const isValidEmail = (email) => {
// // //     // Simple email validation regex
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //     return emailRegex.test(email);
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Form Validation Example</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <div>
// // //           <label htmlFor="username">Username:</label>
// // //           <input
// // //             type="text"
// // //             id="username"
// // //             name="username"
// // //             value={formData.username}
// // //             onChange={handleChange}
// // //           />
// // //           {errors.username && <div className="error">{errors.username}</div>}
// // //         </div>
// // //         <div>
// // //           <label htmlFor="email">Email:</label>
// // //           <input
// // //             type="text"
// // //             id="email"
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //           />
// // //           {errors.email && <div className="error">{errors.email}</div>}
// // //         </div>
// // //         <div>
// // //           <label htmlFor="password">Password:</label>
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             name="password"
// // //             value={formData.password}
// // //             onChange={handleChange}
// // //           />
// // //           {errors.password && <div className="error">{errors.password}</div>}
// // //         </div>
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // // &
// // // import React, { useState } from 'react';
// // // import './Global.css';

// // // const App = () => {
// // //   const [formData, setFormData] = useState({
// // //     firstName: '',
// // //     lastName: '',
// // //     email: '',
// // //     password: '',
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Perform form submission logic here
// // //     console.log('Form submitted:', formData);
// // //   };

// // //   return (
// // //     <div className="beautiful-form-container">
// // //       <h1>Beautiful Form</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <div className="form-group">
// // //           <label htmlFor="firstName">First Name:</label>
// // //           <input
// // //             type="text"
// // //             id="firstName"
// // //             name="firstName"
// // //             value={formData.firstName}
// // //             onChange={handleChange}
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="lastName">Last Name:</label>
// // //           <input
// // //             type="text"
// // //             id="lastName"
// // //             name="lastName"
// // //             value={formData.lastName}
// // //             onChange={handleChange}
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="email">Email:</label>
// // //           <input
// // //             type="email"
// // //             id="email"
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //           />
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="password">Password:</label>
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             name="password"
// // //             value={formData.password}
// // //             onChange={handleChange}
// // //           />
// // //         </div>
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default App;
// // //;

// // // import React, { useState } from 'react';
// // // const quizData = [
// // //     {
// // //         question: 'What is the capital of France?',
// // //         options: ['London', 'Paris', 'Berlin', 'Madrid'],
// // //         correctAnswer: 'Paris',
// // //     },
// // //     {
// // //         question: 'Which planet is known as the Red Planet?',
// // //         options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
// // //         correctAnswer: 'Mars',
// // //     },
// // //     {
// // //         question: 'What is the largest mammal in the world?',
// // //         options: ['Elephant', 'Giraffe', 'Whale', 'Dolphin'],
// // //         correctAnswer: 'Whale',
// // //     },
// // // ];
// // // function QuizApp() {
// // //     const [currentQuestion, setCurrentQuestion] = useState(0);
// // //     const [score, setScore] = useState(0);
// // //     const [showScore, setShowScore] = useState(false);
// // //     const handleAnswerClick = (selectedAnswer) => {
// // //         if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
// // //             setScore(score + 1);
// // //         }
// // //         const nextQuestion = currentQuestion + 1;
// // //         if (nextQuestion < quizData.length) {
// // //             setCurrentQuestion(nextQuestion);
// // //         } else {
// // //             setShowScore(true);
// // //         }
// // //     };
// // //     const restartQuiz = () => {
// // //         setCurrentQuestion(0);
// // //         setScore(0);
// // //         setShowScore(false);
// // //     };
// // //     return (
// // //         <div>
// // //             {showScore ? (
// // //                 <div>
// // //                     <h2>Your Score: {score}/{quizData.length}</h2>
// // //                     <button onClick={restartQuiz}>Restart Quiz</button>
// // //                 </div>
// // //             ) : (
// // //                 <div>
// // //                     <h2>Question {currentQuestion + 1}</h2>
// // //                     <p>{quizData[currentQuestion].question}</p>
// // //                     <ul>
// // //                         {quizData[currentQuestion].options.map((option, index) => (
// // //                             <li key={index}>
// // //                                 <button onClick={() =>
// // //                                     handleAnswerClick(option)}>{option}</button>
// // //                             </li>
// // //                         ))}
// // //                     </ul>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // }
// // // export default QuizApp;


// // // import React from 'react';
// // // import Child from './Child';

// // // const App = () => {
// // //     return (
// // //         <div>
// // //             <Child name="Vivek" id="2" age="45" skills={true} />
// // //             <Child  id="2"/>
// // //         </div>
// // //     );
// // // }
// // // export default App;

// // // !===============================================================
// // // import React from 'react';
// // // import Click from './Click';

// // // const App = () => {
// // //     return (
// // //         <div>
// // //             <Click/>
// // //         </div>
// // //     );
// // // }

// // // export default App;

// // // import React from 'react'
// // // import HOC from './HOC'

// // // const App = () => {
// // //   return (
// // //     <div>
// // //         <HOC/>
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React, { useState } from 'react'
// // // import COUNTRY from "./Country.json"

// // // const App = () => {
// // //   let [state, setState] = useState({
// // //     firstname:"",
// // //     comments:"",
// // //     priceRange:"",
// // //     gender:"",
// // //     skills:"",
// // //     countries:"",
// // //     loading:false
// // //   })

// // //  let [photo, setPhoto] = useState("");
// // //  let [show, setShow] = useState(false)
// // //  let[photoview, setPhotoView] = useState("")
// // // let [country, setCountry] = useState(COUNTRY)

// // // let [languages, setLanguages] = useState([
// // //   "HTML",
// // //   "CSS",
// // //   "JavaScript"
// // // ])
// // // let hanldeChange = (e)=>{
// // //   let {name, value} = e.target;
// // //   setState({...state, [name]:value})
// // // }

// // // let handleFileChange = (e)=>{
// // //   setShow(true)
// // //   let files = e.target.files[0]
// // //   let reader = new FileReader();
// // //   reader.readAsDataURL(files)
// // //   reader.onload = (evt)=>{
// // //     setPhotoView(evt.target.result)
// // //   }
// // //   setPhoto(files)
// // // }
// // // let handleSubmit = (e)=>{
// // //   e.preventDefault()
// // //   try {
// // //     setState({loading:true})
// // //     console.log({state, photo})
// // //   } catch (error) {
// // //     console.log(error)
// // //   }

// // //   setState({firstname:"", comments:"", countries:"", priceRange:"", skills:"", loading:false, gender:""})
// // // }

// // // let{firstname, comments, skills, countries, priceRange, loading  ,gender} = state;

// // //   return (
// // //     <div>
// // //       <form action="" onSubmit={handleSubmit}>
// // //         <div>
// // //           <label htmlFor="">Name</label>
// // //           <input type="text" 
// // //           name='firstname'
// // //           value={firstname}
// // //           onChange={hanldeChange}
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Comments</label>
// // //           <textarea 
// // //           name="comments"  
// // //           value={comments}
// // //           id="" cols="30" rows="10" onChange={hanldeChange}></textarea>
// // //         </div>
// // //         <div>
// // //           <label htmlFor="">Skills:</label>
// // //           <select 
// // //           name="skills" 
// // //           id=""
// // //           value={skills}
// // //           onChange={hanldeChange}
// // //           >
// // //             {languages.map((skills, index)=>{
// // //               return(<>
// // //               <React.Fragment key={index+1}>
// // //                 <option value={skills}>{skills}</option>
// // //               </React.Fragment>
// // //               </>)
// // //             })}
// // //           </select>
// // //         </div>

// // //         <div>
// // //           <label htmlFor="">Country</label>
// // //           <select 
// // //           name="countries" 
// // //           value={countries}
// // //           id=""
// // //           onChange={hanldeChange}
// // //           >
// // //             {country.map((c)=>{
// // //               return(<>
// // //               <React.Fragment key={c.id}>
// // //                 <option value={c.name}>{c.name}</option>

// // //               </React.Fragment>
// // //               </>)
// // //             })}
// // //           </select>
// // //         </div>
// // //         <div>
// // //           <label htmlFor="">Gender</label>
// // //           <input 
// // //           type="radio"
// // //           name='gender'
// // //           value="Male"
// // //           onChange={hanldeChange}
// // //            />
// // //            Male
// // //            <input 
// // //            type="radio"
// // //            name='gender'
// // //            value="Female"
// // //            onChange={hanldeChange}
// // //             />
// // //             Female
// // //         </div>
// // //         <div>
// // //           <label htmlFor="">Price</label>
// // //           <input 
// // //           type="range"
// // //           name='priceRange'
// // //           value={priceRange}
// // //           max={1000}
// // //           min={100}
// // //           onChange={hanldeChange}
// // //            />
// // //           {priceRange}
// // //         </div>
// // //         {/* !!!!!!! */}
// // //         <div>
// // //         <button type="submit">  {loading ? "Loading...":"login"}</button>
// // //         </div>
// // //       </form>
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React, { useEffect, useState } from 'react'

// // // const App = () => {
// // //   let [count, setCount] = useState(0)

// // //   useEffect(()=>{
// // //     document.title = `you cliked ${count} times`
// // //   })
// // //   return (
// // //     <div>
// // //       <h1>{count}</h1>
// // //       <button onClick={()=>setCount(count+1)}>+</button>
// // //     </div>
// // //   )
// // // }

// // // export default App

// import React, { useState } from 'react'
// import { MyContext } from './MyContext';
// import MyComponent from './MyComponent';
// const App = () => {
//   let [text, setText] = useState("");
//   let [input, setInput] = useState("");
//   return (
//     <div>
//     <MyContext.Provider value={{text, setText, input, setInput}}>
//       <MyComponent/>
//     </MyContext.Provider>
//     </div>
//   )
// }
// export default App

// // // ~
// // // import React, { useState } from 'react'
// // // let quizSData = [
// // //   {
// // //     question: "What is the capital of INdia",
// // //     options: ["Delhi", "Kolkata", "Mumbai", "Bangalore"],
// // //     correctAnswer: "Delhi"
// // //   },
// // //   {
// // //     question: "What is the capital of Uttar pardesh",
// // //     options: ["Delhi", "Lucknow", "Mumbai", "Bangalore"],
// // //     correctAnswer: "Lucknow"
// // //   },
// // //   {
// // //     question: "What is the capital of Maharastra",
// // //     options: ["Delhi", "Kolkata", "Mumbai", "Bangalore"],
// // //     correctAnswer: "Mumbai"
// // //   },
// // //   {
// // //     question: "What is the capital of West Bengal",
// // //     options: ["Delhi", "Kolkata", "Mumbai", "Bangalore"],
// // //     correctAnswer: "Kolkata"
// // //   }
// // // ]

// // // const App = () => {


// // //   let [currentQuestion, setCurrentQuestion] = useState(0)
// // //   let [score, setScore] = useState(false);

// // //   let [showScore, setShowScore] = useState(0);

// // //   // ! 
// // //   let handleAnswerClick = (selectAnswer) => {
// // //     if (selectAnswer === quizSData[currentQuestion].correctAnswer) {
// // //       setScore(score + 1)
// // //     }
// // //   }

// // //   // !

// // //   let nextQuestion = currentQuestion + 1;
// // //   if (nextQuestion < quizSData.length) {
// // //     setCurrentQuestion(nextQuestion)
// // //   } else {
// // //     setShowScore(true)
// // //   }


// // //   // !

// // //   let restartQuiz = () => {
// // //     setCurrentQuestion(0);
// // //     setCurrentQuestion(0)
// // //     setShowScore(false)
// // //   }





// // //   return (
// // //     <div>
// // //       {showScore ? (<>

// // //         <h2>Your score is : {score}/{quizSData.length}</h2>
// // //         <button onClick={restartQuiz}>Restart Quiz</button>

// // //       </>) : (<>

// // //         <h2>Quwestion:{currentQuestion + 1}</h2>
// // //         <p>{quizSData[currentQuestion].question}</p>
// // //         <ul>{quizSData[currentQuestion].options.map((option, index) => {

// // //           <li key={index}>

// // //             <button onClick={() => {
// // //               handleAnswerClick(option)
// // //             }}>{option}</button>
// // //           </li>

// // //         })}</ul>

// // //       </>)}
// // //     </div>
// // //   )
// // // }

// // // export default App






// // // import React, { useState } from 'react';
// // // const quizData = [
// // //   {
// // //     question: 'What is the capital of France?',
// // //     options: ['London', 'Paris', 'Berlin', 'Madrid'],
// // //     correctAnswer: 'Paris',
// // //   },
// // //   {
// // //     question: 'Which planet is known as the Red Planet?',
// // //     options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
// // //     correctAnswer: 'Mars',
// // //   },
// // //   {
// // //     question: 'What is the largest mammal in the world?',
// // //     options: ['Elephant', 'Giraffe', 'Whale', 'Dolphin'],
// // //     correctAnswer: 'Whale',
// // //   },
// // // ];
// // // function App() {
// // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // //   const [score, setScore] = useState(0);
// // //   const [showScore, setShowScore] = useState(false);
// // //   const handleAnswerClick = (selectedAnswer) => {
// // //     if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
// // //       setScore(score + 1);
// // //     }
// // //     const nextQuestion = currentQuestion + 1;
// // //     if (nextQuestion < quizData.length) {
// // //       setCurrentQuestion(nextQuestion);
// // //     } else {
// // //       setShowScore(true);
// // //     }
// // //   };
// // //   const restartQuiz = () => {
// // //     setCurrentQuestion(0);
// // //     setScore(0);
// // //     setShowScore(false);
// // //   };
// // //   return (
// // //     <div>
// // //       {showScore ? (
// // //         <div>
// // //           <h2>Your Score: {score}/{quizData.length}</h2>
// // //           <button onClick={restartQuiz}>Restart Quiz</button>
// // //         </div>
// // //       ) : (
// // //         <div>
// // //           <h2>Question {currentQuestion + 1}</h2>
// // //           <p>{quizData[currentQuestion].question}</p>
// // //           <ul>
// // //             {quizData[currentQuestion].options.map((option, index) => (
// // //               <li key={index}>
// // //                 <button onClick={() =>
// // //                   handleAnswerClick(option)}>{option}</button>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // // export default App



// // // import React, { useState } from 'react'
// // // const quizData = [
// // //     {
// // //       question: 'What is the capital of France?',
// // //       options: ['London', 'Paris', 'Berlin', 'Madrid'],
// // //       correctAnswer: 'Paris',
// // //     },
// // //     {
// // //       question: 'Which planet is known as the Red Planet?',
// // //       options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
// // //       correctAnswer: 'Mars',
// // //     },
// // //     {
// // //       question: 'What is the largest mammal in the world?',
// // //       options: ['Elephant', 'Giraffe', 'Whale', 'Dolphin'],
// // //       correctAnswer: 'Whale',
// // //     },
// // //   ];

// // // const App = () => {
// // //   let [score, setScore] = useState(0);
// // //   let[showscore, setShowScore] = useState(false);
// // //   let [currentQuestion, setCurrentQuestion] = useState(0)


// // // let handleAnswer = (selectAnswer)=>{
// // //   if(selectAnswer===quizData[currentQuestion].correctAnswer){
// // //     setScore(score+1)
// // //   }

// // //   let nextQuestion = currentQuestion+1;
// // //   if(nextQuestion<quizData.length){
// // //     setCurrentQuestion(nextQuestion)
// // //   }else{
// // //     setShowScore(true)
// // //   }
// // // }

// // // let RestartQuiz = ()=>{
// // //   setCurrentQuestion(0)
// // //   score(0)
// // // setShowScore(0)
// // // }

// // //   return (
// // //     <div>
// // //       {showscore ? (<>

// // //       <h2> Your Score:{score}/{quizData.length}</h2>
// // //       <button onClick={RestartQuiz}>Restart Quizz</button>

// // //       </>):(<>

// // //       <h1>Questions:{currentQuestion+1}</h1>
// // //       <p>{quizData[currentQuestion].question}</p>
// // // <ul>
// // //   {quizData[currentQuestion].options.map((option, index)=>{
// // //   return(<>
// // //     <li key={index}>
// // //       <button onClick={()=>{handleAnswer(option)}}>
// // //         {option}
// // //       </button>
// // //     </li>
// // //   </>)
// // //   })}
// // // </ul>

// // //       </>)}
// // //     </div>
// // //   )
// // // }

// // // export default App

// // // import React, { useState } from 'react'

// // // const quizData = [ 
// // //   { 
// // //   question: 'What is the capital of France?', 
// // //   options: ['London', 'Paris', 'Berlin', 'Madrid'], 
// // //   correctAnswer: 'Paris', 
// // //   },
// // //   { 
// // //   question: 'Which planet is known as the Red Planet?', 
// // //   options: ['Earth', 'Mars', 'Venus', 'Jupiter'], 
// // //   correctAnswer: 'Mars', 
// // //   },
// // //   { 
// // //   question: 'What is the largest mammal in the world?', 
// // //   options: ['Elephant', 'Giraffe', 'Whale', 'Dolphin'], 
// // //   correctAnswer: 'Whale', 
// // //   },
// // //  ];

// // // const App = () => {

// // //  let [score, setScore] = useState(0);
// // //  let [showscore, setShowScore] = useState(false);
// // //  let [currentQuestion, setCorrectQuestions] = useState(0)

// // // let handleAnswer = (selectAnswer)=>{
// // //   if(selectAnswer = quizData[currentQuestion].correctAnswer){
// // // setScore(score+1)
// // //   }

// // //   let nextQuestion = currentQuestion+1;
// // //   if(nextQuestion<quizData.length){
// // //     setCorrectQuestions(nextQuestion)
// // //   }else{
// // //     setShowScore(true)
// // //   }
// // // }


// // // let RestartQuizz = ()=>{
// // //   setCorrectQuestions(0)
// // //   setScore(0)
// // //   setShowScore(false)
// // // }

// // //   return (
// // //     <div>
// // //       {showscore ? (<>
// // //       <h2>Your score :{score}/{quizData.length}</h2>
// // //       <button onClick={RestartQuizz}>Restart Quiz</button>
// // //       </>):(<>


// // // <h2>Your Question:{currentQuestion+1}</h2>

// // // <p>{quizData[currentQuestion].question}</p>
// // // <ul>
// // //   {quizData[currentQuestion].options.map((option, index)=>{
// // // return(<>
// // // <li key={index}>
// // //   <button onClick={()=>{handleAnswer(option)}}>{option}</button>
// // // </li>
// // // </>)
// // //   })}
// // // </ul>
// // //       </>)}
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React, { useState } from 'react'
// // // let quizData = [
// // //   {
// // //     Question:"What is the capital of West Bengal",
// // //     options:["Delhi", "Kolkata", "Mumbai", "Bangalore"],
// // //   correctAnswer:"Kolkata"
// // //   },
// // //   {
// // //     Question:"What is the capital of  Maharastra",
// // //     options:["Delhi", "Kolkata", "Mumbai", "Bangalore"],
// // //   correctAnswer:"Mumbai"
// // //   },
// // //   {
// // //     Question:"What is the capital of Karnataka",
// // //     options:["Delhi", "Kolkata", "Mumbai", "Bangalore"],
// // //   correctAnswer:"Bangalore"
// // //   },

// // // ]


// // // const App = () => {


// // //  let [score, setScore] = useState(0)
// // //  let [showscore, setShowScore] = useState(false); 
// // // let [currentQuestion, setCurrentQuestion] = useState(0);


// // // let handleAnswer = (selectAnswer)=>{

// // //   if(selectAnswer === quizData[currentQuestion].correctAnswer){
// // //     setScore(score+1)
// // //   }
// // //   let nextQuestion = currentQuestion+1;
// // //   if(nextQuestion < quizData.length){
// // //     setCurrentQuestion(currentQuestion)
// // //   }else{
// // //     setShowScore(true)
// // //   }

// // // }

// // // let RestartQuiz = ()=>{
// // //   setCurrentQuestion(0)
// // //   setScore(0)
// // //   setShowScore(false)
// // // }




// // //   return (
// // //     <div>
// // //       {showscore ? (<>

// // //       <div>
// // //         <h2>Your score is :{score}/{quizData.length}</h2>
// // //         <button onClick={RestartQuiz}>Restart Quizz </button>
// // //       </div>
// // //       </>):(<>

// // //       <div>
// // //         <h1>Your Questions: {currentQuestion+1}</h1>
// // //         <p>{quizData[currentQuestion].Question}</p>
// // //         <ul>
// // //        {quizData[currentQuestion].options.map((option, index)=>{
// // //         return(<>
// // //         <li key={index}>
// // //           <button onClick={()=>{handleAnswer(option)}}>{option}</button>
// // //         </li>
// // //         </>)
// // //        })}
// // //         </ul>
// // //       </div>

// // //       </>)}
// // //     </div>
// // //   )
// // // }

// // // export default App



// // // import React, { useState } from 'react'
// // // let quizData = [
// // //   {
// // //     Question:"What is the capital of West Bengal",
// // //     options:["Delhi", "Kolkata", "Mumbai", "Bangalore"],
// // //   correctAnswer:"Kolkata"
// // //   },
// // //   {
// // //     Question:"What is the capital of  Maharastra",
// // //     options:["Delhi", "Kolkata", "Mumbai", "Bangalore"],
// // //   correctAnswer:"Mumbai"
// // //   },
// // //   {
// // //     Question:"What is the capital of Karnataka",
// // //     options:["Delhi", "Kolkata", "Mumbai", "Bangalore"],
// // //   correctAnswer:"Bangalore"
// // //   },

// // // ]
// // // const App = () => {

// // //  let [score, setScore] = useState(0)
// // //  let [showScore, setShowScore] = useState(false)
// // //  let [currentQuestion, setCurrentQuestion] = useState(0)


// // // let handleAnswer = (selectAnswer)=>{
// // // if(selectAnswer === quizData[currentQuestion].correctAnswer){
// // //   setScore(score+1)
// // // }
// // // let nextQuestion = currentQuestion+1;
// // // if(nextQuestion < quizData.length){
// // //   setCurrentQuestion(nextQuestion)
// // // }else{
// // //   setShowScore(true)
// // // }
// // // }


// // // let RestartQuiz = ()=>{
// // //   setCurrentQuestion(0)
// // //   setScore(0)
// // //   setShowScore(false)
// // // }

// // //   return (
// // //     <div>

// // // {showScore ? (<>

// // // <h2>Your score is :{score}/{quizData.length}</h2>
// // // <button onClick={RestartQuiz}>Restart Quiz</button>

// // // </>):(<>

// // // <div>

// // //   <h2>Your Questions {currentQuestion+1}</h2>
// // //   <p>{quizData[currentQuestion].Question}</p>
// // //   <ul>
// // //     {quizData[currentQuestion].options.map((option, index)=>{
// // //       return(<>
// // //       <li key={index}>
// // //         <button onClick={()=>{
// // //           handleAnswer(option)
// // //         }}>{option}</button>
// // //       </li>
// // //       </>)
// // //     })}
// // //   </ul>
// // // </div>

// // // </>)}

// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React from 'react'
// // // import TemperatureConverter from './TemperatureConverter';

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <TemperatureConverter/>
// // //     </div>
// // //   )
// // // }

// // // export default App

// // // import React from 'react'
// // // import PhotoGallery from './PhotoGallery'

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <PhotoGallery/>
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React from 'react'
// // // import Form from './Form';

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <TodoApp/>
// // //       <Form/>
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // ~ crud 
// // // import React, { useState, useEffect } from 'react';
// // // import  axios  from 'axios';

// // // const App = () => {
// // //   const [data, setData] = useState([]);
// // //   const [newItem, setNewItem] = useState('');

// // //   useEffect(() => {
// // //     // Fetch data from the server when the component mounts
// // //     axios.get('http://localhost:5000/api/items')
// // //       .then(response => setData(response.data))
// // //       .catch(error => console.error('Error fetching data:', error));
// // //   }, []); // Run this effect only once when the component mounts

// // //   const handleCreate = () => {
// // //     // Create a new item on the server
// // //     axios.post('http://localhost:5000/api/items', { text: newItem })
// // //       .then(response => {
// // //         setData([...data, response.data]);
// // //         setNewItem('');
// // //       })
// // //       .catch(error => console.error('Error creating item:', error));
// // //   };

// // //   const handleUpdate = (id, updatedValue) => {
// // //     // Update an item on the server
// // //     axios.put(`http://localhost:5000/api/items/${id}`, { text: updatedValue })
// // //       .then(response => {
// // //         setData(data.map(item => (item.id === id ? response.data : item)));
// // //       })
// // //       .catch(error => console.error('Error updating item:', error));
// // //   };

// // //   const handleDelete = (id) => {
// // //     // Delete an item on the server
// // //     axios.delete(`http://localhost:5000/api/items/${id}`)
// // //       .then(() => {
// // //         setData(data.filter(item => item.id !== id));
// // //       })
// // //       .catch(error => console.error('Error deleting item:', error));
// // //   };

// // //   return (
// // //     <div>
// // //       <input
// // //         type="text"
// // //         value={newItem}
// // //         onChange={(e) => setNewItem(e.target.value)}
// // //       />
// // //       <button onClick={handleCreate}>Add Item</button>

// // //       <ul>
// // //         {data.map((item) => (
// // //           <li key={item.id}>
// // //             {item.text}
// // //             <button onClick={() => handleUpdate(item.id, prompt('Enter new value:'))}>
// // //               Update
// // //             </button>
// // //             <button onClick={() => handleDelete(item.id)}>Delete</button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default App;




// // // import React from 'react'
// // // import TodoApp from './TodoApp';

// // // const App = () => {
// // //   return (
// // //     <div><TodoApp/></div>
// // //   )
// // // }

// // // export default App



// import React, { useState } from 'react'
// import COUNTRY from "./Country.json"

// const App = () => {
//   let [state, setState] = useState({
//     firstname:"",
//     comments:"",
//     priceRange:"",
//     gender:"",
//     skills:"",
//     countries:"",
//     loading:false
//   })

//  let [photo, setPhoto] = useState("");
//  let [show, setShow] = useState(false)
//  let[photoview, setPhotoView] = useState("")
// let [country, setCountry] = useState(COUNTRY)

// let [languages, setLanguages] = useState([
//   "HTML",
//   "CSS",
//   "JavaScript"
// ])
// let hanldeChange = (e)=>{
//   let {name, value} = e.target;
//   setState({...state, [name]:value})
// }

// let handleFileChange = (e)=>{
//   setShow(true)
//   let files = e.target.files[0]
//   let reader = new FileReader();
//   reader.readAsDataURL(files)
//   reader.onload = (evt)=>{
//     setPhotoView(evt.target.result)
//   }
//   setPhoto(files)

// }

// let handleSubmit = (e)=>{
//   e.preventDefault()
//   try {
//     setState({loading:true})
//     console.log({state, photo})
//   } catch (error) {
//     console.log(error)
//   }

//   setState({firstname:"", comments:"", countries:"", priceRange:"", skills:"", loading:false, gender:""})
// }

// let{firstname, comments, skills, countries, priceRange, loading  ,gender} = state;

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="">Name</label>
//           <input type="text" 
//           name='firstname'
//           value={firstname}
//           onChange={hanldeChange}
//           />
//         </div>
//         <div>
//           <label>Comments</label>
//           <textarea 
//           name="comments"  
//           value={comments}
//           id="" cols="30" rows="10" onChange={hanldeChange}></textarea>
//         </div>
//         <div>
//           <label htmlFor="">Skills:</label>
//           <select 
//           name="skills" 
//           id=""
//           value={skills}
//           onChange={hanldeChange}
//           >
//             {languages.map((skills, index)=>{
//               return(<>
//               <React.Fragment key={index+1}>
//                 <option value={skills}>{skills}</option>
//               </React.Fragment>
//               </>)
//             })}
//           </select>
//         </div>

//         <div>
//           <label htmlFor="">Country</label>
//           <select 
//           name="countries" 
//           value={countries}
//           id=""
//           onChange={hanldeChange}
//           >
//             {country.map((c)=>{
//               return(<>
//               <React.Fragment key={c.id}>
//                 <option value={c.name}>{c.name}</option>

//               </React.Fragment>
//               </>)
//             })}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="">Gender</label>
//           <input 
//           type="radio"
//           name='gender'
//           value="Male"
//           onChange={hanldeChange}
//            />
//            Male
//            <input 
//            type="radio"
//            name='gender'
//            value="Female"
//            onChange={hanldeChange}
//             />
//             Female
//         </div>
//         <div>
//           <label htmlFor="">Price</label>
//           <input 
//           type="range"
//           name='priceRange'
//           value={priceRange}
//           max={1000}
//           min={100}
//           onChange={hanldeChange}
//            />
//           {priceRange}
//         </div>
//         {/* !!!!!!! */}
//         <div>
//         <button type="submit">  {loading ? "Loading...":"login"}</button>
//         </div>
//       </form>
//     </div>
//   )
// }
// export default App



// import React from "react";
// import { useFormInputValidation } from "react-form-input-validation";

// const App = () => {
//   const [fields, errors, form] = useFormInputValidation({
//     customer_name: "",
//     email_address: "",
//     phone_number: "",
//     priceRange:""
//   }, {
//     customer_name: "required",
//     email_address: "required|email",
//     phone_number: "required|numeric|digits_between:10,12",
//     priceRange:"required|numeric|range:0-1000"
//   });
//   const onSubmit = async (event) => {
//     const isValid = await form.validate(event);
//     if (isValid) {
//       // console.log(fields, errors);
//       // Perform api call here
//     }
//   }
  
//   return <div style={{maxWidth: "600px", margin: "0 auto"}}>
//   <h3>React Form Input Validation - validate</h3>
//   <form
//     className="myForm"
//     noValidate
//     autoComplete="off"
//     onSubmit={onSubmit}
//   >
//     <p>
//       <label>
//         Name
//         <input
//           type="text"
//           name="customer_name"
//           onBlur={form.handleBlurEvent}
//           onChange={form.handleChangeEvent}
//           value={fields.customer_name}
//       />
//       </label>
//       <label className="error">
//         {errors.customer_name
//           ? errors.customer_name
//           : ""}
//       </label>
//     </p>
//     {/* !========================= */}
//     <p>
//       <label>
//         Price
//         <input
//           type="text"
//           name="priceRange"
//           onBlur={form.handleBlurEvent}
//           onChange={form.handleChangeEvent}
//           value={fields.priceRange}
//       />
//       </label>
//       <label className="error">
//         {errors.priceRange
//           ? errors.priceRange
//           : ""}
//       </label>
//     </p>
//     {/* ============================================ */}
//     <p>
//       <label>
//         Phone
//         <input
//           type="tel"
//           name="phone_number"
//           onBlur={form.handleBlurEvent}
//           onChange={form.handleChangeEvent}
//           value={fields.phone_number}
//         />
//       </label>
//       <label className="error">
//         {errors.phone_number
//           ? errors.phone_number
//           : ""}
//       </label>
//     </p>

//     <p>
//       <label>
//         Email
//         <input
//           type="email"
//           name="email_address"
//           onBlur={form.handleBlurEvent}
//           onChange={form.handleChangeEvent}
//           value={fields.email_address}
//         />
//       </label>
//       <label className="error">
//         {errors.email_address
//           ? errors.email_address
//           : ""}
//       </label>
//     </p>

//     <p>
//       <button type="submit">Submit</button>
//     </p>
//   </form>
// </div>
// }

// export default App;



// // // import React from 'react'
// // // import Child from './Child';
// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <Child  id ={123} work={true}/>
// // //       <Child name="Vivek Kumar"/>
// // //     </div>
// // //   )
// // // }
// // // export default App

// // // ! Conditonal rendering

// // // import React, { useState } from 'react'
// // // import Child from './Child';

// // // const App = () => {
// // //   let [state, setState] = useState(false)
// // //   return (
// // //     <div>
// // //       <Child state={state}/>
// // //     </div>
// // //   )
// // // }
// // // export default App



// ! CONDITIONAL RENDERING

// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   let [isLoggedIn, setIsLoggedIn] = useState(false)
// let handleLogin = ()=>{
//   setIsLoggedIn(true)
// }
// let handleLogout = ()=>{
//   setIsLoggedIn(false)
// }
//   return (
//     <section>
//       {isLoggedIn ? (<>
//       <h1>Welcome to our page</h1>
//       <button onClick={handleLogout}>Logout</button>
//       </>):(<>
// <h1>WElcome to login page</h1>
// <button onClick={handleLogin}>Login</button>
//       </>)}
//     </section>
//   )
// }

// export default App



// // // !


// // // import React from 'react'
// // // import { useState } from 'react'

// // // const App = () => {

// // //   let [show, setHide] = useState(false);
// // //   let ToggelButton = ()=>{
// // // setHide(!show)
// // //   }
// // //   return (
// // //     <div>
// // //       <button onClick={ToggelButton}>PlayHide&Show</button>
// // //       {show ? (<div>
// // //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod modi alias saepe dicta similique vero corporis voluptatum! Ipsum recusandae obcaecati quam, totam nostrum vero. Earum a nostrum autem nulla numquam.
// // //       </div>):(<div>
// // //         <h1>Null</h1>
// // //       </div>)}
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // 


// // // import React from 'react'
// // // import AudioPlayer from './AudioPlayer'

// // // const App = () => {
// // //   return (
// // //     <div>
// // //     <AudioPlayer/>
// // //     </div>
// // //   )
// // // }
// // // export default App


// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {
// //   let [data, setData] = useState({user:"", pass:""})
// //   let [error, setError] = useState({})

// // let handleChange = (e)=>{
// // let {name, value } = e.target.value;
// // setData({...data, [name]:value})
// //  }

// //  let sendFormData = (e)=>{
// // e.preventDefault()
// // setError(validator(data))
// //  }

// // let validator = (data)=>{

// //   let errors = {};
// //   if(data.user === ""){
// //     errors.userError = "Useranme is mandatory"
// //   }else if(data.user.length>10){
// //     errors.userError = "Username should not containe more than 10 char"
// //   }
// //   return errors;

// // }

// //   return (
// //     <div>
// //       <form action="" onSubmit={sendFormData}>
// //         <div>
// //           <input type="text" name='user'  onChange={handleChange} />
// //         </div>
// //         <div  style={{color:"red"}}>
// //           {error.userError}
// //         </div>
// //         <div>
// //           <button type='submit'>submit</button>
// //         </div>
// //       </form>
// //     </div>
// //   )
// // }

// // export default App

// // import React, { useState } from 'react'
// // import VoiceRecorder from './VoiceRecorder'
// // import RecordView from './RecordView'


// // const App = () => {
// //   const [user, setuser] = useState("");
// //   let updateUser=({target:{value}})=>{setuser(value)};

// //   let sendForm=(e)=>
// //   {
// //     e.preventDefault();
// //     res();

// //   }


// //   let res=()=>{console.log("res")}
// //   return (
// //     <div>
// //       <form onSubmit={sendForm}>
// //         <input type="text" onChange={updateUser} />
// //         <button type='submit'>Login</button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default App



// import React from 'react'
// import CustomCard from './CustomCard'
// import Image1 from "./Image1.jpg"
// import Image2 from "./fishes-7314666_1280.jpg"
// import Image3 from "./blue-5059268_1280.jpg"
// import Image4 from "./fairy-wrasse-3975299_1280.jpg"
// import Image5 from "./fighting-fish-2009970_1280.jpg"
// import "./Global.css"
// const App = () => {
//   return (
//     <>
//     <h1>Fish Products</h1>

//     <div className='cards'>
//     <CustomCard 
//         title="Golden Fish" 
//         description="The goldfish is a freshwater fish in the family Cyprinidae of order Cypriniformes. It is commonly kept as a pet in indoor aquariums, and is one of the most popular aquarium fish."
//         imageUrl={Image5}
//       />
//        <CustomCard 
//       title="Golden Fish" 
//         description="This is a sample card component built with React and MUI." 
//         imageUrl={Image2}
//       />
//        <CustomCard 
//       title="Golden Fish" 
//         description="This is a sample card component built with React and MUI." 
//         imageUrl={Image3}

//       />
//        <CustomCard 
//         title="Golden Fish"  
//         description="This is a sample card component built with React and MUI." 
//         imageUrl={Image4}
//       />
       
//     </div>
//     </>
//   )
// }
// export default App


// import React from 'react'
// import CustomCard from './CustomCard'

// const App = () => {
//   return (
//     <div>
//     <CustomCard/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Click from './Click'
// import CustomCard from './CustomCard';
// const App = () => {
//   return (
//     <div>
      
//       <Router>
//       <CustomCard/>
//         <Routes>
//           <Route exact path='/singlePage' element={<Click/>}/>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'
// import faker from "@faker-js/faker"
// const App = () => {
//     let [name, setName] = useState()
//   return (
//     <div>App</div>
//   )
// }

// export default App


// ! React text animation
// import React from 'react'
// import { TypeAnimation } from 'react-type-animation';

// const App = () => {
//   return (
//     <div>
//        <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'We produce food for Mice',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'We produce food for Hamsters',
//         1000,
//         'We produce food for Guinea Pigs',
//         1000,
//         'We produce food for Chinchillas',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '2em', display: 'inline-block' }}
//       repeat={Infinity}
//     />
//     </div>
//   )
// }

// export default App

// !

// import React, { useState } from 'react'
// import { faker } from '@faker-js/faker';

// const App = () => {
//   let [name, setName] = useState(faker.animal.cat())
//   let [img, setImg] = useState(faker.image.urlPicsumPhotos())


//   let changeName = ()=>{
//     setName(faker.animal.bear())
//     setImg(faker.image.avatar())
//   }

//   return (
//     <div>
//       <h1>{name}</h1>
//       <img src={img} alt=""  style={{height:"300px", width:"300px"}}/>
//       <button onClick={changeName}>Chnage</button>
//     </div>
//   )
// }

// export default App

// ! Conditional rendering



// import React from 'react'
// import Child from './Child'

// const App = () => {
//   return (
//     <div>
//       <Child  
//       isTaskDone = {true}
//       task="Reactjs"
//       />
//        <Child  
//       isTaskDone = {true}
//       task="Reactjs"
//       />
//        <Child  
//       isTaskDone = {false}
//       task="Reactjs"
//       />
//        <Child  
//       isTaskDone = {true}
//       task="Reactjs"
//       />
//        <Child  
//       isTaskDone = {true}
//       task="Reactjs"
//       />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { Clock } from '@neal-rame/react-clock';

// const App = () => {
//   const [date, setDate] = React.useState(new Date())
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//         setDate(new Date())
//     }, 1000)
//     return () => clearInterval(interval)
// })

// return <Clock date={ new Date() } size={ 200 } />
// }

// export default App


import React from 'react'
import Form from './Form';


const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App