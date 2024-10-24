import React from 'react'
import '../styles/Sidebar.css'
import logo from './../assets/logo.png';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <img className='sidebar'  alt='img' src={logo}/>
            </div>
        </div>
    )
}

export default Sidebar