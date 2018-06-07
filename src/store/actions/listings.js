import { SET_LISTINGS } from './actionTypes';

export const getListings = () => dispatch => {
  fetch('http://localhost:6969/listings')
    .then(res => res.json())
    .then(listings => {
      dispatch(setListings(listings));
    });
};

export const setListings = listings => ({
  type: SET_LISTINGS,
  listings,
});
