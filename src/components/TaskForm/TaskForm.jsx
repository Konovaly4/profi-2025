import {useState, useEffect} from 'react';
import cn from 'classnames';
import TaskFormSelect from './TaskFormSelect/TaskFormSelect';
import CloseButton from '../CloseButton/CloseButton';
import AlertPopup from '../AlertPopup/AlertPopup';
import useTaskFetch from '../../hooks/useTaskFetch';
import {taskFormData, alertPopupData, taskFormPlaceholders,  taskFormLabels, taskFormTypeList, taskFormSubtypeList, buttonData} from '../../constants/formData';

import './TaskForm.css';

const TaskForm = (props) => {
  // select states
  const [workType, setWorkType] = useState(0);
  const [workSubtype, setWorkSubtype] = useState(0);
  const [alertVisibility, SetAlertVisibility] = useState(false);

  // set work type
  const setType = (e) => {
    // console.log('e.target - ' + e.target.value)
    setWorkType(e.target.value);
    setWorkSubtype(0);
  }

  // set work subtype
  const setSubtype = (e) => {
    // console.log('e.subtarget - ' + e.target.value)
    setWorkSubtype(e.target.value);
  }

  // collect data to fetch
  let selectedWorkType = taskFormTypeList[workType];
  let selectedWorkSubtype = taskFormSubtypeList[workType][workSubtype];

  // open alert popup
  const alertOpen = () => {
    SetAlertVisibility(true);
  }
  
  // close alert popup
  const alertClose = () => {
    SetAlertVisibility(false);
      props.formClose();
  }

  // closing by clicking on wrapper
  const closeByWrapper = (e) => {
    !e.target.closest('.task-form') && alertOpen();
  }


  console.log(selectedWorkType);
  console.log(selectedWorkSubtype);
  console.log('break');


  return (
    <div className={cn('task-form-wrapper', {'task-form-wrapper_visible': props.visibility})} onClick={closeByWrapper}>
      <section className='task-form'>
        <h2 className='task-form__title'>{taskFormData.title}</h2>
        <ul className='task-form__list'>
          <li className='task-form__list-item'>
            <p className='task-form__field-note'>{taskFormData.workType}</p>
            <TaskFormSelect name='work-type' label={taskFormLabels.workType} optionList={taskFormTypeList} selectOption={setType} />
          </li>
          <li className='task-form__list-item'>
            <p className='task-form__field-note'>{taskFormData.workSubtype}</p>
            <TaskFormSelect name='work-subtype' label={taskFormLabels.workSubtype} optionList={taskFormSubtypeList[workType]} selectOption={setSubtype} />
          </li>
          <li className='task-form__list-item'>
            <p className='task-form__field-note'>{taskFormData.workDescription}</p>
            <textarea name='description' rows='4' className='task-form__field-item' placeholder={taskFormPlaceholders.workDescription}></textarea>
          </li>
          <li className='task-form__list-item'>
            <p className='task-form__field-note'>{taskFormData.name}</p>
            <input type='text' required minLength='2' className='task-form__field-item' placeholder={taskFormPlaceholders.clientName}></input>
          </li>
          <li className='task-form__list-item'>
            <p className='task-form__field-note'>{taskFormData.phone}</p>
            <input type='text' required minLength='2' className='task-form__field-item' placeholder={taskFormPlaceholders.clientPhone}></input>
          </li>
          <li className='task-form__list-item'>
            <p className='task-form__field-note'>{taskFormData.email}</p>
            <input type='text' required minLength='2' className='task-form__field-item' placeholder={taskFormPlaceholders.clientEmail}></input>
          </li>
        </ul>
        <button className='task-form__submit-button'>{buttonData.submit}</button>
        <CloseButton onPress={alertOpen} />
        <AlertPopup visibility={alertVisibility} title={alertPopupData.dataFormClose} onYesClick={alertClose} onNoClick={alertClose} />
      </section>
    </div>
  )
}

export default TaskForm;