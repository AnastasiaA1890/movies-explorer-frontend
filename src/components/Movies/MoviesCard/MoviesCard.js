import React from "react";
import "./MoviesCard.css";
import saveButton from "../../../images/save_button.svg";
import movie from "../../../images/movie.png";

function MoviesCard(props) {
  return (
    <div className="moviescard">
      <div className="moviescard__wrap">
        <div className="moviescard__container">
          <h2 className="moviescard__title">Title</h2>
          <p className="moviescard__time">1h 47min</p>
        </div>
        <img src={saveButton} alt="Save Button" className="moviescard__savebutton"></img>
      </div>
      <img src={movie} alt='Movie'></img>
    </div>
  );
}

export default MoviesCard;
