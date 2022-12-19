import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register({ handleRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const onSubmit = ({name, email, password}) => {
    handleRegister({name, email, password})
  }
  
  return (
    <div className="register">
      <Link to="/">
        <img alt="Logo" src={logo} className="register__logo" />
      </Link>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="register__title">Welcome!</h2>
        <div className="register__input-wrap">
          <label htmlFor="" className="register__field">
            Name
          </label>
          <input  
            {...register("name", { 
              required: "Name is required.", 
              minLength: {
                value: 2,
                message: 'Minimum text length is 2 characters.'
              }, 
              maxLength: {
                value: 20,
                message: 'Maximum text length is 20 characters.'
              } 
            })} 
            id="name" type="name" className="register__input" minLength="2" required />
          <span className={"register__error register__error-visible"}>{errors.name?.message}</span>
        </div>
        <div className="register__input-wrap">
          <label htmlFor="" className="register__field">
            Email
          </label>
          <input 
            {...register("email", {
              required: 'Email is required.',
            })} 
            id="email" type="email" className="register__input" required />
          <span className={"register__error register__error-visible"}>{errors.email?.message}</span>
        </div>
        <div className="register__input-wrap">
          <label htmlFor="" className="register__field">
            Password
          </label>
          <input  
            {...register("password", {
              required: 'Password is required.',
              minLength: {
                value: 8,
                message: 'Minimum password length is 8 characters.'
              }, 
            })} 
            id="password" type="password" className="register__input" minLength="8" required />
          <span className={'register__error register__error-visible'}>{errors.password?.message}</span>
        </div>
        <button type="submit" className="register__button">
          Sign up
        </button>
        <div className="register__container">
          <p className="register__text">Already have an account?</p>
          <Link to="/signin" className="register__link">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
