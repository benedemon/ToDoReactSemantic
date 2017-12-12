export default function reducer(state = {
  todos: [
    {
      text: 'Do this',
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
      const text = action.payload;
      const newTodos = [...state.todos];
      const todoToUpdate = newTodos.findIndex(todo => todo.text === text);
      newTodos[todoToUpdate].completed = !newTodos[todoToUpdate].completed;

      return {
        todos: newTodos,
      };
    }
    case 'DELETE_TODO': {
      const text = action.payload;
      let newTodos = [...state.todos];
      const todoToDelete = newTodos.findIndex(todo => todo.text === text);
      newTodos.splice(todoToDelete, 1);

      return {
        todos: newTodos,
      };
      // return {
      //   todos: state.todos.filter(todo => todo.text !== action.payload),
      // };
    }
    default: {
      break;
    }
  }

  return state;
}
