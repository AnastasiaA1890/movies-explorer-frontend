import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import profile from '../../../images/profile.svg';

function BurgerMenu({ isNavOpened, onNavClose }) {
  const className = isNavOpened ? 'burgermenu_opened' : '';

  return (
    <div className={`burgermenu ${className}`}>
      <button onClick={onNavClose} className='burgermenu__closebutton'></button>
      <nav className='burgermenu__links'>
        <Link onClick={onNavClose}  to={'/'} className='burgermenu__link'>Home</Link>
        <Link onClick={onNavClose}  to={'/movies'} className='burgermenu__link'>Movies</Link>
        <Link onClick={onNavClose}  to={'/saved-movies'} className='burgermenu__link'>Saved movies</Link>
      </nav>
      <Link onClick={onNavClose}  to={'/profile'}><img className='burgermenu__img' src={profile} alt='Profile' /></Link>
    </div>
  );
}

export default BurgerMenu;
