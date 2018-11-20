import React, { Component } from 'react';
import TodoList from './TodoList';
import ThemeContext from './contexts/theme';

class App extends Component {
  state = {
    input: '',
    todos: [
      {
        id: 1,
        title: 'Item 1',
      },
      {
        id: 2,
        title: 'Item 2',
      },
    ],
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value="dark">
          <TodoList todos={this.state.todos}>
            <span style={{ color: 'red' }}>My Todos</span>
          </TodoList>

          <label>Add Todo:</label>
          <input
            onChange={(e) => {
              this.setState({
                input: e.target.value,
              });
            }}
            value={this.state.input}
            placeholder="type here"
          />

          <button
            onClick={(e) => {
              this.setState({
                input: '',
                todos: [
                  ...this.state.todos,
                  {
                    id: Math.random(),
                    title: this.state.input,
                  },
                ],
              });
              console.log(this.state.input);
            }}
          >
            Click Me
          </button>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
