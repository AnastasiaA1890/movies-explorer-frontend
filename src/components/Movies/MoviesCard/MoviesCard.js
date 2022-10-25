import React, {useState} from "react";
import "./MoviesCard.css";
import movie from "../../../images/movie.png";

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="moviescard">
      <div className="moviescard__wrap">
        <div className="moviescard__container">
          <h2 className="moviescard__title">Title</h2>
          <p className="moviescard__time">1h 47min</p>
        </div>
        {isSaved ? (
          <button className="moviescard__saved-button"></button>
        ) :
          <button className="moviescard__save-button"></button>
        }
      </div>
      <img src={movie} className='moviescard__image' alt='Movie'></img>
    </div>
  );
}

export default MoviesCard;
