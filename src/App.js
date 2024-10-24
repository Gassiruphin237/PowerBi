import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Pages/Login';
import Forgot from './components/Pages/Forgot';
import Otp from './components/Pages/Otp';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import NewPassword from './components/Pages/NewPassword';
import Home from './components/Pages/Home';
import Csq from './components/Pages/Csq';
import Powerbi from './components/Powerbi';

function App() {
    return (
        <div className="App">
            <Routes>
               <Route path="/" element={<Navigate to="/Dashboard" />} />
               <Route path="/Dashboard" element={<Powerbi/>} />
               <Route path="/CSQ" element={<Csq/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/forgot-password" element={<Forgot/>} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/NewPassword" element={<NewPassword />} />
            </Routes>
        </div>
    );
}

export default App;
