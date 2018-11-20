import React, { memo } from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div className="TodoList">
      <h1>My Title</h1>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  )
}

export default memo(TodoList);