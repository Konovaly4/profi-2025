import React from 'react';
import Button from '../Button/Button';
import {mainButtonsData} from '../../constants/mainButtonsData';
import './Main.css';

const Buttons = (props) => {

  return (
    <section className='main'>
        <h2 className='main__title'>Найди Мастера - 2025</h2>
        <div className='main__buttons-container'>
          <Button placeholder={mainButtonsData.showTasks}/>
          <Button placeholder={mainButtonsData.createTask} onPress={props.showTaskForm}/>
        </div>
    </section>
  )
}

export default Buttons;
