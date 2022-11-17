import React, { useState } from 'react';
import './formInput.css'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)

  const { label, onChange, id, errorMessage, ...inputProps } = props;

  // console.log(props);

  
  return (


    <div className="form-input">
      
      <input {...inputProps} 
        onChange={onChange} 
        focused={focused.toString()} 
        onFocus={() => inputProps.name === 'confirmpassword' && setFocused(true)}
        onBlur={() => setFocused(true)}  
      />
      <span>{errorMessage}</span>

    </div>
  )
}

export default FormInput  