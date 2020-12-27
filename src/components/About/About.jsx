import React from 'react';
import './About.css';

const About = () => {

  return (
    <section className='about'>
        <h2 className='about__title'>Как это работает</h2>
        <ol className='about__info'>
          <li className='about__item'>
            <h3 className='about__item-title'>1</h3>
            <p className='about__item-text'>Заполните нужные критерии подбора</p>
          </li>
          <li className='about__item'>
            <h3 className='about__item-title'>2</h3>
            <p className='about__item-text'>Посмотрите анкеты наших специалистов</p>
          </li>
          <li className='about__item'>
            <h3 className='about__item-title'>3</h3>
            <p className='about__item-text'>Выберите подходящего именно Вам</p>
          </li>
        </ol>
    </section>
  )
}

export default About;
