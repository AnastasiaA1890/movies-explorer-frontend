import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='login'>
      <Link to='/'><img alt='Logo' src={logo} className='login__logo'/></Link>
      <form className="login__form">
        <h2 className="login__title">Glad to see you</h2>
        <div className='login__input-wrap'>
          <label htmlFor="" className='login__field'>Email</label>
          <input type="email" className='login__input' required/>
        </div>
        <div className='login__input-wrap'>
          <label htmlFor="" className='login__field'>Password</label>
          <input type="password" className='login__input' required/>
        </div>
        <button type='submit' className="login__button">Sign in</button>
        <div className='login__container'>
          <p className="login__text">Not registered yet?</p>
          <Link to='/signup' className='login__link'>Sign up</Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
