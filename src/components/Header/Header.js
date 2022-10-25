import React, {useState} from 'react';
import './Header.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import profile from '../../images/profile.svg';

function Header({ isUserLoggedIn, onNavOpen }) {


  return isUserLoggedIn ? (
    <>
      <header className='header'>
        <Link to='/'><img src={logo} alt='Logo'/></Link>
        <nav className='header__nav'>
          <div className='header__films'>
            <Link to='/movies' className='header__film'>Movies</Link>
            <Link to='/saved-movies' className='header__film'>Saved movies</Link>
          </div>
          <Link to='/profile' className='header__account-link'><img className='header__account-img' src={profile} alt='Profile'/></Link>
        </nav>
        <div onClick={onNavOpen} className='header__burger'></div>
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
