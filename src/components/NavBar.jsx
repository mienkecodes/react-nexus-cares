import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  const handleNavLinkClick = (path) => {
    closeMobileMenu();
    navigate(path);
  };

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
            <Link to="/" onClick={() => handleNavLinkClick("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => handleNavLinkClick("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => handleNavLinkClick("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => handleNavLinkClick("/login")}>
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/create-account"
              onClick={() => handleNavLinkClick("/create-account")}
            >
              Create Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;




// import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// // import useAuth from "../../hooks/use-auth.js";
// import "./NavBar.css";

// function NavBar() {
//   const [isMobile, setIsMobile] = useState(true);
//   return (
//     <div>
//       <header>
//         <img src="/nexuscares-logo.png" alt="Nexus cares" />
//         <nav className="nav-bar">
//           <button
//             className="mobile-menu-icon"
//             onClick={() => setIsMobile(!isMobile)}>
//             {isMobile ? (
//               <i>
//                 {/* <GiHamburgerMenu /> */}
//               </i>
//             ) : (
//               <i>
//                 {/* < FaTimes/> */}
//               </i>
//             )}
//           </button>
//           <ul
//             className={isMobile ? "hidden" : ""}
//             onClick={() => setIsMobile(false)}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link to="/login">Log In</Link>
//             </li>
//             <li>
//               <Link to="/create-account">Create Account</Link>
              
//               {/* {/* {auth.token ? (
//               <>
//                 <li>
//                   <Link to="/profile">Profile</Link>
//                 </li>
//                 <li>
//                   <Link to="/" onClick={handleLogout}>
//                     Log Out
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/login">Log In</Link>
//                 </li>
//                 <li>
//                   <Link to="/create-account">Create Account</Link>
//                 </li>
//               </> */}
            
              
              
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <Outlet />
//     </div>
//   );
// }

// export default NavBar;
