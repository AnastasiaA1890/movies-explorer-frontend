import React from 'react';
import './Portfolio.css';
import image from '../../../images/arrow.svg'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://anastasiaa1890.github.io/zaberu/" target="_blank" rel="noreferrer noopener">Static site</a>
          <img src={image} alt="Arrow image" className='portfolio__img'/>
        </li>
        <div className='portfolio__line'></div>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://anastasiaa1890.github.io/russian-travel/index.html" target="_blank" rel="noreferrer noopener">Responsive website</a>
          <img src={image} alt="Arrow image" className='portfolio__img'/>
        </li>
        <div className='portfolio__line'></div>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://anastasia.mesto.nomoredomains.sbs/" target="_blank" rel="noreferrer noopener">Single page web application</a>
          <img src={image} alt="Arrow image" className='portfolio__img'/>
        </li>
      </ul>
    </div>
  )
}
