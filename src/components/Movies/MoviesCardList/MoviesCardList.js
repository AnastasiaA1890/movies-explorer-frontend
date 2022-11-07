import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <>
      <ul className="movieslist">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <div className="movieslist__more-button">More</div>
    </>
  );
}

export default MoviesCardList;
