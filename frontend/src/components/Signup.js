import React, { useState } from 'react'
import '../components/style.css'
const Signup = () => {
    const { firstName,setfirstName} = useState('');
    const { lastName,setlastName} = useState('');
    const { email,setemail} = useState('');
    const { mobile,setmobile} = useState('');
    const { password,setpassword} = useState('');
    const { role,setrole} = useState('');
    const submitHandler=(event)=>{
        event.preventDefault();
    }

    return (
        <div className='signup-wrapper'>
            <div className='signup-box'>
                <div className='signup-left'>
                    <div className='signup-left-heading'><h1>Signup </h1> </div>
                    <div className='signup-left-para'> </div>
                </div>
                <div className='signup-right'>
                   
                    <form className='signup-form' onSubmit={submitHandler}>
                    <h1>User Registration</h1>
                   
                            <input type='text' onChange={e=>{setfirstName(e.target.value)}} name='firstName' placeholder='Enter First Name'/>
                            <input type='text' onChange={e=>{setlastName(e.target.value)}} name='lastName' placeholder='Enter Last Name'/>
                            <input type='email' onChange={e=>{setemail(e.target.value)}} name='email' placeholder='Enter Email address'/>
                            <input type='text' onChange={e=>{setmobile(e.target.value)}} name='mobile' placeholder='Enter Mobile No.'/>
                            <input type='password' onChange={e=>{setpassword(e.target.value)}} name='password' placeholder='Enter Password'/>
                            <select name='role' onChange={e=>{setrole(e.target.value)}}>
                               <option value='Admin'>Admin </option>
                               <option value='User'>User </option>
                            </select>
                            <button type='button' name='submit' className='signup-btn'>Sign Up</button>
                        
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Signup