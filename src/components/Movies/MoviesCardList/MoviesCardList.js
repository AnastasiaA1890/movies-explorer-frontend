import React, {useEffect, useState} from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ listOfMovies, filteredItem }) {
  
  const innerWidth = window.innerWidth;
  const [moreMovies, setMoreMovies] = useState(12);

  const loadMore = () => {
    if (innerWidth >= 768) {
      setMoreMovies(moreMovies + 3)
    } else if (innerWidth < 767 ) {
      setMoreMovies(moreMovies + 2)
    } 
  }

  return (
    <section>
      <div className="movieslist">
        {
          typeof filteredItem === 'string' && filteredItem.length !== 0 ?
          listOfMovies
            .filter((movie) => movie.nameEN.toLowerCase().includes(filteredItem.toLowerCase()))
            .slice(0, moreMovies)
            .map((movie) => (
                <MoviesCard movie={movie} key={movie.id} />
            )) : (<p className="movieslist__error">Please enter a keyword to launch list of movies</p>)
        }    
      </div>
      <div onClick={loadMore} className="movieslist__more-button">More</div>
    </section>
  );
}

export default MoviesCardList;
