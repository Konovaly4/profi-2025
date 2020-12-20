import {useState, useEffect} from 'react';
import cn from 'classnames';
import CloseButton from '../CloseButton/CloseButton';
import {regPopupData} from '../../constants/userPopupData';
import './UserPopup.css';

const UserPopup = (props) => {
  const [visibility, setVisibility] = useState(false);

  // popup open
  useEffect(() => {
    props.state !== '' ? setVisibility(true) : setVisibility(false);
  }, [props.state])

  // popup close by click on wrapper
  const closeByWrapper = (e) => {
    !e.target.closest('.user-popup') && props.clearRegState();
  }

  // start registration
  const registrate = (e) => {
    e.preventDefault();
    props.clearRegState();
  }

  // start login
  const login = (e) => {
    e.preventDefault();
    props.clearRegState();
  }



  return (
    <div className={cn('user-popup__wrapper', {'user-popup__wrapper_visible': visibility})} onClick={closeByWrapper }>
      <form className='user-popup'>
        <h2 className='user-popup__title'>{props.state === 'registration' ? regPopupData.regTitle :regPopupData.loginTitle}</h2>
        {props.state === 'registration' && <input className='user-popup__input' type='text' name='name' placeholder={regPopupData.name}></input>}
        {props.state === 'registration' && <input className='user-popup__input' type='text' name='phone' placeholder={regPopupData.phone}></input>}
        <input className='user-popup__input' type='email' name='email' placeholder={regPopupData.email}></input>
        <input className='user-popup__input' type='text' name='password' placeholder={regPopupData.password}></input>
        <div className='user-popup__button-wrapper'>
          {props.state === 'registration' && <button className='user-popup__reg-button' onClick={registrate}>{regPopupData.regButton}</button>}
          <button className='user-popup__reg-button' onClick = {
            props.state === 'registration' ? props.setLoginState : login
          }>{regPopupData.loginButton}</button>
        </div>
        <CloseButton onPress={props.clearRegState} />
      </form>
    </div>

  )
}

export default UserPopup;
