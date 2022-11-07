import React from 'react';
import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ isSavedMovieSection, isMovieSection }) {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList isMovieSection={isMovieSection} isSavedMovieSection={isSavedMovieSection} />
    </section>
  );
}

export default Movies;
