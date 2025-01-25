import React from 'react'

const Login = () => {
    return (
        <div className='signup-wrapper'>
            <div className='signup-box'>
                <div className='signup-left'>
                    <div className='signup-left-heading'><h1>Signin </h1> </div>
                    <div className='signup-left-para'> </div>
                </div>
                <div className='signup-right'>

                    <form className='signup-form'>
                        <h1>User Login</h1>
                      
                        <input type='email' name='email' placeholder='Enter Email address' />
                        
                        <input type='password' name='Password' placeholder='Enter Password' />
                      
                        <button type='button' name='submit' className='signup-btn'>Sign In</button>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default Login