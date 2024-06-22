// import React, { useState } from 'react';
// import './Global.css'; // Import your CSS file

// const Form = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [formErrors, setFormErrors] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     validateInput(name, value);
//   };

//   const validateInput = (name, value) => {
//     switch (name) {
//       case 'username':
//         setFormErrors({
//           ...formErrors,
//           [name]: value.length < 3 ? 'Username must be at least 3 characters long' : '',
//         });
//         break;
//       case 'email':
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         setFormErrors({
//           ...formErrors,
//           [name]: !emailRegex.test(value) ? 'Enter a valid email address' : '',
//         });
//         break;
//       case 'password':
//         setFormErrors({
//           ...formErrors,
//           [name]: value.length < 6 ? 'Password must be at least 6 characters long' : '',
//         });
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="real-time-form">
//       <form>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//           <div className="error">{formErrors.username}</div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <div className="error">{formErrors.email}</div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//           <div className="error">{formErrors.password}</div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;


// !========================================================

// import React, { useState } from 'react'
// import COUNTRY from "./Country.json"

// const Form = () => {
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
// export default Form

// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import * as formik from 'formik';
// import * as yup from 'yup';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function FormExample() {
//   const { Formik } = formik;

//   const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
//     terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
//   });

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         terms: false,
//       }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors }) => (
//         <Form noValidate onSubmit={handleSubmit} style={{ margin:"30px"}}>
//           <Row className="mb-5">
//             <Form.Group as={Col} md="4" controlId="validationFormik01">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik02">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik04">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               feedbackType="invalid"
//               id="validationFormik0"
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default FormExample;


// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import "./Global.css"

// const Form = () => {
//   let [inputField, setInputFields] = useState({
//     email :"",
//     password:"",
//     age:null
//   })
//   let [errors, setError] = useState({})
//   let [submitting, setSubmitting] = useState(false)

//   let validateValues = (inputValues)=>{
//     let errors = {}
//     if(inputValues.email.length<15){
//       errors.email = "Email is too short"
//     }
//     if(inputValues.password.length <15){
//       errors.password = "Password is too short"
//     }

//     if(!inputValues.age || inputValues.age<18){
//       errors.age = "Minimum age is 18"
//     }
//     return errors;
//   }


//   let handleChange = (e)=>{
//     let {name, value} = e.target;
//     setInputFields({...inputField, [name]:value})

//   }

//   let handleSubmit = (e)=>{
//     e.preventDefault()
//     try {
//       setError(validateValues(inputField))
//       setSubmitting(true)
//       console.log({inputField});
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   let finishSubmit = ()=>{
//     console.log(inputField);
//   }

//   useEffect(()=>{
// if(Object.keys(errors).length === 0 && submitting){
//   finishSubmit()
// }
//   }, [errors])

//   return (
//     <div>
//       {Object.keys(errors).length === 0 && submitting ? (<>
//       <span className='success'>Successfully submitted</span>
//       </>):null}
//       <form action="" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="">Email</label>
//           <input type="text"
//           name='email'
//           value={inputField.email}
//           onChange={handleChange}
//           style={{border:errors.email ? "1px solid red":null}}
//            />
//            {errors.email ? (<p className='error'> email should be atleast 15 char</p>):null}
//         </div>
//         <div>
//           <label htmlFor="">password</label>
//           <input type="text"
//           name='password'
//           value={inputField.password}
//           onChange={handleChange}
//           style={{border:errors.password ? "1px solid red":null}}
//            />
//            {errors.email ? (<p className='error'> password should be atleast 15 char</p>):null}
//         </div>
//         <div>
//           <label htmlFor="">age</label>
//           <input type="text"
//           name='age'
//           value={inputField.age}
//           onChange={handleChange}
//           style={{border:errors.age ? "1px solid red":null}}
//            />
//            {errors.age ? (<p className='error'> mionimum age is 18</p>):null}
//         </div>
//         <div>
//           <button type='submit'>finishSubmit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Form


// import React, { useEffect, useState } from 'react'
// import "./Global.css"
// const Form = () => {
//   let [state, setState] = useState({
//     firstname :"",
//     lastname:"",
//     email:"",
//     Password:"",
//     age:""
//   })
//   let [errors, setError] = useState({})
//   let [submitting, setSubmiting] = useState(false)
//   // !======================================================
//   let validateValues = (inputValues)=>{
//     let errors = {};
//     if(inputValues.firstname.length <15){
//       errors.firstname = "fisrtname must be greater than 15"
//     }
//     if(inputValues.lastname.length <15){
//       errors.lastname = "lastname must be greater than 15"
//     }
//     if(inputValues.email.length <5){
//       errors.email = "Email is too short"
//     }else if(!!/\S+@\S+\.\S+/.test(inputValues.email)){
//       errors.email = "Email format is not correct"
//     }
//     if(inputValues.Password.length<15){
//       errors.Password = "Password must be atleast 15 char"
//     }
//     if(!inputValues.age || inputValues<18){
//       errors.age = "Minimum age is 18"
//     }
//     return errors;
//   }


//   let handleSubmit = (e)=>{
//     e.preventDefault()
//     setSubmiting(true)
//     setError(validateValues(state))

//   }

//   let handleChange = (e)=>{
//     let {name, value}= e.target;
//     setState({...state, [name]:value})
//   }


//   let finishSubmit = ()=>{
//     console.log(state);
//   }

//   useEffect( ()=>{
//     if(Object.keys(errors).length === 0 && submitting){
//       finishSubmit()
//     }
//   }, [errors])

//   return (
//     <div>
    
//       <form action="" onSubmit={handleSubmit}>
//         <div>
//         {Object.keys(errors).length === 0 && submitting ? (<span className='success'>Successfully submitted</span>):null}
//         </div>
//         <div>
//           <h1>facebook</h1>
//         </div>
//         <div>
//           <input 
//           type="text"
//           name='firstname' 
//           placeholder='enter your firstname'
//           value={state.firstname}
//           onChange={handleChange}
//           style={{border:errors.firstname ? "1px solid red":null}}
//           />
//           {
//             errors.firstname ? (<p className='error'>firstname should be 15 char</p>):null
//           }
//         </div>
//         <div>
//           <input 
//           type="text"
//           name='lastname' 
//           placeholder='enter your lastname'
//           value={state.lastname}
//           onChange={handleChange}
//           style={{border:errors.lastname ? "1px solid red":null}}
//           />
//           {
//             errors.lastname ? (<p className='error'>lastname should be 15 char</p>):null
//           }
//         </div>
//         <div>
//           <input 
//           type="text"
//           name='email' 
//           value={state.email}
//           placeholder='enter your email'
//           onChange={handleChange}
//           style={{border:errors.email ? "1px solid red":null}}
//           />
//           {
//             errors.email ? (<p className='error'>email is too short</p>):null
//           }

//         </div>
//         <div>
//           <input 
//           type="text"
//           name='Password' 
//           placeholder='enter your password'
//           value={state.Password}
//           onChange={handleChange}
//           style={{border:errors.Password ? "1px solid red":null}}
//           />
//           {
//             errors.Password ? (<p className='error'>password should be 15 char</p>):null
//           }
//         </div>
//         <div>
//           <input 
//           type="text"
//           name='age' 
//           placeholder='enter your age'
//           value={state.age}
//           onChange={handleChange}
//           style={{border:errors.age ? "1px solid red":null}}
//           />
//           {
//             errors.age ? (<p className='error'>age should be 15 char</p>):null
//           }
//         </div>
//         <div>
//           <button type='submit'>submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Form



// import { useForm } from "react-hook-form"


// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()


//   const onSubmit = (data) => console.log(data)


//   console.log(watch("example")) // watch input value by passing the name of it


//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />


//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}


//       <input type="submit" />
//     </form>
//   )
// }

