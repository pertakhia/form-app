import React from 'react'
import '../login/login.css'

const Login = () =>  {
    return (
        <div  className='display-flex' >
            <div className='form-container'>
                <form >
                    <div className='login-form-frame'> 
                        <h1>LOG IN</h1>
                        <div className='email'>
                            {/* <label>Email Adress</label> */}
                            <input type='email' placeholder="Email Adress" />
                        </div>
                        <div className='password'>
                            {/* <label>Password</label> */}
                            <input type='password' placeholder="Password" />
                        </div>
                        <button type='submit' > Log in </button>
                    </div>
                    <div className='register-form-frame'>
                         <div className='register'>
                             <p>New Customer?</p> 
                             <button type='button'>Register</button>
                         </div>  
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default Login

