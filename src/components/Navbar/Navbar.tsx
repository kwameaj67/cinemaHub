import React, { FC } from 'react'
import './navbar.css'
import { BiSearch } from 'react-icons/bi'
import { RiMenu2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

interface NavBarProperties {
    onShowSearch: boolean,
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
                        <Link to='/' style={{textDecoration:'none'}}>
                            <h1 className="logo">CinemaHub</h1>
                        </Link>
                    </div>
                    <ul className="hide">
                        <li><a href="/"><span>Catoons</span></a></li>
                        <li><a href="/"><span>Action</span></a></li>
                        <li><a href="/"><span>Children & Family</span></a></li>
                        <li><a href="/"><span>Dramas</span></a></li>
                        <li><a href="/"><span>Fantasy</span></a></li>
                        <li><a href="/"><span>Music & Musicals</span></a></li>
                        <li><a href="/"><span>Sci-Fi</span></a></li>
                        <li><a href="/"><span>Horror</span></a></li>
                    </ul>
                    <div className="menu">
                        <button> <RiMenu2Line size={26} color="#A0A0A0" className="icon" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
