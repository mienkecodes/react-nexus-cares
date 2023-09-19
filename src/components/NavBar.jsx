// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {
//   const [isMobile, setIsMobile] = useState(false);

//   // Function to toggle the mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobile(!isMobile);
//   };

//   // Function to close the mobile menu when a link is clicked
//   const closeMobileMenu = () => {
//     setIsMobile(false);
//   };

//   return (
//     <div>
//       <header>
//         <div className="nav-container">
//           <img
//             src="crowdfunding-frontend/public/nexuscares-logo.png" // Add your logo image path
//             alt="Nexus cares"
//           />
//           <nav className={`nav-bar ${isMobile ? "mobile-menu-open" : ""}`}>
//             <button
//               className="mobile-menu-icon"
//               onClick={toggleMobileMenu}
//             >
//               {isMobile ? (
//                 <i>&times;</i> // Display 'x' icon for closing the menu
//               ) : (
//                 <i>&#8801;</i> // Display hamburger icon for opening the menu
//               )}
//             </button>
//             <ul onClick={closeMobileMenu}>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//               <li>
//                 <Link to="/login">Log In</Link>
//               </li>
//               <li>
//                 <Link to="/create-account">Create Account</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default NavBar;





import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import useAuth from "../../hooks/use-auth.js";
import "./NavBar.css";

function NavBar() {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <div>
      <header>
        <img src="/nexuscares-logo.png" alt="Nexus cares" />
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
                {/* < FaTimes/> */}
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
              
              {/* {/* {auth.token ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}>
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/create-account">Create Account</Link>
                </li>
              </> */}
            
              
              
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default NavBar;
