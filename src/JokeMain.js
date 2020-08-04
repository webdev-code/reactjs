import React from 'react';
import Joke from './Joke';

function JokeMain() {
  return (
    <div>
      <Joke
        joke={{ question: 'hey joke quesion 1', punchLine: 'Hey Punch Line 1' }}
      />
      <Joke
        joke={{ question: 'hey joke quesion 2', punchLine: 'Hey Punch Line 2' }}
      />
      <Joke
        joke={{ question: 'hey joke quesion 3', punchLine: 'Hey Punch Line 3' }}
      />
      <Joke
        joke={{ question: 'hey joke quesion 4', punchLine: 'Hey Punch Line 4' }}
      />
      <Joke
        joke={{
          punchLine: 'Hey Punch Line 5',
        }}
      />
    </div>
  );
}

export default JokeMain;
