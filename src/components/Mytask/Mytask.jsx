import React from 'react';
import './Mytask.css';


const Mytask = (props) => {

  return (
    <li className='mytasks__item' onClick={props.onTaskShow}>
      <time className='mytasks__date' datetime="2020-12-25">25.12.2020</time>
      <p className='mytasks__status'>Статус</p>
      <h3 className='mytasks__name'>Поменять электропроводку</h3>
      <p className='mytasks__status-type'>В обработке</p>
    </li>
  )
}

export default Mytask;
