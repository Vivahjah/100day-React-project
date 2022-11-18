import React, { useState } from 'react'
import InputForm from './InputForm'
import Button from './Button'
import './reglogForgt.css'
import { signupInput } from './data'
import Logo from './aquilaLogo.png'

const SignUp = () => {

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
        console.log('Submit')
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value})
    }




  return (
    <div className='body'>
        
        <div className="sign-section">
            <div className='form-div'>
                <img src={Logo} alt="aquila" />
                <p>Join Us Today</p>
                <form onSubmit={handleSubmit}>
                    {signupInput.map((input) => (

                        <InputForm onChange={onChange} key={input.id} {...input} value={values[input.name]}  />
                        
                    ))}
                   
                    <Button text='Get Started Now' />
                    <p style={{fontSize:'16px', textAlign:'center', color:'#335AA3', fontWeight:'600', cursor:'pointer'}}>Already a User? Log in</p>
                </form>
            </div>

           
        </div>

    </div>
  )
}

export default SignUp