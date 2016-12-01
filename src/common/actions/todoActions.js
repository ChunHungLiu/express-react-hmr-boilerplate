import ActionTypes from '../constants/ActionTypes';
import { setTodos } from './entityActions';

export const addTodo = (todo) => (dispatch, getState) => {
  return dispatch(setTodos({
    todos: [
      todo,
      ...getState().pagination.todos.pages[1].ids
        .map(id => getState().entity.todos[id]),
    ],
    page: {
      ...getState().pagination.todos.page,
      current: 1,
    },
  }));
};

export const removeTodo = (id) => {
  return {
    type: ActionTypes.REMOVE_TODO,
    id,
  };
};
