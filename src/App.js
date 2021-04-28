import React, { useState } from 'react';
import data from './data';
function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  const handleNumber = (e) => {
    e.preventDefault();
    let amount = +number;
    console.log(number);

    if (number <= 0) {
      amount = 1;
    }
    if (number >= 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>Tired of Boring Lorem Ipsum?</h3>
      <form className='lorem-form' onSubmit={handleNumber}>
        <label htmlFor='amount'>
          Paragraphs
          <input
            type='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            id='amount'
          />
        </label>

        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <button className='btn' onClick={() => setText([])}>
        Clear
      </button>
      <article className='lorem-text'>
        {text.map((p, index) => {
          return <div key={index}>{p}</div>;
        })}
      </article>
    </section>
  );
}

export default App;
