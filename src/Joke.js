import React from 'react';

function Joke(props) {
  //   console.log(props.joke);
  return (
    <div>
      <h1
        style={{ display: props.joke.question ? 'block' : 'none' }}
        className='question'
      >
        Question : {props.joke.question}
      </h1>
      <h2
        style={{ color: !props.joke.question && '#e88888' }}
        className='punchLine'
      >
        PunchLine : {props.joke.punchLine}
      </h2>
      <hr />
    </div>
  );
}

export default Joke;
