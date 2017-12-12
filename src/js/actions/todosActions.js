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

export function deleteTodo(text) {
  return { type: 'DELETE_TODO', payload: text };
}

export function toggleTodo(text) {
  return { type: 'TOGGLE_TODO', payload: text };
}
