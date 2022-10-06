import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header'>
      <a href='/'><img src={logo} alt='Logo'/></a>
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
