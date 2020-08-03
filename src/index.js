import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

//functional Component
function MyInfo() {
  return (
    <div className='container'>
      <h1 className='name'>Usama Mustafa</h1>
      <p className='bio'>I am Learing React From Scratch</p>
      <ul className='cities'>
        <li>Islamabad</li>
        <li>Lahore</li>
        <li>Rawalpindi</li>
      </ul>
    </div>
  );
}

//rendering a functional Compenent in the render method
ReactDOM.render(<MyInfo />, document.getElementById('root'));

// redering a component in render method
// ReactDOM.render(
//   <ul>
//     <li>Name : Usama</li>
//     <li>Course : React</li>
//     <li>Level : Beginner</li>
//   </ul>,
//   document.getElementById('root')
// );
