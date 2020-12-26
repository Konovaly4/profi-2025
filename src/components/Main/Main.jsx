import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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

  // state of link status and page appearance
  const [pageMode, setPageMode] = useState('main');

  // set page mode
  // useEffect(() => {
  //   props.loggedIn && setPageMode('main')
  // }, [props.loggedIn])

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

  const showTasks = () => {
    setPageMode('tasks');
  }

  const hideTasks = () => {
    setPageMode('main');
  }


  return (
    <section className='main'>
        <h2 className='main__title'>Найди Мастера - 2025</h2>
        <div className='main__buttons-container'>
          {props.loggedIn && pageMode ==='main' && <Link className='main__navlink' to='/my-tasks' onClick={showTasks}>{mainButtonsData.showTasks}</Link>}
          {props.loggedIn && pageMode ==='tasks' && <Link className='main__navlink' to='/' onClick={hideTasks}>{mainButtonsData.showMainPage}</Link>}
          {props.loggedIn && <Button placeholder={mainButtonsData.createTask} onPress={props.showTaskForm}/>}
        </div>
    </section>
  )
}

export default Buttons;
