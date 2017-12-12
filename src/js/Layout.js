import React from 'react';
import { connect } from 'react-redux';

// import './Layout.css';

import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import { fetchTodos, addTodo, deleteTodo, toggleTodo } from "./actions/todosActions";

@connect((store) => {
  return {
    todos: store.todos.todos,
  };
})

export default class Layout extends React.Component {
  constructor() {
    super();

    this.fetchTodos = this.fetchTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  fetchTodos() {
    this.props.dispatch(fetchTodos())
  }

  addTodo(todo) {
    this.props.dispatch(addTodo(todo));
  }

  toggleTodo(text) {
    this.props.dispatch(toggleTodo(text))
  }

  deleteTodo(text) {
    this.props.dispatch(deleteTodo(text));
  }

  render() {
    const { todos } = this.props;
    
    var todoStyle = {
      width: 500,
    };

    return <div className="Layout">
      <AddTodo addTodo={this.addTodo}/>
      <TodoList style={todoStyle} todos={todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo}></TodoList>
    </div>
  }
}