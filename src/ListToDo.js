import React from 'react';

function ListToDo(props) {
  // console.log(props);
  return (
    <div>
      <input type='checkbox' />
      <p>{props.task}</p>
    </div>
  );
}

export default ListToDo;
