import React from 'react';

function TodoList(props) {
  return (
    <div className="TodoList">
      <h1>My Title</h1>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;