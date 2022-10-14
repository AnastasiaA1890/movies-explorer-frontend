import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register'>
      <Link to='/'><img alt='Logo' src={logo} className='register__logo'/></Link>
      <form className="register__form">
        <h2 className="register__title">Welcome!</h2>
        <div className='register__input-wrap'>
          <label htmlFor="" className='register__field'>Name</label>
          <input type="name" className='register__input' required/>
        </div>
        <div className='register__input-wrap'>
          <label htmlFor="" className='register__field'>Email</label>
          <input type="email" className='register__input' required/>
        </div>
        <div className='register__input-wrap'>
          <label htmlFor="" className='register__field'>Password</label>
          <input type="password" className='register__input' required/>
        </div>
        <button type='submit' className="register__button">Sign up</button>
        <div className='register__container'>
          <p className="register__text">Already have an account?</p>
          <Link to='/sign-in' className='register__link'>Sign in</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
