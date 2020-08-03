import React from 'react';
import './App.css';

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

export default MyInfo;
