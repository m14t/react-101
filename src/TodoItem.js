import React, { memo } from 'react';
import ThemeContext from './contexts/theme';

function TodoItem(props) {
    console.log(props.todo.title);

  return (
    <ThemeContext.Consumer>
        {value => (
            <li>
                <div>
                    {props.todo.title}
                    - 
                    {value}
                </div>    
            </li>
        )}
    </ThemeContext.Consumer>
  )
}

export default memo(TodoItem);