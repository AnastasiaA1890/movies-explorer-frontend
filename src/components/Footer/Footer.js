import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Educational project Yandex.Practice x BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__copyright'>©2022</p>
        <nav className='footer__links'>
          <a href="https://practicum.yandex.ru/" className='footer__link' target="_blank" rel="noreferrer noopener">Yandex.Practikum</a>
          <a href="https://github.com/AnastasiaA1890" className='footer__link' target="_blank" rel="noreferrer noopener">Github</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
