import union from 'lodash/union';
import { combineReducers } from 'redux';
import ActionTypes from '../constants/ActionTypes';

// action = {
//   key: 'todos',
//   page: {
//     current: 2,
//   },
//   result: ['id1', 'id2', ...],
// }

// state.pagination = {
//   todos: {
//     page: {
//       skip: 0,
//       limit: 0,
//       first: 0,
//       current: 1,
//       last: 0,
//       total: 0,
//     },
//     pages: {
//       1: {
//         ids: [ 'todo1', 'todo2' ],
//         isFetching: false
//       },
//       2: {
//         ids: [ 'todo3', 'todo4' ],
//         isFetching: false
//       },
//       3: {
//         ids: [],
//         isFetching: true
//       },
//       ...  // and so on
//     }
//   },
// },

let resourcePageReducer = (state = {
  skip: 0,
  limit: 20,
  first: 1,
  current: 1,
  last: 1,
  total: 1,
}, action) => {
  switch (action.type) {
    case ActionTypes.SET_PAGES: {
      return {
        ...state,
        ...action.page,
      };
    }
    case ActionTypes.SET_CURRENT_PAGE: {
      return {
        ...state,
        current: action.currentPage,
      };
    }
    default: {
      return state;
    }
  }
};

let resourceSinglePageReducer = (state = {
  ids: [],
}, action) => {
  switch (action.type) {
    case ActionTypes.SET_PAGES: {
      return {
        ...state,
        ids: union(state.ids, action.result),
      };
    }
    default: {
      return state;
    }
  }
};

let resourcePagesReducer = (state = {
  1: {
    ids: [],
  },
}, action) => {
  switch (action.type) {
    case ActionTypes.SET_PAGES: {
      let currPage = action.page.current;

      return {
        ...state,
        [currPage]: resourceSinglePageReducer(state[currPage], action),
      };
    }
    default: {
      return state;
    }
  }
};

let resourcePaginationReducer = combineReducers({
  page: resourcePageReducer,
  pages: resourcePagesReducer,
});

let paginate = (key) => (state = {}, action) => {
  if (action.key === key) {
    return resourcePaginationReducer(state, action);
  } else {
    return resourcePaginationReducer(state, { type: null });
  }
};

let paginationReducer = combineReducers({
  todos: paginate('todos'),
  another: paginate('another'),
});

export default paginationReducer;
