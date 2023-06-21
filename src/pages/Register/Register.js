import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

export const Register = (props) => {

    const [displayName, setDisplayName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.localeCompare(confirmPassword) === 0) {
            const student = { username, displayName, email, password }
            console.log(student)

            fetch("/api/1.0/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            }).then(() => {
                console.log("New Student added");
                setShowError(false);
                setDisplayName('');
                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/signin');
            }).catch(err => {
                const msg = err.response.data;
                if (msg.localeCompare("email already exists") === 0) {
                    setErrorMsg(msg);
                    setShowError(true);
                }
                console.log(err);
                setDisplayName('');
                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            });
        } else {
            setErrorMsg("Passwords do not match. Try Again.");
            setPassword("");
            setConfirmPassword("");
            setShowError(true);
        }
    }

    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <TextField value={displayName} name="displayName" onChange={(e) => setDisplayName(e.target.value)} id="displayName" label="Full Name" /><br />
                    <TextField value={username} name="username" onChange={(e) => setUsername(e.target.value)} id="username" label="Username" /><br />
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} type="email" label="Email" id="email" name="email" /><br />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Password" id="password" name="password" /><br />
                    <TextField value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" label="Confirm Password" id="confirmPassword" name="confirmPassword" /><br />
                    <button type="submit">Register</button>
                </form>
                <button className="link-btn" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
            </div>
        </div>
    )
}

export default Register;