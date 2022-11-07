import React, { useState } from 'react';
import './Register.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Register() {

  const [isError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const className = isError ? 'register__error-visible' : '';

  function showInputError (evt) {
    if (evt.target.validity.valid) {
      setIsError(false)
    } else {
      setIsError(true)
      setError(evt.target.validationMessage)
    }
  };

  const handleChangeName = (evt) => {
   setName(evt.target.value)
  };

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value)
  };

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value)
  };

  return (
    <div className='register'>
      <Link to='/'><img alt='Logo' src={logo} className='register__logo'/></Link>
      <form className="register__form" onChange={(evt) => showInputError(evt)} noValidate>
        <h2 className="register__title">Welcome!</h2>
        <div className='register__input-wrap'>
          <label htmlFor="" className='register__field'>Name</label>
          <input value={name} onChange={handleChangeName} id='name' type="name" className='register__input' minLength='2' required/>
        </div>
        <div className='register__input-wrap'>
          <label htmlFor="" className='register__field'>Email</label>
          <input value={email} onChange={handleChangeEmail} id='email' type="email" className='register__input' required/>
        </div>
        <div className='register__input-wrap'>
          <label htmlFor="" className='register__field'>Password</label>
          <input value={password} onChange={handleChangePassword} id='password' type="password" className='register__input' minLength='8' required/>
          <span className={`register__error ${className}`}>{error}</span>
        </div>
        <button type='submit' className="register__button">Sign up</button>
        <div className='register__container'>
          <p className="register__text">Already have an account?</p>
          <Link to='/signin' className='register__link'>Sign in</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
