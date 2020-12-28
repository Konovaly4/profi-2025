import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import cn from 'classnames';
// components
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Poem from './Poem/Poem';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';
import TaskForm from './TaskForm/TaskForm';
import Mytasks from './Mytasks/Mytasks';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
// css
import './App.css';

function App() {
  // select states
  const [taskShow, setTaskShow] = useState(false);
  const [user, setUser] = useState({
    id: undefined,
    username: undefined,
    userphone: undefined,
    email: undefined,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaderState, setLoaderState] = useState(false);
  const history = useHistory();

  // token
  const token = JSON.parse(localStorage.getItem('jwt'));

  useEffect(() => {
    history.push('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // show task popup
  const showTaskPopup = () => {
    setTaskShow(true)
  }

  // hide task popup
  const hideTaskPopup = () => {
    setTaskShow(false)
  }

  // loader on
  const loaderOn = () => {
    setLoaderState(true);
  }

  // loader off
  const loaderOff = () => {
    setLoaderState(false);
  }

  // fetch user
  const setCurrentUser = (res) => {
    localStorage.setItem('jwt', JSON.stringify(res.jwt))
    setUser({
      id: res.user.id,
      username: res.user.username,
      userphone: res.user.userphone,
      email: res.user.email,
    });
    setLoggedIn(true);
  }

  const logout = (res) => {
    localStorage.removeItem('jwt')
    setUser({
      id: undefined,
      username: undefined,
      userphone: undefined,
      email: undefined,
    });
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <Header setUser={setCurrentUser} user={user} loggedIn={loggedIn} logout={logout} loaderOn={loaderOn} loaderOff={loaderOff} />
      <Main showTaskForm={showTaskPopup} hideTaskForm={hideTaskPopup} user={user} loggedIn={loggedIn} />
      <Switch>
        <Route exact path='/'>
          <About />
          <Poem />
          <Reviews loaderOn={loaderOn} loaderOff={loaderOff} />
        </Route>
        <ProtectedRoute path='/my-tasks' 
          loggedIn={loggedIn} 
          component={Mytasks} 
          user={user} 
          token={token}
          loaderOn={loaderOn} 
          loaderOff={loaderOff}  
          />
      </Switch>
      <Footer />
      <TaskForm visibility={taskShow} formClose={hideTaskPopup} user={user} token={token} loaderOn={loaderOn} loaderOff={loaderOff} />
      <div className={cn('loader__wrapper', {'loader__wrapper_visible': loaderState === true})}>
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default App;