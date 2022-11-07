import {Link} from "react-router-dom";
import "./Profile.css";

function Profile(props) {

  return (
    <section className="profile">
      <form className="profile__form" novalidate>
        <h2 className="profile__title">Hello, Anastasia!</h2>
        <div className="profile__input-wrap">
          <label htmlFor="" className="profile__field">
            Name
          </label>
          <input placeholder='Anastasia' type="name" className="profile__input" required/>
        </div>
        <div className='profile__line'></div>
        <div className="profile__input-wrap">
          <label htmlFor="" className="profile__field">
            Email
          </label>
          <input placeholder='test@test.ru' type="email" className="profile__input" required/>
        </div>
        <div className="profile__buttons-container">
          <button type="submit" className="profile__button">
            Edit profile
          </button>
          <Link to="/" className="profile__link">
            Sign out
          </Link>
        </div>
      </form>
    </section>

  );
}

export default Profile;
