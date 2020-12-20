import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__link' href='#'>
        <img className='header__img' src='#' alt='logo' />
        </a>
        <ul className='user-navigation'>
          <li className='user-navigation__item'><a class='login-link' href='#'>Вход</a></li>
          <li className='user-navigation__item'><a class='signin-link' href='#'>Регистрация</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
