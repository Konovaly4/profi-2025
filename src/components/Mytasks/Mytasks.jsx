import {useState, useEffect} from 'react';
import useTaskFetch from '../../hooks/useTaskFetch';
import {tasksData} from '../../constants/tasksData';
import {urlData} from '../../constants/urlData';
import Mytask from '../Mytask/Mytask';
import './Mytasks.css';

const Mytasks = (props) => {
  const [taskList, setTaskList] = useState([]);
  // get user token
  // temp data
  const workData = undefined;
  const worker = undefined;

  const {
    tasksGet,
    tasksGetByClient,
    tasksGetByWorker,
    taskCreate,
    taskUpdate,
    taskDelete
  } = useTaskFetch(urlData.network, props.token, workData, props.user, worker);

  useEffect(() => {
    !props.token && !props.user.userName && setTaskList([]);
    tasksGetByClient()
    .then(res => {
      setTaskList(res);
    })
  }, [])

  // fetch tasks
  // const getTasks = () => {
  //   tasksGet()
  //   .then(res => {
  //     console.log(res);
  //     setTaskList(res);
  //   })
  // }


  return (
    <section className='mytasks'>
      <div className='mytasks__container'>
        <h2 className='mytasks__title'>{tasksData.title}</h2>
        <button className='mytasks__filter-button'>{tasksData.buttonName}</button>
      </div>
      <ul className='mytasks__list'>
        {taskList.length === 0 ?
          <p className='mytasks__empty-note'>{tasksData.emptyNote}</p> :
          taskList.map((item, num) => {
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
