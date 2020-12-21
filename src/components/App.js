import {useState, useEffect} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Poem from './Poem/Poem';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';
import TaskForm from './TaskForm/TaskForm';
import TaskCard from './TaskCard/TaskCard';
import Mytasks from './Mytasks/Mytasks';
import './App.css';

function App() {
  // select states
  const [taskShow, setTaskShow] = useState(false);
  const [taskCardShow, setTaskCardShow] = useState(false);
  const [user, setUser] = useState({
    userToken: undefined,
    userId: undefined,
    userName: undefined,
    userPhone: undefined,
    userEmail: undefined,
  });
  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState(undefined);

  // show task popup
  const showTaskPopup = () => {
    setTaskShow(true)
  }

  // hide task popup
  const hideTaskPopup = () => {
    setTaskShow(false)
  }

  // show task card popup
  const showTaskCardPopup = (num) => {
    setCurrentTask(num)
    setTaskCardShow(true)
  }

  // hide task popup
  const hideTaskCardPopup = () => {
    setTaskCardShow(false)
  }

  // fetch user
  const setCurrentUser = (res) => {;
    setUser({
      userToken: res.jwt,
      userId: res.user.id,
      userName: res.user.username,
      userPhone: res.user.userphone,
      userEmail: res.user.email,
    })
  }

  const findTasks = (res) => {
    setTaskList(res);
  }

  return (
    <div className="App">
      <Header setUser={setCurrentUser} user={user}/>
      <Main showTaskForm={showTaskPopup} hideTaskForm={hideTaskPopup} user={user} setTasks={findTasks} />
      <About />
      <Poem />
      <Reviews />
      <Footer />
      <Mytasks onTaskShow={showTaskCardPopup} tasks={taskList}/>
      <TaskForm visibility={taskShow} formClose={hideTaskPopup} user={user} />
      <TaskCard visibility={taskCardShow} formClose={hideTaskCardPopup} />
    </div>
  );
}

export default App;