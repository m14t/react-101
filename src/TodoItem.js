import React from 'react';

function TodoItem(props) {
    console.log(props.todo.title);

  return (
    <li>
        {props.todo.title}
    </li>
  )
}

export default TodoItem;