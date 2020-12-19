import React from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

  return (
    <section className='reviews'>
      <div className='reviews__container'>
        <h2 className='reviews__title'>Отзывы</h2>
        <ul className='reviews__list'>
          <li className='reviews__item'><Review /></li>
          <li className='reviews__item'><Review /></li>
          <li className='reviews__item'><Review /></li>
          </ul>
        </div>
    </section>
  )
}

export default Reviews;
