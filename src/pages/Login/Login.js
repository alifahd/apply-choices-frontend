import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    let base64 = require('base-64');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get("/secured", {
                headers: { 'Authorization': 'Basic ' + base64.encode(username + ":" + password) }
            }).then((res) => {
                console.log(res);
                localStorage.setItem("username", res.data.username);
                setUsername('');
                setPassword('');
                navigate("/home");
            }).catch(err => {
                console.log(err);
                setUsername('');
                setPassword('');
            });
    }

    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <TextField value={username} name="username" onChange={(e) => setUsername(e.target.value)} id="username" label="Userame" /><br />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Password" id="password" name="password" /><br />
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => navigate("/register")}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}

export default Login;