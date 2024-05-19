import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from "../../assets/logotipo4.png"
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/home">  
                <img src={Logo} alt="Logo" className="logo" />
            </Link>
        </div>
    );
}

export default Navbar;
