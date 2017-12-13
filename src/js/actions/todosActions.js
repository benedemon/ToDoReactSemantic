export function fetchTodos() {
  return {
    type: 'FETCH_TODOS',
  };
}

export function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload,
  };
}

export function deleteTodo(id) {
  return { type: 'DELETE_TODO', payload: id };
}

export function toggleTodo(id) {
  return { type: 'TOGGLE_TODO', payload: id };
}
