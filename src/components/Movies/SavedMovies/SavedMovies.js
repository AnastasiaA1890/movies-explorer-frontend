import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <div className='savedmovies'>
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default SavedMovies;
