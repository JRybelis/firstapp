import React from 'react';

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo left">West Java action stars</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar