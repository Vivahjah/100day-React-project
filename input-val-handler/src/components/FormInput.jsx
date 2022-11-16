import React, {useState} from 'react'
import './formInput.css'

const FormInput = (props) => {

  const { label, onChange, id, ...inputprops } = props;
  
  return (
    <div className="form-input">
      {/* <label>{label}</label> */}
      <input {...inputprops} onChange={onChange}  />
    </div>
  )
}

export default FormInput