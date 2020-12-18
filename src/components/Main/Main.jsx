import React from 'react';
import Button from '../Button/Button';
import {mainButtonsData} from '../../constants/mainButtonsData';
import './Main.css';

const Buttons = (props) => {

  return (
    <section className='buttons'>
      <div className='section__container'>
        <h2 className='section__title'>Заголовок</h2>
        <div className='buttons__container'>
          <Button placeholder={mainButtonsData.showTasks}/>
          <Button placeholder={mainButtonsData.createTask} onPress={props.showTaskForm}/>
          </div>
        </div>
    </section>
  )
}

export default Buttons;
