import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Checkbox, Button, Icon, Menu } from 'semantic-ui-react';

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'All',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.checkboxChanged = this.checkboxChanged.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  checkboxChanged(e, { id }) {
    this.props.toggleTodo(id);
  }

  deleteTodo(id) {
    this.props.deleteTodo(id);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { todos } = this.props;
    const mappedTodos = Object.keys(todos).map((key) => {
      if (this.state.activeItem === 'All' || (this.state.activeItem === 'Active' && !todos[key].completed) || (this.state.activeItem === 'Completed' && todos[key].completed)) {
        return (
          <Link to={`/${todos[key].id}`} key={key}>
            <Segment key={key}>
              <Checkbox
                onChange={this.checkboxChanged}
                key={key}
                id={todos[key].id}
                label={todos[key].title}
                checked={todos[key].completed}
              />
              <Button animated="vertical" onClick={() => this.deleteTodo(todos[key].id)}>
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                  <Icon name="delete" />
                </Button.Content>
              </Button>
            </Segment>
          </Link>
        );
      }
      return (<div key={key} />);
    });

    return (
      <div>
        <Menu align="center">
          <Menu.Item
            name="All"
            active={this.state.activeItem === 'All'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Active"
            active={this.state.activeItem === 'Active'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Completed"
            active={this.state.activeItem === 'Completed'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment.Group>
          {mappedTodos}
        </Segment.Group>
      </div>


    );
  }
}
