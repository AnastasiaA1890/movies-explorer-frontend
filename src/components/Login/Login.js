import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Login({ handleLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isError, setIsError] = useState(false);
  const className = isError ? 'register__error-visible' : '';
  const buttonClassName = isError ? 'login__button': '';

  const onSubmit = ({ email, password }) => {
    handleLogin({ email, password })
  }

  return (
    <section className='login'>
      <Link to='/'><img alt='Logo' src={logo} className='login__logo'/></Link>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="login__title">Glad to see you</h2>
        <div className='login__input-wrap'>
          <label htmlFor="" className='login__field'>Email</label>
          <input 
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email must be valid.",
              },
            })}
            className='login__input'/>
          <span className={'register__error register__error-visible'}>{errors.email?.message}</span>
        </div>
        <div className='login__input-wrap'>
          <label htmlFor="" className='login__field'>Password</label>
          <input 
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message: 'Minimum password length is 8 characters.'
              }
            })}
            type="password" className='login__input' minLength='8' required/>
          <span className={'register__error register__error-visible'}>{errors.password?.message}</span>
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
