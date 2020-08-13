import React from 'react';
import InlineStyling from './InlineStyling';
import MyInfo from './MyInfo';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ToDo from './ToDoPhase1';
import JokeMain from './JokeMain';
import Square from './squaremap';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //array of numbers

//map to create a new array 'square' which holds as many 'square' components as numbers array
// square component is called against each 'num' and then stored in square array
const square = numbers.map((num) => {
  return <Square square={num * num} number={num} />;
  // return <h1>{num * num}</h1>;
  // return num * num;
});

function App() {
  return (
    <div>
      <MyInfo />
      <Header />
      <MainContent />
      <Footer />
      <ToDo />
      <InlineStyling />
      <JokeMain />
      <h1>{square}</h1>
      {square}
    </div>
  );
}

export default App;
