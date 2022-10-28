import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/nba">NBA</Link>
                    </li>
                    <li>
                        <Link to="/nfl">NFL</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default NavBar;