import React from 'react';
import {tasksData} from '../../constants/tasksData';
import Mytask from '../Mytask/Mytask';
import './Mytasks.css';

const Mytasks = (props) => {

  return (
    <section className='mytasks'>
      <div className='mytasks__container'>
        <h2 className='mytasks__title'>{tasksData.title}</h2>
        <button className='mytasks__filter-button'>{tasksData.buttonName}</button>
      </div>
      <ul className='mytasks__list'>
        {props.tasks.length === 0 ?
          <p className='mytasks__empty-note'>{tasksData.emptyNote}</p> :
          props.tasks.map((item, num) => {
            return (
              <Mytask key={num} number={num} onTaskShow={props.onTaskShow} task={item}/>
            )
          })
        }    
        </ul>
    </section>
  )
}

export default Mytasks;
