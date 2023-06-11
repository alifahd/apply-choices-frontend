import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const student = {
            email: email,
            password: password
        }
        fetch("http://localhost:8080/student/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            }).then((res) => {
                // props.setLoggedInUser(res.data.access_token, res.data.username);
                localStorage.setItem("access_token", res.data.access_token);
                localStorage.setItem("username", res.data.email);
                setEmail('');
                setPassword('');
                navigate('/');
                window.location.reload();
            }).catch(err => {
                console.log(err);
                const msg = err.response.data.error;
                if (msg.localeCompare("The username or password you entered is incorrect") === 0) {
                    setErrorMsg(msg);
                    setShowError(true);
                }
                setEmail('');
                setPassword('');
            });
    }

    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => navigate("/register")}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}

export default Login;