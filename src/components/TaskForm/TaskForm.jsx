import {useState, useEffect} from 'react';
import cn from 'classnames';
import TaskFormSelect from './TaskFormSelect/TaskFormSelect';
import CloseButton from '../CloseButton/CloseButton';
import AlertPopup from '../AlertPopup/AlertPopup';
import useTaskFetch from '../../hooks/useTaskFetch';
import {taskFormData, alertPopupData, taskFormPlaceholders,  taskFormLabels, taskFormTypeList, taskFormSubtypeList, buttonData} from '../../constants/formData';
import {urlData} from '../../constants/urlData';

import './TaskForm.css';

const TaskForm = (props) => {
  // select states
  const [alertVisibility, SetAlertVisibility] = useState(false);
  const [workType, setWorkType] = useState(0);
  const [workSubtype, setWorkSubtype] = useState(0);
  const [workDescription, setWorkDescription] = useState(0);
  // collect user data
  const userData = props.user;
  // create common data
  const workData = {workType, workSubtype, workDescription};
  const workerData = undefined;

  // use fetch hooks
  const {
    tasksGet,
    tasksGetByClient,
    tasksGetByWorker,
    taskCreate,
    taskUpdate,
    taskDelete
  } = useTaskFetch(urlData.network, props.token, workData, userData, workerData)


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

  // set work description
  const setDescription = (e) => {
    setWorkDescription(e.target.value);
  }

  // open alert popup
  const alertOpen = () => {
    SetAlertVisibility(true);
  }
  
  // close alert popup with yes option
  const alertCloseYesOption = () => {
    SetAlertVisibility(false);
      props.formClose();
  }

  // close alert popup with yes option
  const alertCloseNoOption = () => {
    SetAlertVisibility(false);
  }

  // closing by clicking on wrapper
  const closeByWrapper = (e) => {
    !e.target.closest('.task-form') && alertOpen();
  }

    // create new task
    const createTask = () => {
      taskCreate()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err.json()
        .then(err => console.log(err));
      })
    }

    // click to send
    const formSubmit = (e) => {
      e.preventDefault();
      // console.log('token - ' + props.token);
      createTask();
      props.setSubmitState();
      props.formClose();
    }


  // console.log(selectedWorkType);
  // console.log(selectedWorkSubtype);
  // console.log('break');


  return (
    <div className={cn('task-form-wrapper', {'task-form-wrapper_visible': props.visibility})} onClick={closeByWrapper}>
      <form className='task-form' onSubmit={formSubmit}>
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
            <textarea name='description' rows='4' className='task-form__field-item' placeholder={taskFormPlaceholders.workDescription} onChange={setDescription}></textarea>
          </li>
          {/* <li className='task-form__list-item'>
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
          </li> */}
        </ul>
        <p className='task-form__field-note'>Ваши имя, телефон и email будут указаны в заявке</p>
        <button className='task-form__submit-button'>{buttonData.submit}</button>
        <CloseButton onPress={alertOpen} />
        <AlertPopup visibility={alertVisibility} title={alertPopupData.dataFormClose} onYesClick={alertCloseYesOption} onNoClick={alertCloseNoOption} />
      </form>
    </div>
  )
}

export default TaskForm;