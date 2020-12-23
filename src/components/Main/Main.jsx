import React from 'react';
import Button from '../Button/Button';
import {mainButtonsData} from '../../constants/mainButtonsData';
import './Main.css';

const Buttons = (props) => {

  return (
    <section className='main'>
        <h1 className='main__title'>Гражданин, найди мастера!</h1>
        <h2 className='main__subtitle'>О мастерах</h2>
        <blockquote className='main__quote'><span className='main__quote-quotes'>
          <p className='main__quote-text'>
          Мастера, мастаки, умельцы,<br />
          Постигающие до глубин<br />
          Механизм станка или сердца,<br />
          Ход смычка или гул турбин.</p></span>
          <cite className='main__quote-author'>Роберт Рождественский
          </cite>
        </blockquote>
        <div className='main__buttons-container'>
          <Button placeholder={mainButtonsData.showTasks}/>
          <Button placeholder={mainButtonsData.createTask} onPress={props.showTaskForm}/>
        </div>
    </section>
  )
}

export default Buttons;
