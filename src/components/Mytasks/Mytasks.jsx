import React from 'react';
import {myTasksData} from '../../constants/formData';
import Mytask from '../Mytask/Mytask';
import './Mytasks.css';

const Mytasks = (props) => {

  return (
    <section className='mytasks'>
      <div className='mytasks__container'>
        <h2 className='mytasks__title'>Мои заявки</h2>
        <button className='mytasks__filter-button'>Фильтр</button>
      </div>
      <ul className='mytasks__list'>
          <Mytask onTaskShow={props.onTaskShow}/>
          <Mytask onTaskShow={props.onTaskShow}/>
          <Mytask onTaskShow={props.onTaskShow}/>
          <Mytask onTaskShow={props.onTaskShow}/>
        </ul>
    </section>
  )
}

export default Mytasks;
