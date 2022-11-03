import React, { useState } from "react";
import "./SearchForm.css";
import searchIcon from "../../../images/search-icon.svg";

function SearchForm(props) {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isFilter, setIsFilter] = useState('');

  return (
    <form className="searchform">
      <div className="searchform__container">
        <img className="searchform__icon" src={searchIcon} alt="Search Icon" />
        <input type="text" className="searchform__input" placeholder="Movie" required/>
      </div>
      <button className="searchform__button" type="submit"></button>
      <div className="searchform__line"></div>
      <div className="searchform__button-container">
        <button type='text' className="searchform__toggle-button"></button>
        <p className="searchform__toggle-button-name">Short films</p>
      </div>
    </form>
  );
}

export default SearchForm;
