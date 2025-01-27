import React, { useState } from 'react'
import '../components/style.css'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '', // Fixed the typo
        password: '',
        role: ''
    });
    //const navigate = useNavigate();
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const submitHandler = (event) => {
        event.preventDefault();
        // Form validation
        if (!data.firstName || !data.lastName || !data.password || !data.email || !data.mobile || !data.role) {
            toast.error('Please fill all fields');
            return;
        }
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

                        <input type='text' onChange={handleOnChange} name='firstName' placeholder='Enter First Name' />
                        <input type='text' onChange={handleOnChange} name='lastName' placeholder='Enter Last Name' />
                        <input type='email' onChange={handleOnChange} name='email' placeholder='Enter Email address' />
                        <input type='text' onChange={handleOnChange} name='mobile' placeholder='Enter Mobile No.' />
                        <input type='password' onChange={handleOnChange} name='password' placeholder='Enter Password' />
                        <select name='role' onChange={handleOnChange}>
                            <option value='Admin'>Admin </option>
                            <option value='User'>User </option>
                        </select>
                        <button type='button' name='submit' className='signup-btn'>Sign Up</button>

                    </form>
                    <p className="signup-right-para">
                        Already have an account? <Link to="/login">  Login Here</Link>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Signup