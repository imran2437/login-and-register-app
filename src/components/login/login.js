import React from 'react';
import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <h1>Welcome to the Login</h1>
            <input type="text" placeholder='Enter your Email' />
            <input type="password" placeholder='Enter your Password' />
            <div className="button"> Login </div>
            <div>Or</div>
            <div className="button"> Register </div>
            <div className="button"> Forgot Password </div>
        </div>
    )
}

export default Login;
