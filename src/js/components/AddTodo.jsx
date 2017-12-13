import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      titleError: false,
      title: '',
      description: '',
    };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  addNewTodo(e) {
    e.preventDefault();

    if (this.state.title === '') {
      this.setState({ titleError: true });
      return;
    }

    const todo = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description,
      completed: false,
    };

    this.setState({
      titleError: false,
      title: '',
      description: '',
    });

    this.props.addTodo(todo);
  }

  render() {
    return (
      <Form error={this.state.titleError} className="todo-form" onSubmit={this.addNewTodo}>
        <Form.Field required>
          <label>Todo</label>
          <Form.Input
            onChange={this.onInputChange}
            value={this.state.title}
            name="title"
            placeholder="Enter todo"
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Form.TextArea
            placeholder="Description"
            style={{ minHeight: 100 }}
            onChange={this.onInputChange}
            value={this.state.description}
            name="description"
          />
        </Form.Field>
        <Message
          error
          header="Title Required"
        />
        <Button primary type="submit">Add ToDo</Button>
      </Form>
    );
  }
}

export default AddTodo;
