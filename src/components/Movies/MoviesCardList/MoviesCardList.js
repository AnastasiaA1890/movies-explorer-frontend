import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <>
      <div className="movieslist">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className="movieslist__more-button">More</div>
    </>
  );
}

export default MoviesCardList;
