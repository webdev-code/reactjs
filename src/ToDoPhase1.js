import React from 'react';
import HeaderToDo from './HeaderToDo';
import ListToDo from './ListToDo';
import FooterToDo from './FooterToDo';

function ToDo() {
  return (
    <div>
      <HeaderToDo />
      <ListToDo />
      <FooterToDo />
    </div>
  );
}

export default ToDo;
