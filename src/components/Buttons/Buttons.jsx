import React from 'react';
import './Buttons.css';
import Button from '../Button/Button';

const Buttons = () => {

  return (
    <section className='buttons'>
      <div className='section__container'>
        <h2 className='section__title'>Заголовок</h2>
        <div className='buttons__container'>
          <Button />
          <Button />
          <Button />
          </div>
        </div>
    </section>
  )
}

export default Buttons;
