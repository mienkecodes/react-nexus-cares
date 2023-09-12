import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <div>
      <header>
        <img src="crowdfunding-frontend/public/nexuscares logo.png" alt="Nexus cares" />
        <nav className="nav-bar">
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <i>
                {/* <GiHamburgerMenu /> */}
              </i>
            ) : (
              <i>
                <FaTimes />
              </i>
            )}
          </button>
          <ul
            className={isMobile ? "hidden" : ""}
            onClick={() => setIsMobile(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/create-account">Create Account</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default NavBar;