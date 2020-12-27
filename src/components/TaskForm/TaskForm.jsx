import {useState} from 'react';
import {useHistory} from 'react-router-dom';
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
  const [type, setWorkType] = useState(0);
  const [subtype, setWorkSubtype] = useState(0);
  const [description, setWorkDescription] = useState(0);
  // collect user data
  const userData = props.user;
  // create common data
  const workData = {type, subtype, description};
  const workerData = undefined;

  // history
  const history = useHistory();

  // use fetch hooks
  const {
    taskCreate,
  } = useTaskFetch(urlData.network, props.token, workData, userData, workerData)


  // set work type
  const setType = (e) => {
    setWorkType(e.target.value);
    setWorkSubtype(0);
  }

  // set work subtype
  const setSubtype = (e) => {
    setWorkSubtype(e.target.value);
  }

  // set work description
  const setDescription = (e) => {
    setWorkDescription(e.target.value);
  }

  // open alert popup
  const alertOpen = (e) => {
    e && e.preventDefault();
    SetAlertVisibility(true);
  }
  
  // close alert popup with yes option
  const alertCloseYesOption = (e) => {
    e.preventDefault();
    SetAlertVisibility(false);
    props.formClose();
  }

  // close alert popup with yes option
  const alertCloseNoOption = (e) => {
    e.preventDefault();
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
      history.replace('/my-tasks');
      props.formClose();
    }


  // console.log(selectedWorkType);
  // console.log(selectedWorkSubtype);
  // console.log('break');


  return (
    <div className={cn('task-form-wrapper', {'task-form-wrapper_visible': props.visibility})} onClick={closeByWrapper}>
      <form className='task-form'>
        <h2 className='task-form__title'>{taskFormData.title}</h2>
        <ul className='task-form__list'>
          <li className='task-form__list-item'>
            <p className='task-form__field-note'>{taskFormData.workType}</p>
            <TaskFormSelect name='work-type' label={taskFormLabels.workType} optionList={taskFormTypeList} selectOption={setType} />
          </li>
          <li className='task-form__list-item'>
            <p className='task-form__field-note'>{taskFormData.workSubtype}</p>
            <TaskFormSelect name='work-subtype' label={taskFormLabels.workSubtype} optionList={taskFormSubtypeList[type]} selectOption={setSubtype} />
          </li>
          <li className='task-form__list-item'>
            <p className='task-form__field-note'>{taskFormData.workDescription}</p>
            <textarea name='description' rows='4' className='task-form__field-item' placeholder={taskFormPlaceholders.workDescription} onChange={setDescription}></textarea>
          </li>
        </ul>
        <p className='task-form__field-note'>Ваши имя, телефон и email будут указаны в заявке</p>
        <button className='task-form__submit-button' onClick={formSubmit}>{buttonData.submit}</button>
        <CloseButton onPress={alertOpen} />
        <AlertPopup visibility={alertVisibility} title={alertPopupData.dataFormClose} onYesClick={alertCloseYesOption} onNoClick={alertCloseNoOption} />
      </form>
    </div>
  )
}

export default TaskForm;