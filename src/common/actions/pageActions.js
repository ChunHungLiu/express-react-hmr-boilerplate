import ActionTypes from '../constants/ActionTypes';

export const setCrrentPage = (key, currentPage) => {
  return {
    type: ActionTypes.SET_CURRENT_PAGE,
    key,
    currentPage,
  };
};
