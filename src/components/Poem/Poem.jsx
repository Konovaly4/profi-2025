import {React} from 'react';
import './Poem.css';

const Poem = () => {

  return (
    <section className='poem'>
      <h2 className='poem__title'>Стихи дня</h2>
      <h3 className='poem__subtitle'>Владимир Маяковский</h3>
      <blockquote className='poem__quote'><span className='poem__quote-quotes'>
        <p className='poem__quote-text'>
        Чувства в кулак, волю в узду!,<br />
        Рабочий, работай!, —<br />
        Не охай!,<br />
        Не ахай!</p></span>
      </blockquote>
    </section>
  )
}

export default Poem;
