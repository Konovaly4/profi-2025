import React from 'react';
import {taskFormSubtypeList} from '../../constants/formData';
import {taskStatus} from '../../constants/tasksData';
import bgImg from '../../images/about_bgi.svg';
import './Mytask.css';


const Mytask = (props) => {
  const status = props.task.accepted && props.task.completed ? 
  taskStatus.finished : 
  props.task.accepted ? taskStatus.confirmed : 
  taskStatus.send;

  const taskSubtypeList = taskFormSubtypeList[props.task.type];
  const taskSubtype = taskSubtypeList[props.task.subtype];
  const taskCreatedTime = props.task.created_at.slice(0, 10);

  return (
    <li className='mytasks__item' id={props.number} onClick={props.onTaskShow}>
      <p className='mytasks__item-worktitle'>Вид работы</p>
      <h3 className='mytasks__name'>{taskSubtype}</h3>
      <p className='mytasks__item-title'>Дата создания</p>
      <time className='mytasks__date'>{taskCreatedTime}</time>
      <p className='mytasks__item-title'>Описание работы</p>
      <time className='mytasks__description'>{props.task.description}</time>
      <div className='mytasks__status-wrapper'>
        <p className='mytasks__status'>Статус</p>
        <p className='mytasks__status mytasks__status_type'>{status}</p>
      </div>
      <img className='mytasks__label' src={bgImg} alt='label' />
    </li>
  )
}

export default Mytask;
