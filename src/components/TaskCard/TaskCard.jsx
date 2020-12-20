import {useState} from 'react';
import cn from 'classnames';
import CloseButton from '../CloseButton/CloseButton';
import {taskFormPlaceholders, taskButtonPlaceholders, buttonData} from '../../constants/formData';
import './TaskCard.css'

const TaskCard = (props) => {
  // set work status
  const [workConfirmation, setWorkConfirmation] = useState('not-confirmed');

  // work status setter
  const setWorkStatus = () => {
    setWorkConfirmation(workConfirmation === 'not-confirmed' ? 'confirmed' : workConfirmation === 'confirmed' ? 'done' : 'not-confirmed');
  }

    // closing by clicking on wrapper
    const closeByWrapper = (e) => {
      !e.target.closest('.task-card') && props.formClose();
    }

  return (
    <div className={cn('task-card__wrapper', {'task-card__wrapper_visible': props.visibility})} onClick={closeByWrapper}>
      <section className='task-card'>
        <h2 className='task-card__title'>Подтип работы</h2>
        <p className='task-card__create-data'>Дата создания</p>
        <textarea className='task-card__description' rows='4' placeholder={taskFormPlaceholders.workDescription}></textarea>
        <button className={cn('task-card__confirm-button', {
          'task-card__confirm-button_not-confirmed': workConfirmation === 'not-confirmed',
          'task-card__confirm-button_confirmed': workConfirmation === 'confirmed',
          'task-card__confirm-button_done': workConfirmation === 'done'
        })} onClick={setWorkStatus}>{
          workConfirmation === 'not-confirmed' ? taskButtonPlaceholders.notConfirmed : 
          workConfirmation === 'confirmed' ? taskButtonPlaceholders.confirmed : taskButtonPlaceholders.finished
          }</button>
        <textarea className='task-card__feedback' rows='6' placeholder={taskFormPlaceholders.clientFeedback}></textarea>
        <div className='task-card__button-wrapper'>
          <button className='task-card__button task-card__button_save-button'>{buttonData.save}</button>
          <button className='task-card__button task-card__button_delete-button'>{buttonData.delete}</button>
        </div>
        <CloseButton onPress={props.formClose} />
      </section>
    </div>
  )
}

export default TaskCard;