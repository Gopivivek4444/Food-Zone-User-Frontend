import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbarSection'>
        <div className="companyTitle">
            <h2>FOODZONE</h2>
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
