import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Todo from './Todo.jsx';

import { fetchTodos, addTodo, deleteTodo, toggleTodo } from "../actions/todosActions";

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

  toggleTodo(id) {
    this.props.dispatch(toggleTodo(id))
  }

  deleteTodo(id) {
    this.props.dispatch(deleteTodo(id));
  }

  render() {
    const { todos } = this.props;
    
    var todoStyle = {
      width: 500,
    };

    return (
      <div className="Layout">
        <Link to="/"><h1> Maintain Todos </h1></Link>
        <br />
        <br />
        <Grid columns={3} divided>
          <Grid.Column>
            <AddTodo addTodo={this.addTodo}/>
          </Grid.Column>
          <Grid.Column>
            <TodoList style={todoStyle} todos={todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo}></TodoList>
          </Grid.Column>
          <Grid.Column>
            <Route
              path="/:todoId"
              render={
                props => 
                  (
                    <Todo
                    todo={
                      todos.filter(todo => todo.id !== props.match.params.todoId)[0]
                    }
                  />
                )
              }
            />
            <Route
              path="/:todoId"
              render={
                props =>
                  (
                    <Todo
                      todo={
                        props
                      }
                    />
                  )
              }
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}