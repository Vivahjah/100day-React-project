import React, { useState } from 'react'
import { BiShow, BiHide } from 'react-icons/bi'
import Button from './Button'
import './reglogForgt.css'
import Logo from './aquilaLogo.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const [show, setShow] = useState(true)

  const handleSubmit =(e)=> {
    e.preventDefault();

  }

  // const handleShowPassword = () => {
  //   setShow(!show);
  
  

  // }
  return (
    <div className='body'>
        
        <div className="sign-section">
            <div className='form-div'>
                <img src={Logo} alt="aquila" />
                <p>Welcome Back</p>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input type='email' required value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <input className='passInput' required value={password} type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} name='password' /> 
                    {/* <span onClick={handleShowPassword} className='passIcon'>{ show ? <BiHide /> : <BiShow />}</span> */}
                    <p style={{fontSize:'16px', textAlign:'right', color:'#335AA3', fontWeight:'600', cursor:'pointer'}}>Forget Password?</p>

                    <Button text='Sign in to Aquila' />
                    <p style={{fontSize:'16px', textAlign:'center', color:'#335AA3', fontWeight:'600', cursor:'pointer'}}>New Here, Let's get you Started</p>
                </form>
            </div>

           
        </div>

    </div>
  )
  
}

export default Login