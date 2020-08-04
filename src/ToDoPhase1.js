import React from 'react';
import HeaderToDo from './HeaderToDo';
import TodoItem from './TodoItem';
import FooterToDo from './FooterToDo';

function ToDo() {
  return (
    <div>
      <HeaderToDo />
      <TodoItem />
      <FooterToDo />
    </div>
  );
}

export default ToDo;
