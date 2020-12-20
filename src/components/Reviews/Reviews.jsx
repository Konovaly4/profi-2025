import React from 'react';
import './Reviews.css';

const Reviews = () => {

  return (
    <section className='reviews'>
      <h2 className='reviews__title'>Отзывы</h2>
      <ul className='reviews__list'>
        <li className='reviews__item'>
          <p className='reviews__content'>Здесь будет отзыв о работах</p>
        </li>
        <li className='reviews__item'>
          <p className='reviews__content'>Здесь будет отзыв о работах</p>
        </li>
        <li className='reviews__item'>
          <p className='reviews__content'>Здесь будет отзыв о работах</p>
        </li>
      </ul>
    </section>
  )
}

export default Reviews;
