import React, { useState } from 'react'

import Button from './Button'
import './reglogForgt.css'
import Logo from './aquilaLogo.png'

const ResetPassword = () => {

  const [email, setEmail] = useState('')
 

 

  const handleSubmit =(e)=> {
    e.preventDefault();

  }

  return (
     
    <div className="sign-section">
    <div className='form-div'>
        <img src={Logo} alt="aquila" />
        <p>Password Reset</p>
        <form className='login-form' onSubmit={handleSubmit}>
            <input type='email' value={email} placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />

            <Button text='Reset Password' />
            <p style={{fontSize:'16px', textAlign:'center', color:'#335AA3', fontWeight:'600', cursor:'pointer'}}>Go back to Login</p>
        </form>
    </div>

   
</div>
    
  )
}

export default ResetPassword