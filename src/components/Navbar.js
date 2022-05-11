import React from 'react';
import '../Styles/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="links">
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                    <a href='/annonymous'>Annonymous</a>
                    <a href='/random'>Random</a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;