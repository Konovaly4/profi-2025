import React from 'react';
import './Button.css';


const Button = (props) => {

  return (
    <button className='button' onClick={props.onPress}>{props.placeholder} &rarr;</button>
  )
}

export default Button;
