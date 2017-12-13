export default function reducer(state = {
  todos: [
    {
      id: 1112132321321,
      title: 'Do this',
      description: 'rsadjiansdasd',
      completed: true,
    },
  ],
}, action) {
  switch (action.type) {
    case 'FETCH_TODOS': {
      return { ...state };
    }
    case 'ADD_TODO': {
      return {
        todos: [...state.todos, action.payload],
      };
    }
    case 'TOGGLE_TODO': {
      const id = action.payload;
      const newTodos = [...state.todos];
      const todoToUpdate = newTodos.findIndex(todo => todo.id === id);
      newTodos[todoToUpdate].completed = !newTodos[todoToUpdate].completed;

      return {
        todos: newTodos,
      };
    }
    case 'DELETE_TODO': {
      const id = action.payload;
      const newTodos = [...state.todos];
      const todoToDelete = newTodos.findIndex(todo => todo.id === id);
      newTodos.splice(todoToDelete, 1);

      return {
        todos: newTodos,
      };
    }
    default: {
      break;
    }
  }

  return state;
}
