import { SET_LISTINGS } from '../actions/actionTypes';

const initialState = {
  listings: [],
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTINGS:
      return {
        ...state,
        listings: action.listings,
      };
    default:
      return state;
  }
};

export default listingsReducer;
