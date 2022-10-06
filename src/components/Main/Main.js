import React from 'react';
import AboutProject from './AboutProject/AboutProject';
import './Main.css';
import Promo from './Promo/Promo';


export default function Main() {
  return (
    <main className='main'>
      <Promo />
      <AboutProject />
    </main>
  )
}
