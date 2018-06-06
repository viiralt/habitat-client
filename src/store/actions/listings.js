import { ADD_LISTING, DELETE_LISTING } from './actionTypes';

export const addListing = listingName => ({
  type: ADD_LISTING,
  payload: listingName,
});

export const deleteListing = key => ({
  type: DELETE_LISTING,
  payload: key,
});

// TODO: change actions to reflect mongoose schemas
