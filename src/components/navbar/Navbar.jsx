import React from './navbar.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext);

  const handleLogOut = e => {
    dispatch({type: 'LOGIN_OUT'});
  };

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
          <span className='logo'>lamabooking</span>
        </Link>
        {user ? (
          <>
            <span>{user.username}</span>
            <button onClick={handleLogOut}>Log Out</button>
          </>
        ) : (
          <div className='navItems'>
            <button className='navButton'>Register</button>
            <Link to='/login'>
              <button className='navButton'>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
