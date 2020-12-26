import {useState} from 'react';
import cn from 'classnames';
import './Review.css'
import avatarPath from '../../../images/review-avatar.jpg';

const Review = (props) => {
  const rating = props.data.rating;


  return (
    <li className='review__container'>
      <img className='review__image' src={avatarPath} ali='avatar-path' />
      <h2 className='review__header'>{props.data.description}</h2>
      <p className='review__text'>{props.data.feedback ? props.data.feedback : 'Пока нет отзыва, но скоро он точно появится, вот тогда мы и попляшем :-)'}</p>
      <p className='review__text-writer'>{props.data.client_name}</p>
      <ul className='review__rating-container'>
        <li id='1' className={cn('review__rating-item', {'review__rating-item_active': rating >=1})} />
        <li id='1' className={cn('review__rating-item', {'review__rating-item_active': rating >=2})} />
        <li id='1' className={cn('review__rating-item', {'review__rating-item_active': rating >=3})} />
        <li id='1' className={cn('review__rating-item', {'review__rating-item_active': rating >=4})} />
      </ul>
      <button className='review__button'>Подробнее</button>
    </li>
  )
}

export default Review;