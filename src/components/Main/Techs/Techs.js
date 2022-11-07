import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Technology</h2>
      <div className='techs__about'>
        <h3 className='techs__about-title'>7 technologies</h3>
        <p className='techs__about-subtitle'>On the web development course, we learned the technologies that we used in the graduation project.</p>
        <ul className='techs__cards'>
          <li className='techs__card'>HTML</li>
          <li className='techs__card'>CSS</li>
          <li className='techs__card'>JS</li>
          <li className='techs__card'>React</li>
          <li className='techs__card'>Git</li>
          <li className='techs__card'>Express.js</li>
          <li className='techs__card'>mongoDB</li>
        </ul>
      </div>
    </section>
  )
}
