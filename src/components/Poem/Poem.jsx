import React from 'react';
import './Poem.css';

const Poem = () => {

  return (
    <section className='poem'>
      <h2 className='poem__title'>Стихи дня</h2>
      <h3 className='poem__subtitle'>Реквием</h3>
      <blockquote className='poem__quote'><span className='poem__quote-quotes'>
        <p className='poem__quote-text'>
        Нет, и не под чуждым небосводом,<br />
        И не под защитой чуждых крыл, —<br />
        Я была тогда с моим народом,<br />
        Там, где мой народ, к несчастью, был.</p></span>
        <cite className='poem__quote-author'>Анна Ахматова</cite>
      </blockquote>
    </section>
  )
}

export default Poem;
