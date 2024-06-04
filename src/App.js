import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './components/Pages/Login';
import Forgot from './components/Pages/Forgot';
import Otp from './components/Pages/Otp';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
    return (
        <div className="App">
            <Routes>
               <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<Forgot/>} />
                <Route path="/otp" element={<Otp />} />
            </Routes>
        </div>
    );
}

export default App;
