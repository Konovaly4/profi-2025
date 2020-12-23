import {useState} from 'react';
import UserPopup from '../UserPopup/UserPopup';
import './Header.css';

const Header = () => {
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
        Гражданин поэт
        </a>
        <ul className='user-navigation'>
          <li className='user-navigation__item' onClick={setLoginState}><a class='login-link' href='#'>Вход</a></li>
          <li className='user-navigation__item' onClick={setRegState}><a class='signin-link' href='#'>Регистрация</a></li>
        </ul>
        <UserPopup state={userState} setUserState={setUserState} setLoginState={setLoginState} clearRegState={clearRegState}/>
      </div>
    </header>
  )
}

export default Header;
