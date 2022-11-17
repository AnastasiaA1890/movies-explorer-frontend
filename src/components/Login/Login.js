import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Login({ handleLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const className = isError ? 'register__error-visible' : '';
  const buttonClassName = isError ? 'login__button': '';

  function showInputError(evt) {
    if (evt.target.validity.valid) {
      setIsError(false)
    } else {
      setIsError(true);
      setError(evt.target.validationMessage)
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password })
  }

  return (
    <section className='login'>
      <Link to='/'><img alt='Logo' src={logo} className='login__logo'/></Link>
      <form className="login__form"  onChange={showInputError} onSubmit={handleSubmit} noValidate>
        <h2 className="login__title">Glad to see you</h2>
        <div className='login__input-wrap'>
          <label htmlFor="" className='login__field'>Email</label>
          <input value={email} onChange={handleChangeEmail} type="email" className='login__input' required/>
        </div>
        <div className='login__input-wrap'>
          <label htmlFor="" className='login__field'>Password</label>
          <input value={password} onChange={handleChangePassword} type="password" className='login__input' minLength='8' required/>
          <span className={`register__error ${className}`}>{error}</span>
        </div>
        <button type='submit' className={`login__button-error ${buttonClassName}`}>Sign in</button>
        <div className='login__container'>
          <p className="login__text">Not registered yet?</p>
          <Link to='/signup' className='login__link'>Sign up</Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
