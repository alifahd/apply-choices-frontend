import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

export const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.localeCompare(confirmPassword) === 0) {
            const student = { name, email, password }
            console.log(student)

            fetch("http://localhost:8080/student/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            }).then(() => {
                console.log("New Student added");
                setShowError(false);
                setName('');
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
                setName('');
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
                    <TextField value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" label="Full Name" /><br />
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