import { ADD_LISTING, DELETE_LISTING } from '../actions/actionTypes';
import listingImage from '../../assets/home.jpg';

const initialState = {
  listings: [],
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LISTING:
      return {
        ...state,
        listings: state.listings.concat({
          name: action.payload,
          description: action.payload,
          image: listingImage,
        }),
      };
    default:
      return state;
  }
};

export default listingsReducer;
