import React from 'react';
import {taskStatus} from '../../constants/tasksData';
import './Mytask.css';


const Mytask = (props) => {
  const status = props.task.accepted && props.task.completed ? taskStatus.finished : props.task.accepted ? taskStatus.confirmed : taskStatus.send;

  return (
    <li className='mytasks__item' id={props.number} onClick={props.onTaskShow}>
      <time className='mytasks__date'>{props.task.created_at}</time>
      <p className='mytasks__status'>Статус</p>
      <h3 className='mytasks__name'>{props.task.description}</h3>
      <p className='mytasks__status-type'>{status}</p>
    </li>
  )
}

export default Mytask;
