import { useState, useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import "./Profile.css";
import {CurrentUserContext} from "../../context/CurrentUserContext";

function Profile({ handleSignOut, onUpdateUser}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const userContext = useContext(CurrentUserContext);

  useEffect(() => {
    setEmail(userContext.email || '');
    setName(userContext.name || '')
  }, [userContext]);

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onUpdateUser({
      name,
      email
    })
  }

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <h2 className="profile__title">Hello, {name}!</h2>
        <div className="profile__input-wrap">
          <label htmlFor="" className="profile__field">
            Name
          </label>
          <input placeholder='Name' value={name} onChange={handleChangeName} type="name" className="profile__input" required/>
        </div>
        <div className='profile__line'></div>
        <div className="profile__input-wrap">
          <label htmlFor="" className="profile__field">
            Email
          </label>
          <input placeholder='Email' value={email} onChange={handleChangeEmail} type="email" className="profile__input" required/>
        </div>
        <div className="profile__buttons-container">
          <button type="submit" className="profile__button">
            Edit profile
          </button>
          <Link onClick={handleSignOut} to="/" className="profile__link">
            Sign out
          </Link>
        </div>
      </form>
    </section>

  );
}

export default Profile;
