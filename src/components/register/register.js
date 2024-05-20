import React, { useState } from 'react';
import "./register.css";

const Register = () => {

    const [user, setName] = useState({ name: '', password: '', repassword: '', email: '' });
    const handlechange = (e) => { setName({ ...user, [e.target.name]: e.target.value }) }

    return (
        <div className="register">
            <h1>Welcome to the Register</h1>
            <input type="text" name='name' value={user.name}  placeholder='Enter your Name' onChange={handlechange} />
            <input type="text" name='email' value={user.email} placeholder='Enter your Email' />
            <input type="password" name='password' value={user.password} placeholder='Enter your Password' />
            <input type="password" name='repassword' value={user.repassword} placeholder='Re-enter your Password' />
            <div className="button"> Register </div>
            <div>Or</div>
            <div className="button"> Login </div>
        </div>
    )
}
export default Register;