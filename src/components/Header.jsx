import React from 'react';
import logo from '../assets/images/logo.png';

function Header() {
    return (
        <div id="header-wrapper">
            <header id="header" className="container">
                <div className="row">
                    <div id="logo">
                        <a href="/#">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <nav id="nav" className="navbar">
                        <ul>
                            <li className="current"><a href="index.html">Welcome</a></li>
                            <li><a href="left-sidebar.html">Register</a></li>
                            <li><a href="right-sidebar.html">Login</a></li>
                            <li><a href="no-sidebar.html">Home</a></li>
                            <li>
                                <a href="/#">User</a>
                                <ul>
                                    <li><a href="/#">Lorem ipsum dolor</a></li>
                                    <li><a href="/#">Magna phasellus</a></li>
                                    <li>
                                        <a href="/#">Sub-dropdown</a>
                                        <ul>
                                            <li><a href="/#">Lorem ipsum dolor</a></li>
                                            <li><a href="/#">Phasellus consequat</a></li>
                                            <li><a href="/#">Magna phasellus</a></li>
                                            <li><a href="/#">Etiam dolore nisl</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/#">Veroeros feugiat</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>
        </div>
    )
}

export default Header;