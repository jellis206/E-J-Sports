import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/EJSports.svg';
import './Navbar.css';

function Navbar() {
    const [ click, setClick ] = useState(false);
    // const [ dropdown, setDropdown ] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const onMouseEnter = () => {
    //     if (window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(true);
    //     }
    // };

    // const onMouseLeave = () => {
    //     if (window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(false);
    //     }
    // };

    return (
        <>
            <nav className='navbar'>
                <div>
                    <Link to='/' className='navbar-logo' onClick={ closeMobileMenu }>
                        <Logo />
                    </Link>
                </div>
                <div className='menu-icon' onClick={ handleClick }>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={ closeMobileMenu }>
                            <i className='fas fa-home' />
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                    >
                        <Link
                            to='nfl'
                            className='nav-links'
                            onClick={ closeMobileMenu }
                        >
                            NFL <i className='fas fa-football' />
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                    >
                        <Link
                            to='nba'
                            className='nav-links'
                            onClick={ closeMobileMenu }
                        >
                            NBA <i className='fas fa-basketball' />
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;