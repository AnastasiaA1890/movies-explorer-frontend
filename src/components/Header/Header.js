import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg'
import icon from '../../images/user-icon.svg';
import { Link } from 'react-router-dom';

function Header({ isUserLoggedIn }) {
  return isUserLoggedIn ? (
    <>
      <header className='header'>
        <Link to='/'><img src={logo} alt='Logo'/></Link>
        <div className='header__films'>
          <Link to='/movies' className='header__film'>Movies</Link>
          <Link to='/saved-movies' className='header__film'>Saved movies</Link>
        </div>
        <div className='header__account'>
          <Link to='/profile' className='header__account-text'>Account</Link>
          <div className='header__icon'>
            <img src={icon} alt='Account icon'/>
          </div>
        </div>
      </header>
    </>
  ) : (
    <header className='header'>
      <Link to='/'><img src={logo} alt='Logo'/></Link>
      <div className='header__links'>
        <Link to='/signup' className='header__signup'>Sign up</Link>
        <div className='header__link'>
          <Link to='/signin' className='header__signin'>Login</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
