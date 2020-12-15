import React from 'react';
import avatar from '../../images/avatar.jpg';
import './Main.css';

const Main = () => {

  return (
    <main className='main-content'>
      <section className='master'>
        <div className='master__main-info'>
          <p className='master__subtitle'>Мастер недели</p>
          <h2 className='master__title'>Илья Обломов</h2>
          <h3 className='master__quote-title'>Заголовок рандомный стих в виде цитаты:</h3>
          <blockquote className='master__quote'>Какой нибудь стих примерно такой по размеру, как здесь написан оформленный ввиде цитаты. Какой нибудь стих примерно такой по размеру, как здесь написан</blockquote>
          <p className='master__profile'>Какой нибудь стих примерно такой по размеру, как здесь написан</p>
          <p className='master__specialty'>Какой нибудь стих примерно такой по размеру, как здесь написан</p>
          <p className='master__rating'>Какой нибудь стих примерно такой по размеру, как здесь написан</p>
        </div>
        <div className='master__add-info'>
          <img className='master__avatar' src={avatar} alt='Фотография мастера недели' />
          <button className='master__button' type='submit'>Button</button>
        </div>
      </section>
    </main>
  )
}

export default Main;
