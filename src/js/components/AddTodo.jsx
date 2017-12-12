import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const inputValue = e.target.value;
    this.setState({ input: inputValue });
  }

  addNewTodo(e) {
    e.preventDefault();

    const todo = {
      text: this.state.input,
      completed: false,
    };

    this.setState({ input: '' });
    this.props.addTodo(todo);
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.addNewTodo}>
        <p>Todo</p>
        <Input
          onChange={this.onInputChange}
          value={this.state.input}
          placeholder="Enter todo"
        />
      </form>
    );
  }
}

export default AddTodo;
