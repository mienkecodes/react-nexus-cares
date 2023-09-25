import './TestNavbar.css';
import { Link, Outlet } from 'react-router-dom';

function TestNavbar() {
  return (
    <div>
      <nav className='navbar'>
        {/* LOGO */}
        <div className='logo'>WEBSITE TITLE</div>

        {/* NAVIGATION MENU  */}
        <ul className='nav-links'>
          {/* USING CHECKBOX TO TRIGGER HAMBURGER MENU STATE  */}
          <input type='checkbox' id='checkbox_toggle' />
          {/*  &#9776 is html code for a hamburger icon */}
          <label htmlFor='checkbox_toggle' className='hamburger'>
            &#9776;
          </label>

          {/* NAVIGATION MENUS */}
          <div className='menu'>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/project'>Project Page</Link>
            </li>

            <li className='services'>
              <Link to='/'>Services</Link>

              {/* OPTIONAL IF YOU HAVE MORE LINKS - DROPDOWN MENU */}
              <ul className='dropdown'>
                <li className='dropdown-link'>
                  <Link to='/'>Dropdown 1 </Link>
                </li>
                <li className='dropdown-link'>
                  <Link to='/'>Dropdown 2</Link>
                </li>
                <li className='dropdown-link'>
                  <Link to='/'>Dropdown 2</Link>
                </li>
                <li className='dropdown-link'>
                  <Link to='/'>Dropdown 3</Link>
                </li>
                <li className='dropdown-link'>
                  <Link to='/'>Dropdown 4</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to='/'>Sign up</Link>
            </li>
            <li>
              <Link to='/'>Logout</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default TestNavbar;
