import ActionTypes from '../constants/ActionTypes';
import _ from 'lodash';

let initState = {
  todos: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ENTITIES: {
      return _.merge({}, state, action.normalized.entities);
    }
    default: {
      return state;
    }
  }
};
