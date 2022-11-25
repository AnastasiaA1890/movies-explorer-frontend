import React, { useState } from "react";
import "./SearchForm.css";
import searchIcon from "../../../images/search-icon.svg";

function SearchForm(props) {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isFilter, setIsFilter] = useState('');
  const [filteredMovieList, setFilteredMovieList] = useState('');
  const [isShort, setIsShort] = useState(false);

  const handleFilter = (event) => {
    setFilteredMovieList(event.target.value);
  }

  const handleToggleActive = () => {
    setIsToggleActive(true);
    setIsShort(false)
  }

  const handleToggleNotActive = () => {
    setIsToggleActive(false);
    setIsShort(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onFilterMovies(filteredMovieList)
  }

  const handleShort = () => {
    props.onShortMovies(isShort)
  }


  return (
    <form onSubmit={handleSubmit} className="searchform" noValidate>
      <div className="searchform__container">
        <img className="searchform__icon" src={searchIcon} alt="Search Icon" />
        <input value={filteredMovieList} onChange={handleFilter} type="text" className="searchform__input" placeholder="Movie" required/>
      </div>
      <button className="searchform__button" type="submit"></button>
      <div className="searchform__line"></div>
      <div className="searchform__button-container" onClick={handleShort}>
        {
          isToggleActive ? (<button type='button' onClick={handleToggleNotActive} className={isToggleActive ? 'searchform__toggle-button' : 'searchform__toggle-button_disable'}></button>)
          : (<button type='button' onClick={handleToggleActive} className='searchform__toggle-button_disable'></button>)
        }
        {/* <button type='text' onClick={() => setIsToggleActive(false)} className={isToggleActive ? 'searchform__toggle-button' : 'searchform__toggle-button_disable'}></button> */}
        <p className="searchform__toggle-button-name">Short films</p>
      </div>
    </form>
  );
}

export default SearchForm;
