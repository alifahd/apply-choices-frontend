import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Register from "./pages/Register/Register.js";
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home.js";
import Programs from "./pages/Home/Programs.js";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="*" exact element={<Login />} />
            <Route path="/register" exact element={<Register/>} />
            <Route path="/login" exact element={<Login/>} />
            <Route path="/home" exact element={<Home/>} />
            <Route path="/programs" exact element={<Programs/>} />
        </Routes>
    </Router>
  );
}

export default App;
