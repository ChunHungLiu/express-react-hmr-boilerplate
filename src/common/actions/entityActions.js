import { normalize, arrayOf } from 'normalizr';
import { todoSchema } from '../schemas';
import ActionTypes from '../constants/ActionTypes';

export const setTodos = (res) => (dispatch, getState) => {
  let normalized = normalize(res.todos, arrayOf(todoSchema));
  dispatch({
    type: ActionTypes.SET_ENTITIES,
    normalized,
  });
  dispatch({
    type: ActionTypes.SET_PAGES,
    key: 'todos',
    page: res.page,
    result: normalized.result,
  });
};
