import React, { Component } from 'react';
import TodoList from './TodoList';


class App extends Component {
  state = {
    input: '',
    todos: [
      {
        id: 1,
        title: 'Item 1',
        dateAdded: '2018-11-11',
      },
      {
        id: 2,
        title: 'Item 1',
        dateAdded: '2018-11-12',
      },
    ]
  }

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
        />
        
        <label>Add Todo:</label>
        <input
          onChange={(e) => {
            this.setState({
              input: e.target.value
            })
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
                ]
              })
              console.log(this.state.input)
            }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default App;