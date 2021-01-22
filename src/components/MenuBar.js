import React from 'react'
import logo from '../assets/images/react-logo.svg'



const MenuBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
                <img src={logo} alt="" width="35" height="30" className="d-inline-block align-top" />
                <span className="ms-2">Main Menu</span>
            </a>
        </div>
    </nav>
    )
}

export default MenuBar

