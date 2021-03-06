import {useState, useEffect} from 'react';
import Mytask from '../Mytask/Mytask';
import TaskCard from '../TaskCard/TaskCard';
import useTaskFetch from '../../hooks/useTaskFetch';
import {tasksData} from '../../constants/tasksData';
import {urlData} from '../../constants/urlData';
import './Mytasks.css';

const Mytasks = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [taskCardShow, setTaskCardShow] = useState(false);
  const [currentTask, setCurTask] = useState([]);
  // get user token
  // temp data
  const workData = undefined;
  const worker = undefined;

  const {tasksGetByClient} = useTaskFetch(urlData.network, props.token, workData, props.user, worker);

  useEffect(() => {
    !props.token && !props.user.username && setTaskList([]);
    tasksGetByClient()
    .then(res => {
      setTaskList(res);
    })
    console.log('upd')
  }, [])

  const showTaskCard = (e) => {
    console.log(e.target.id);
    setCurTask(taskList[e.target.id]);
    setTaskCardShow(true);
    // console.log('currentTask - ' + currentTask.client_name);
  }

  const hideTaskCard = () => {
    setTaskCardShow(false);
  }


  return (
    <section className='mytasks'>
      <div className='mytasks__container'>
        <h2 className='mytasks__title'>{tasksData.title}</h2>
      </div>
      <ul className='mytasks__list'>
        {taskList.length === 0 ?
          <p className='mytasks__empty-note'>{tasksData.emptyNote}</p> :
          taskList.map((item, num) => {
            return (
              <Mytask key={num} number={num} onTaskShow={showTaskCard} task={item}/>
            )
          })
        }
      </ul>
      {currentTask.length !== 0 &&
        <TaskCard visibility={taskCardShow} currentTask={currentTask} onClose={hideTaskCard} token={props.token} user={props.user} />
      }
    </section>
  )
}

export default Mytasks;
