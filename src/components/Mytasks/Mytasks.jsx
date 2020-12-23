import {useState} from 'react';
import useTaskFetch from '../../hooks/useTaskFetch';
import {tasksData} from '../../constants/tasksData';
import {urlData} from '../../constants/urlData';
import Mytask from '../Mytask/Mytask';
import './Mytasks.css';

const Mytasks = (props) => {
  const [taskList, setTaskList] = useState([]);
  // get user token
  const token = localStorage.getItem('jwt');

  // collect data
  const fetchData = {
    userToken: token,
    userName: props.user.userName,
    userEmail: props.user.userEmail,
    userPassword: props.user.userPassword
  }

  const {
    tasksGet,
    tasksGetByClient,
    tasksGetByWorker,
    taskCreate,
    taskUpdate,
    taskDelete
  } = useTaskFetch(urlData.local, fetchData);

  // fetch tasks
  const getTasks = () => {
    tasksGet()
    .then(res => {
      console.log(res);
      setTaskList(res);
    })
  }


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
