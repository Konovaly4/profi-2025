import {useState} from 'react';
import UserPopup from '../UserPopup/UserPopup';
import './Header.css';
import Header__img from '../../images/logo.svg';

const Header = (props) => {
  // collecting states
  const [userState, setUserState] = useState('');

  // set reg state
  const setRegState = (e) => {
    e.preventDefault();
    setUserState('registration');
  }

  // set reg state
  const setLoginState = () => {
    setUserState('login');
  }

  // clear reg state
  const clearRegState = () => {
    setUserState('');
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__link' href='#'>
        <img className='header__img' src={Header__img} alt='Логотип' />
        Гражданин поэт
        </a>
        <ul className='header__user-navigation'>
          { !props.loggedIn && <li className='header__user-navigation-item' onClick={setLoginState}><a className='header__login-link' href='#'>Вход</a></li>}
          { !props.loggedIn && <li className='header__user-navigation-item' onClick={setRegState}><a className='header__signin-link' href='#'>Регистрация</a></li>}
          { props.loggedIn && <p className='header__user-data'>{props.user.username}</p>}
          { props.loggedIn && <li className='header__user-navigation-item'><a className='header__logout-link' onClick={props.logout} aria-label='Выход'></a></li>}
        </ul>
        {props.user.userToken && <p>Привет, {props.user.userName}</p>}
        <UserPopup 
        state={userState} 
        setUserState={setUserState} 
        setLoginState={setLoginState} 
        clearRegState={clearRegState} 
        setUser={props.setUser}
        loaderOn={props.loaderOn}
        loaderOff={props.loaderOff}
        />
      </div>
    </header>
  )
}

export default Header;
