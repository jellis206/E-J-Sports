import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
    const [ click, setClick ] = useState(false);
    const [ dropdown, setDropdown ] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={ closeMobileMenu }>
                    EPIC
                    <i class='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={ handleClick }>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={ closeMobileMenu }>
                            Home
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={ onMouseEnter }
                        onMouseLeave={ onMouseLeave }
                    >
                        <Link
                            to='/nfl'
                            className='nav-links'
                            onClick={ closeMobileMenu }
                        >
                            NFL <i className='fas fa-caret-down' />
                        </Link>
                        { dropdown && <Dropdown parent='nfl' /> }
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={ onMouseEnter }
                        onMouseLeave={ onMouseLeave }
                    >
                        <Link
                            to='/nba'
                            className='nav-links'
                            onClick={ closeMobileMenu }
                        >
                            NBA <i className='fas fa-caret-down' />
                        </Link>
                        { dropdown && <Dropdown parent='nba' /> }
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;