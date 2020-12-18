import React from 'react';
import './Button.css';


const Button = (props) => {

  return (
    <button className='button' onClick={props.onPress}>{props.placeholder}</button>
  )
}

export default Button;
