import React from 'react';
import './Portfolio.css';
import image from '../../../images/arrow.svg'

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://anastasiaa1890.github.io/zaberu/" target="_blank" rel="noreferrer noopener">
            <p className='portfolio__link-text'>Static site</p>
            <img src={image} alt="Arrow" className='portfolio__img'/>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://anastasiaa1890.github.io/russian-travel/index.html" target="_blank" rel="noreferrer noopener">
            <p className='portfolio__link-text'>Responsive website</p>
            <img src={image} alt="Arrow" className='portfolio__img'/>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://anastasia.mesto.nomoredomains.sbs/" target="_blank" rel="noreferrer noopener">
            <p className='portfolio__link-text'>Single page web application</p>
            <img src={image} alt="Arrow" className='portfolio__img'/>
          </a>
        </li>
      </ul>
    </section>
  )
}
