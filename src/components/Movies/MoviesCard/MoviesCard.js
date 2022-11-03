import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import movie from "../../../images/movie.png";

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const moviesClassName = (`moviescard__save-button ${isSaved ? 'moviescard__saved-button' : ''}`);

  const saveMovie = () => {
    if (!isSaved) {
      setIsSaved(true)
    } else {
      setIsSaved(false)
    }
  }

  return (
    <div className="moviescard">
      <div className="moviescard__wrap">
        <div className="moviescard__container">
          <h2 className="moviescard__title">Title</h2>
          <p className="moviescard__time">1h 47min</p>
        </div>
        {
          location.pathname === '/movies' &&  <button type="text" onClick={saveMovie} className={moviesClassName}></button>
        }
        {
          location.pathname === '/saved-movies' &&  <button type="text" onClick={() => setIsSaved(false)} className="moviescard__delete-button"></button>
        }
      </div>
      <img src={movie} className="moviescard__image" alt="Movie"></img>
    </div>
  );
}

export default MoviesCard;
