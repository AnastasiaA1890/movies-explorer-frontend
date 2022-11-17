import React from 'react';
import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ isSavedMovieSection, isMovieSection, movies }) {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList movies={movies} isMovieSection={isMovieSection} isSavedMovieSection={isSavedMovieSection} />
    </section>
  );
}

export default Movies;
