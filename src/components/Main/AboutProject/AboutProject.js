import React from 'react';
import './AboutProject.css'

export default function AboutProject() {
  return (
    <section className='aboutproject'>
      <h2 className='aboutproject__title'>About project</h2>
      <div className='aboutproject__content'>
        <div className='aboutproject__item'>
          <h3 className='aboutproject__subtitle'>The diploma project included 5 stages</h3>
          <p className='aboutproject__paragraph'>Setting up a plan, working on the backend, layout, adding functionality and final improvements.</p>
        </div>
        <div className='aboutproject__item'>
          <h3 className='aboutproject__subtitle'>It took 5 weeks to complete the project</h3>
          <p className='aboutproject__paragraph'>Each stage had a soft and hard deadline that had to be met in order to successfully defend.</p>
        </div>
      </div>
      <div className='aboutproject__duration'>
        <div className='aboutproject__duration-item'>
          <p className='aboutproject__duration-title aboutproject__duration-title_colored'>1st week</p>
          <p className='aboutproject__duration-text'>Back-end</p>
        </div>
        <div className='aboutproject__duration-item'>
          <p className='aboutproject__duration-title'>4th week</p>
          <p className='aboutproject__duration-text'>Front-end</p>
        </div>
      </div>
    </section>
  )
}
