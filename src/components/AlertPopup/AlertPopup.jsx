import cn from 'classnames';
import './AlertPopup.css';

const AlertPopup = (props) => {

  return (
    <div className={cn('alert-popup__wrapper', {'alert-popup__wrapper_visible': props.visibility})}>
      <section className='alert-popup'>
        <p className='alert-popup__title'>{props.title}</p>
        <div className='alert-popup__button-wrapper'>
          <button className='alert-popup__button alert-popup__button_yes-button' onClick={props.onYesClick}>Да</button>
          <button className='alert-popup__button alert-popup__button_no-button' onClick={props.onNoClick}>Нет</button>
        </div>
      </section>
    </div>
  )
}

export default AlertPopup;