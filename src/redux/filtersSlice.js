const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/search':
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
    type: 'filter/search',
    payload: searchQuery,
  };
};
