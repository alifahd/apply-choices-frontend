import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Register from "./pages/Register/Register.js";
import Login from "./pages/Login/Login.js";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="*" exact element={<Login />} />
            <Route path="/register" exact element={<Register/>} />
            <Route path="/login" exact element={<Login/>} />
        </Routes>
    </Router>
  );
}

export default App;
