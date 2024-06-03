import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './components/Pages/Login';
import Forgot from './components/Pages/Forgot';

function App() {
    return (
        <div className="App">
            <Routes>
               <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<Forgot/>} />
            </Routes>
        </div>
    );
}

export default App;
