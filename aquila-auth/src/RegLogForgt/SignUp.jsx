import React, { useState } from 'react'
import InputForm from './InputForm'
import Button from './Button'
import './reglogForgt.css'
// import { signupInput } from './data'
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
        setValues({ ...values, [e.target.name] : e.target.value })
    }

    const signupInput = [{
        id: 1,
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        errorMessage: 'User name should be More than 4 characters',
        pattern: '^[A-Za-z0-9]{4,16}$',
        required: true
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        errorMessage: 'Email is not Valid',
        required: true

    },

    {
        id: 4,
        name: 'companyName',
        type: 'text',
        placeholder: 'Company Name',
        pattern: '^[A-Za-z0-9]{4,16}$',
        errorMessage: 'Company name should be More than 4 characters',
        required: true
    },
    {
        id: 5,
        name: 'password',
        type: 'text',
        placeholder: 'Password',
        pattern: null,
        errorMessage: 'Password should contain numbers and symbols',
        required: true
    },
    {
        id: 6,
        name: 'confirmPassword',
        type: 'text',
        placeholder: 'Comfirm Password',
        pattern: values.password,
        errorMessage: 'Passoword do not match',
        required: true
    }
]


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