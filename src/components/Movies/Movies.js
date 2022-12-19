import React from 'react';
import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ isSavedMovieSection, isMovieSection, movies, onFilterMovies, filteredItem, onShortMovies }) {
  return (
    <section className='movies'>
      <SearchForm onFilterMovies={onFilterMovies} onShortMovies={onShortMovies}/>
      <MoviesCardList movies={movies} filteredItem={filteredItem} isMovieSection={isMovieSection} isSavedMovieSection={isSavedMovieSection} />
    </section>
  );
}

export default Movies;
