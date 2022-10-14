import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link to='/'><img src={logo} alt='Logo'/></Link>
      <div className='header__links'>
        <Link to='/sign-up' className='header__signup'>Sign up</Link>
        <div className='header__link'>
          <Link to='/sign-in' className='header__signin'>Login</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
