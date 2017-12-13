import React from 'react';

class Todo extends React.Component {
  constructor() {
    super();
    console.log('Inside Todo Component');
  }

  componentDidMount() {
    console.log(this.props.todo);
  }

  render() {
    const { todo } = this.props;

    return (
      <div>
        <h1>{todo.title}</h1>
        <h3>Status : {todo.completed ? 'Complete' : 'Active'}</h3>
        <h5>{todo.description}</h5>
      </div>
    );
  }
}

export default Todo;
