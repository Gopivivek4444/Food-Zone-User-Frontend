import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbarSection'>
        <div className="companyTitle">
          <Link to='/' className='HomeLink'>
            <h2>FOODZONE</h2>
          </Link>
        </div>
        <div className="searchBar">
            <input type='text' placeholder='Search...'/>
        </div>
        <div className="userAuth">
            SignIn / SignUp
        </div>
    </nav>
  );
};

export default Navbar;
