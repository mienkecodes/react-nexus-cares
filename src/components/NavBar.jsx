import React, { useState } from "react";
import { Link, useNavigate, Outlet} from "react-router-dom";
// import  useAuth  from "../hooks/use-auth.js";

import "./NavBar.css";

function NavBar() {

    //these are curly brackets in course content
//   const [auth, setAuth] = useAuth();

    // const handleLogout = () => {
    //     window.localStorage.removeItem("token");
    //     setAuth({ token: null });
    // };

    //debugging - can we see current auth value?
  //console.log("---------------AUTH VALUE------------------: ", auth)

  const [isMobile, setIsMobile] = useState(false);
  //const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  const handleNavLinkClick = () => {
    closeMobileMenu();
    //navigate(path);
  };

//   return (
//     <div>
//         <nav>
//             {auth.token ? (
//                 <Link to="/" onClick={handleLogout}>Log Out</Link>
//                 ) : (<Link to="/login">Login</Link>)}
//         </nav>
//         <Outlet />
//     </div>
//   )

  
return (
    <header className="nav-header">
      <nav className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/nexuscares-logo.png" alt="Nexus cares" />
          </Link>
        </div>
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobile ? (
            <i>&#10005;</i> // Close icon
          ) : (
            <i>&#9776;</i> // Hamburger icon
          )}
        </button>
        <ul className={isMobile ? "nav-menu mobile-menu-open" : "nav-menu"}>
          <li>
    {/* Link to is whats handling our navigation through the nav and outlet (see main jsx) and will take us to a diff page. handleNavLinkClick therefore no longer needs the url path as an argument  */}
            <Link to="/" onClick={() => handleNavLinkClick()}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => handleNavLinkClick()}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => handleNavLinkClick()}>Contact</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => handleNavLinkClick()}> Log In</Link>
          </li>
          <li>
            <Link
              to="/create-account"
              onClick={() => handleNavLinkClick()}
            >
              Create Account
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}

export default NavBar;

