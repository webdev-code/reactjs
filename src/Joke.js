import React from 'react';

function Joke(props) {
  //   console.log(props.joke);
  return (
    <div>
      <h1 className='question'>{props.joke.question}</h1>
      <h2 className='punchLine'>{props.joke.punchLine}</h2>
      <hr />
    </div>
  );
}

export default Joke;
