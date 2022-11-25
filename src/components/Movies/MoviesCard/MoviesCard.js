import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
//import movie from "../../../images/movie.png";

function MoviesCard({ movie }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const moviesClassName = (`moviescard__save-button ${isSaved ? 'moviescard__saved-button' : ''}`);

  let hours = Math.trunc(movie.duration/60);
  let minutes = movie.duration % 60;
  const duration = `${hours}h ${minutes}min`

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
          <h2 className="moviescard__title">{movie.nameEN}</h2>
          <p className="moviescard__time">{duration}</p>
        </div>
        {
          location.pathname === '/movies' &&  <button type="button" onClick={saveMovie} className={moviesClassName}></button>
        }
        {
          location.pathname === '/saved-movies' &&  <button type="button" onClick={() => setIsSaved(false)} className="moviescard__delete-button"></button>
        }
      </div> 
      <a href={movie.trailerLink} rel="noreferrer" target="_blank"><img src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameEN} className="moviescard__image"></img></a>
    </div>
  );
}

export default MoviesCard;
