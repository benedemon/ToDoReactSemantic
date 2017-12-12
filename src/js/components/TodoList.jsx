import React from 'react';
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

  checkboxChanged(e, data) {
    this.props.toggleTodo(data.label);
  }

  deleteTodo(text) {
    this.props.deleteTodo(text);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { todos } = this.props;
    const mappedTodos = Object.keys(todos).map((key) => {
      if (this.state.activeItem === 'All' || (this.state.activeItem === 'Active' && !todos[key].completed) || (this.state.activeItem === 'Completed' && todos[key].completed)) {
        return (
          <Segment key={key}>
            <Checkbox onChange={this.checkboxChanged} key={key} label={todos[key].text} checked={todos[key].completed} />
            <Button animated="vertical" onClick={() => this.deleteTodo(todos[key].text)}>
              <Button.Content hidden>Delete</Button.Content>
              <Button.Content visible>
                <Icon name="delete" />
              </Button.Content>
            </Button>
          </Segment>
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
