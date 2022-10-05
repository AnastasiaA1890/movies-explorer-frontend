import React from 'react';
import './Promo.css'

export default function Promo() {
  return (
    <div className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <div className='promo__icons'>
        <p className='promo__icon'>О проекте</p>
        <p className='promo__icon'>Технологии</p>
        <p className='promo__icon'>Студент</p>
      </div>
    </div>
  )
}
