import {useState} from 'react';
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

  // show task popup
  const showTaskPopup = () => {
    setTaskShow(true)
  }

  // hide task popup
  const hideTaskPopup = () => {
    setTaskShow(false)
  }

  // show task card popup
  const showTaskCardPopup = () => {
    setTaskCardShow(true)
  }

  // hide task popup
  const hideTaskCardPopup = () => {
    setTaskCardShow(false)
  }

  return (
    <div className="App">
      <Header />
      <Main showTaskForm={showTaskPopup} hideTaskForm={hideTaskPopup} />
      <About />
      <Poem />
      <Reviews />
      <Footer />
      <Mytasks onTaskShow={showTaskCardPopup} />
      <TaskForm visibility={taskShow} formClose={hideTaskPopup} />
      <TaskCard visibility={taskCardShow} formClose={hideTaskCardPopup} />
    </div>
  );
}

export default App;