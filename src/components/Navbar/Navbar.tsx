import React from 'react'
import './navbar.css'

const Navbar = () => {
    
    return (
        <div className="navbar_container">
            <div className="navbar_items">
                <div className="logo_container">
                    <h1 className="logo">CinemaHub</h1>
                </div>
                <ul>
                    <li><a href="/">Featured</a></li>
                    <li><a href="/">Coming Soon</a></li>
                    <li><a href="/">In theaters</a></li>
                    <li><a href="/">At home</a></li>
                </ul>
                <div className="btns">
                    <a href="/" className="login">Login</a>
                    <a href="/" className="signup">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
