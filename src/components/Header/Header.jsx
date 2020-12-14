import React from 'react';
import img from '../../images/Group.jpg';
import './Header.css';

const Header = () => {

  return (
    <div className='header'>
      <h1 className='header__title'>Hello</h1>
      <img className="header__img" src={img} alt='logo' />
      <button className='header__button' onClick={alert('clicked!')}>Button</button>
    </div>
  )
}

export default Header;