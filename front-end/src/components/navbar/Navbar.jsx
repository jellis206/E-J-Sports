import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/EJSports.svg';
import { useAppStore } from '../../services/app-store';
import { useUserStore } from '../../services/user-store';
import './Navbar.css';

function Navbar() {
  const [ click, setClick ] = useState(false);

  const appState = useAppStore();
  const userState = useUserStore();

  const handleClick = () => {
    setClick(!click);
    appState.mobileMenuActive ? appState.toggleMenuOff() : appState.toggleMenuOn();
  };

  const closeMobileMenu = () => {
    setClick(false);
    appState.toggleMenuOff();
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/" className="navbar-logo" onClick={ closeMobileMenu }>
            <Logo />
          </Link>
        </div>
        <div className="menu-icon" onClick={ handleClick }>
          <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
        </div>
        <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={ closeMobileMenu }>
              <i className="fas fa-home" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/nfl" className="nav-links" onClick={ closeMobileMenu }>
              NFL <i className="fas fa-football" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/nba" className="nav-links" onClick={ closeMobileMenu }>
              NBA <i className="fas fa-basketball" />
            </Link>
          </li>

          { userState.loggedIn && (
            <li className="nav-item">
              <Link
                to="/account"
                className="nav-links"
                onClick={ closeMobileMenu }>
                <i className="fas fa-user-astronaut" />
              </Link>
            </li>
          ) }

          { !userState.loggedIn && (
            <li className="nav-item">
              <Link
                to="/signin"
                className="nav-links"
                onClick={ closeMobileMenu }>
                <i className="fas fa-user-astronaut" />
              </Link>
            </li>
          ) }
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
