import React from 'react';
import useTaskFetch from '../../hooks/useTaskFetch';
import Button from '../Button/Button';
import {mainButtonsData} from '../../constants/mainButtonsData';
import {urlData} from '../../constants/urlData';
import './Main.css';

const Buttons = (props) => {
  const userName = props.user.userName;
  const userPhone = props.user.userPhone;
  const userEmail = props.user.userEmail; 
  const userToken = props.user.userToken;

  const userData = {userName, userPhone, userEmail, userToken}; 

  const {
    tasksGet,
    tasksGetByClient,
    tasksGetByWorker,
    taskCreate,
    taskUpdate,
    taskDelete
  } = useTaskFetch(urlData.local, userData);

  const getClientTasks = () => {
    tasksGetByClient()
    .then((res) => {
      props.setTasks(res);
    })
    .catch(err => {
      err.json()
      .then(err => console.log(err));
    })
  }



  return (
    <section className='main'>
        <h2 className='main__title'>Найди Мастера - 2025</h2>
        <div className='main__buttons-container'>
          <Button placeholder={mainButtonsData.showTasks} onPress={getClientTasks}/>
          <Button placeholder={mainButtonsData.createTask} onPress={props.showTaskForm}/>
        </div>
    </section>
  )
}

export default Buttons;
