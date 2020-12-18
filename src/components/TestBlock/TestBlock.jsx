import React from 'react'
import './TestBlock.css';
// import quotes from 'https://raw.githubusercontent.com/IlyaGusev/PoetryCorpus/master/datasets/django/all_django.json';
// http://buymebuyme.xyz

const TestBlock = () => {
  const [quote, setQuote] = React.useState(undefined);

  React.useEffect(() => {
    return fetch ('http://buymebuyme.xyz?q=потоп', {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(DataView);
      console.log(data[2].fields.text);
      setQuote(data[2].fields.text);
    })
  }, [])

  return (
    <div className='test-block'>
      <p className='test-block__quote'>{quote}</p>
    </div>
  )
}

export default TestBlock;