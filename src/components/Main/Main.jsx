import React from 'react';
import './Main.css';
import Buttons from '../Buttons/Buttons';
import About from '../About/About';
import Poem from '../Poem/Poem';

const Main = () => {

  return (
    <main className='main-content'>
    <Buttons />
    <About />
    <Poem />
    </main>
  )
}

export default Main;
