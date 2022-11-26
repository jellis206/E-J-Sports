import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/EJSports.svg';
import { useStore } from '../services/use-store';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const state = useStore();

  const handleClick = () => {
    setClick(!click);
    state.mobileMenuActive ? state.toggleOff() : state.toggleOn();
  };

  const closeMobileMenu = () => {
    setClick(false);
    state.toggleOff();
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <Logo />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <i className="fas fa-home" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/nfl" className="nav-links" onClick={closeMobileMenu}>
              NFL <i className="fas fa-football" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/nba" className="nav-links" onClick={closeMobileMenu}>
              NBA <i className="fas fa-basketball" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/signin" className="nav-links" onClick={closeMobileMenu}>
              <i className="fas fa-user-astronaut" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
