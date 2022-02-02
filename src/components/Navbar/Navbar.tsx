import React, { FC } from 'react'
import './navbar.css'
import { BiSearch } from 'react-icons/bi'

interface NavBarProperties {
    onShowSearch:boolean,
    onShowLoginSignupForm: boolean,
    onClickSearchButton: () => void,
    onClickLoginButton: () => void,
}
const Navbar: FC<NavBarProperties> = (props): JSX.Element => {

   
    return (
        <div className="navbar_container">
            <div className="navbar_content">
                <div className="navbar_items">
                    <ul>
                        <li><a href="/">Featured</a></li>
                        <li><a href="/">Coming Soon</a></li>
                        <li><a href="/">In theaters</a></li>
                        <li><a href="/">TV Series</a></li>
                        <li><a href="/">Film</a></li>
                        <li><a href="/">Korean</a></li>
                        <li><a href="/">Anime</a></li>
                    </ul>
                    <div className="btns">
                        <button onClick={props.onClickSearchButton} className="search">Search <BiSearch size={16} className="icon" /> </button>
                        <button className="login">Log in/Sign up</button>
                    </div>
                </div>
                <div className="border"></div>
                <div className="navbar_items">
                    <div className="logo_container">
                        <h1 className="logo">CinemaHub</h1>
                    </div>
                    <ul>
                        <li><a href="/">Catoons</a></li>
                        <li><a href="/">Action</a></li>
                        <li><a href="/">Children & Family</a></li>
                        <li><a href="/">Dramas</a></li>
                        <li><a href="/">Fantasy</a></li>
                        <li><a href="/">Music & Musicals</a></li>
                        <li><a href="/">Sci-Fi</a></li>
                        <li><a href="/">Horror</a></li>
                    </ul>
                    {/* <div className="btns">
                        <a href="/" className="search">Search <FiSearch size={16} className="icon" /> </a>
                        <a href="/" className="login">Log in/Sign up</a>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Navbar
