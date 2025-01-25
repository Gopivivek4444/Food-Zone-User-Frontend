import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({showLoginHandler, showRegisterHandler, showLogout, logoutHandler}) => {

  const token = localStorage.getItem('token')

  return (
    <nav className='navbarSection'>
        <div className="companyTitle">
          <Link to='/' className='HomeLink'>
            <h2>FOODZONE</h2>
          </Link>
        </div>
        <div className="moduleSection">
        <div className="cart">
          { token &&
          <Link to={'/cart'} className='cartLink'>
          <h3>
          Cart
            <span class="material-symbols-outlined">
                shopping_cart
            </span>
          </h3>
          </Link>
          }
        </div>
        <div className="userAuth">
          {showLogout?<span onClick={logoutHandler}>Logout</span>:
          <>
          <span onClick={showLoginHandler}>Login /</span>
          <span onClick={showRegisterHandler}>Register</span>
          </>
          }
        </div>
        </div>
    </nav>
  );
};

export default Navbar;

