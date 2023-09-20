import { TYPES } from './types';

const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FILTER_SEARCH:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export const setSearchQuery = searchQuery => {
  return {
    type: TYPES.FILTER_SEARCH,
    payload: searchQuery,
  };
};
