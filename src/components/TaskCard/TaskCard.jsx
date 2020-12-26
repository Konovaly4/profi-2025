import {useState} from 'react';
import cn from 'classnames';
import CloseButton from '../CloseButton/CloseButton';
import AlertPopup from '../AlertPopup/AlertPopup';
import useTaskFetch from '../../hooks/useTaskFetch';
import {urlData} from '../../constants/urlData';
import {taskFormPlaceholders, taskButtonPlaceholders, buttonData, alertPopupData, taskFormTypeList, taskFormSubtypeList} from '../../constants/formData';
import './TaskCard.css'

const TaskCard = (props) => {
  // set work status
  const [workConfirmation, setWorkConfirmation] = useState('not-confirmed');
  const [alertVisibility, SetAlertVisibility] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState('');

  // constants
  const workSubTypeList = taskFormSubtypeList[props.currentTask.type];
  const workData = props.currentTask;
  const worker = undefined;


  // console.log(workData)
    // hooks
    const {
      tasksGet,
      tasksGetByClient,
      tasksGetByWorker,
      taskCreate,
      taskUpdate,
      taskDelete
    } = useTaskFetch(urlData.network, props.token, workData, props.user, worker)

  // work status setter
  const setWorkStatus = () => {
    setWorkConfirmation(workConfirmation === 'not-confirmed' ? 'confirmed' : workConfirmation === 'confirmed' ? 'done' : 'not-confirmed');
  }

  // closing by clicking on wrapper
  const closeByWrapper = (e) => {
    e.preventDefault();
    !e.target.closest('.task-card') && props.onClose();
  }

  // open alert popup
  const alertOpen = () => {
    SetAlertVisibility(true);
  }

  // close alert popup
  const alertClose = (e) => {
    e.preventDefault();
    SetAlertVisibility(false);
  }

  const setFeedback = (e) => {
    setFeedbackValue(e.target.value);
  }

  const updateTask = (e) => {
    e.preventDefault();
    workData.feedback = feedbackValue;
    if (workConfirmation === 'not-confirmed') {
      workData.accepted = false;
      workData.completed = false;
    } else if (workConfirmation === 'confirmed') {
      workData.accepted = true;
      workData.completed = false;
    }else if (workConfirmation === 'done') {
      workData.accepted = true;
      workData.completed = true;
    };
    taskUpdate()
    .then(res => console.log(res))
    .catch(err => console.log(err));
    props.onClose();
  }

  const deleteTask = (e) => {
    e.preventDefault();
    taskDelete()
    .then(res => console.log(res))
    .catch(err => console.log(err));
    SetAlertVisibility(false);
    props.onClose();
  }

  return (
    <div className={cn('task-card__wrapper', {'task-card__wrapper_visible': props.visibility})} onClick={closeByWrapper}>
      <section className='task-card'>
        <h2 className='task-card__title'>{workSubTypeList[props.currentTask.subtype]  }</h2>
        <p className='task-card__create-data'>{props.currentTask.createdAt}</p>
        <p className='task-card__description' rows='4' placeholder={taskFormPlaceholders.workDescription}>{props.currentTask.description}</p>
        <button className={cn('task-card__confirm-button', {
          'task-card__confirm-button_not-confirmed': workConfirmation === 'not-confirmed',
          'task-card__confirm-button_confirmed': workConfirmation === 'confirmed',
          'task-card__confirm-button_done': workConfirmation === 'done'
        })} onClick={setWorkStatus}>{
          workConfirmation === 'not-confirmed' ? taskButtonPlaceholders.notConfirmed : 
          workConfirmation === 'confirmed' ? taskButtonPlaceholders.confirmed : taskButtonPlaceholders.finished
          }</button>
        <textarea className='task-card__feedback' rows='6' placeholder={taskFormPlaceholders.clientFeedback} onChange={setFeedback}></textarea>
        <div className='task-card__rating-container'>
          <button className='task-card__rating-item' />
          <button className='task-card__rating-item' />
          <button className='task-card__rating-item' />
          <button className='task-card__rating-item' />
        </div>
        <div className='task-card__button-wrapper'>
          <button className='task-card__button task-card__button_save-button' onClick={updateTask}>{buttonData.save}</button>
          <button className='task-card__button task-card__button_delete-button' onClick={alertOpen} >{buttonData.delete}</button>
        </div>
        <CloseButton onPress={props.onClose} />
        <AlertPopup visibility={alertVisibility} title={alertPopupData.dataCardDelete} onYesClick={deleteTask} onNoClick={alertClose} />
      </section>
    </div>
  )
}

export default TaskCard;