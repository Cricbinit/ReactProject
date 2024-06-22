// import React, { useState } from 'react';

// const TemperatureConverter = () => {
//   const [celsius, setCelsius] = useState('');
//   const [fahrenheit, setFahrenheit] = useState('');

//   const handleCelsiusChange = (e) => {
//     const value = e.target.value;
//     setCelsius(value);
//     setFahrenheit((parseFloat(value) * 9 / 5 + 32).toFixed(2));
//   };

//   const handleFahrenheitChange = (e) => {
//     const value = e.target.value;
//     setFahrenheit(value);
//     setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
//   };
//   return (
//     <div>
//       <h2>Temperature Converter</h2>
//       <div>
//         <label>Celsius:</label>
//         <input
//           type="number"
//           value={celsius}
//           onChange={handleCelsiusChange}
//           placeholder="Enter Celsius"
//         />
//       </div>
//       <div>
//         <label>Fahrenheit:</label>
//         <input
//           type="number"
//           value={fahrenheit}
//           onChange={handleFahrenheitChange}
//           placeholder="Enter Fahrenheit"
//         />
//       </div>
//     </div>
//   );
// };

// export default TemperatureConverter;

import React, { useState } from 'react'
import "./Global.css"
const TemperatureConverter = () => {
    let[celsius, setCelsius] = useState("");
    let [fahrenheit, setFahrenheit] = useState("")

   let handleCelsiusChange = (e)=>{
    let value = e.target.value;
    setCelsius(value)
    setFahrenheit(((parseFloat(value)*9/5+32).toFixed(2)))
   } 
   let handleFahrenheitChange = (e)=>{
    let value = e.target.value;
    setFahrenheit(value)
    setCelsius(((parseFloat-32)*5/9).toFixed(2))
   } 

  return (
    <div>
        <h1>Temperaturte Converter</h1>
        <div>
            <input 
            type="number"
            placeholder='Enter your temperature'
            onChange={handleCelsiusChange}
            value={celsius}
             />
        </div>
        <div>
            <input 
            type="number"
            placeholder='Enter your fareheit'
            onChange={handleFahrenheitChange}
            value={fahrenheit}
             />
        </div>
    </div>
  )
}

export default TemperatureConverter