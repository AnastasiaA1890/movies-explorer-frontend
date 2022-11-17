import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  
  return (
    <>
      <ul className="movieslist">
        {
          movies.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))
        }
      </ul>
      <div className="movieslist__more-button">More</div>
    </>
  );
}

export default MoviesCardList;
