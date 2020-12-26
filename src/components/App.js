import {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// hooks
import useTaskFetch from '../hooks/useTaskFetch';
// components
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Poem from './Poem/Poem';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';
import TaskForm from './TaskForm/TaskForm';
import TaskCard from './TaskCard/TaskCard';
import Mytasks from './Mytasks/Mytasks';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
// constants
import {urlData} from '../constants/urlData';
// css
import './App.css';

function App() {
  // select states
  const [taskShow, setTaskShow] = useState(false);
  const [taskCardShow, setTaskCardShow] = useState(false);
  const [user, setUser] = useState({
    userId: undefined,
    userName: undefined,
    userPhone: undefined,
    userEmail: undefined,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentTask, setCurrentTask] = useState(undefined);

  // token
  const token = JSON.parse(localStorage.getItem('jwt'));
  const workData = undefined;
  const worker = undefined;

  // task fetch api
  const {
    tasksGet,
    tasksGetByClient,
    tasksGetByWorker,
    taskCreate,
    taskUpdate,
    taskDelete
  } = useTaskFetch (urlData.network, token, workData, user, worker);

  // console.log('user - ' + user.userName)

    // set task list
    // useEffect(() => {
    //   !token && !user.userName && setTaskList([]);
    //   tasksGetByClient()
    //   .then(res => {
    //     setTaskList(res);
    //   })
    // }, [user, token])

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
  const setCurrentUser = (res) => {
    localStorage.setItem('jwt', JSON.stringify(res.jwt))
    setUser({
      userId: res.user.id,
      userName: res.user.username,
      userPhone: res.user.userphone,
      userEmail: res.user.email,
    });
    setLoggedIn(true);
  }

  const logout = (res) => {
    localStorage.removeItem('jwt')
    setUser({
      userId: undefined,
      userName: undefined,
      userPhone: undefined,
      userEmail: undefined,
    });
    setLoggedIn(false);
  }

  console.log(localStorage.getItem('jwt'))

  return (
    <div className="App">
      <Header setUser={setCurrentUser} user={user} loggedIn={loggedIn} logout={logout}/>
      <Main showTaskForm={showTaskPopup} hideTaskForm={hideTaskPopup} user={user} loggedIn={loggedIn} />
      <Switch>
        <Route exact path='/'>
          <About />
          <Poem />
          <Reviews />
        </Route>
        <ProtectedRoute path='/my-tasks' 
          loggedIn={loggedIn} 
          component={Mytasks} 
          onTaskShow={showTaskCardPopup} 
          // tasks={taskList} 
          user={user} 
          token={token} />
        {/* <Route path='/my-tasks'>
          <Mytasks onTaskShow={showTaskCardPopup} tasks={taskList}/>
        </Route> */}
      </Switch>
      <Footer />
      <TaskForm visibility={taskShow} formClose={hideTaskPopup} user={user} token={token} />
      <TaskCard visibility={taskCardShow} formClose={hideTaskCardPopup} />
    </div>
  );
}

export default App;