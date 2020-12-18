import React from 'react';
import './Button.css';


const Button = (props) => {

  return (
    <button className='button'>{props.placeholder} onClick={props.onPress}</button>
  )
}

export default Button;
