import {useState} from 'react';
import UserPopup from '../UserPopup/UserPopup';
import './Header.css';

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
        <img className='header__img' src='#' alt='logo' />
        </a>
        <ul className='header__user-navigation'>
          { !props.loggedIn && <li className='header__user-navigation__item' onClick={setLoginState}><a className='header__login-link' href='#'>Вход</a></li>}
          { !props.loggedIn && <li className='header__user-navigation__item' onClick={setRegState}><a className='header__signin-link' href='#'>Регистрация</a></li>}
          { props.loggedIn && <p className='header__user-data'>{props.user.username}</p>}
          { props.loggedIn && <li className='header__user-navigation__item'><button className='header__logout-button' onClick={props.logout}>Выход</button></li>}
        </ul>
        {props.user.userToken && <p>Привет, {props.user.userName}</p>}
        <UserPopup state={userState} setUserState={setUserState} setLoginState={setLoginState} clearRegState={clearRegState} setUser={props.setUser}/>
      </div>
    </header>
  )
}

export default Header;
