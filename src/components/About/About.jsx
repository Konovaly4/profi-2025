import React from 'react';
import './About.css';

const About = () => {

  return (
    <section className='about'>
        <h2 className='about__title'>Как это работает</h2>
        <ol className='about__info'>
          <li className='about__item'>
            <h3 className='about__item-title'>1</h3>
            <p className='about__item-text'>Зарегистрируйтесь и оформите заявку на нужную работу</p>
          </li>
          <li className='about__item'>
            <h3 className='about__item-title'>2</h3>
            <p className='about__item-text'>Дождитесь связи с мастером</p>
          </li>
          <li className='about__item'>
            <h3 className='about__item-title'>3</h3>
            <p className='about__item-text'>Оцените выполненную мастером работу</p>
          </li>
        </ol>
    </section>
  )
}

export default About;
