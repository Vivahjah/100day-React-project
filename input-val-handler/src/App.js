import React, { useState } from 'react'
import FormInput from './components/FormInput';
import { inputs } from './components/SignupData' 
import './App.css';

function App() {
  const [values, setValues] = useState({
    username : '',
    email : '',
    fullname : '',
    companyName : '',
    password : '',
    confirmPassword : ''

  })
  const handleSubmit = (e) => {
    e.preventDefault();

  }

const onChange = (e) => {
  setValues({...values, [e.target.name] : e.target.value})
}

// console.log(values)
  return (                       
    <div className="app">

    <form onSubmit={handleSubmit} >
     {inputs.map((input) => (

      <FormInput onChange={onChange} key={input.id} {...input} value={values[input.name]} />
     ))}    
      <button>Submit On</button>
      
    </form>
    </div>                       
  );
}

export default App;
