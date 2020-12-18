import {useState} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Poem from './Poem/Poem';
import Footer from './Footer/Footer';
import TaskForm from './TaskForm/TaskForm';
import './App.css';

function App() {
  const [taskShow, setTaskShow] = useState(false);

  // show task popup
  const showTaskPopup = () => {
    setTaskShow(true)
  }

  // hide task popup
  const hideTaskPopup = () => {
    setTaskShow(false)
  }

  return (
    <div className="App">
      <Header />
      <Main showTaskForm={showTaskPopup} hideTaskForm={hideTaskPopup} />
      <About />
      <Poem />
      <Footer />
      <TaskForm visibility={taskShow} />
    </div>
  );
}

export default App;
