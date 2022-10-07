import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Technology</h2>
      <div className='techs__about'>
        <h3 className='techs__about-title'>7 technologies</h3>
        <p className='techs__about-subtitle'>On the web development course, we learned the technologies that we used in the graduation project.</p>
        <div className='techs__cards'>
          <div className='techs__card'>HTML</div>
          <div className='techs__card'>CSS</div>
          <div className='techs__card'>JS</div>
          <div className='techs__card'>React</div>
          <div className='techs__card'>Git</div>
          <div className='techs__card'>Express.js</div>
          <div className='techs__card'>mongoDB</div>
        </div>
      </div>
    </section>
  )
}
