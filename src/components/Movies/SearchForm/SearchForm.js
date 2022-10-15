import React from 'react';
import './SearchForm.css';
import searchIcon from '../../../images/search-icon.svg'

function SearchForm(props) {
  return (
    <>
      <div className='searchform'>
        <div className='searchform__container'>
          <img src={searchIcon} alt="Search Icon"/>
          <input type="text" className='searchform__input' placeholder='Movie'/>
        </div>
        <div className='searchform__button'>Search</div>
        <div className='searchform__left-line'></div>
      </div>
      <div className='searchform__line'></div>
    </>
  );
}

export default SearchForm;
