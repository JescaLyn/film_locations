import { LocationConstants } from '../actions/location_actions';
import { merge } from 'lodash';

const LocationReducer = (state = {}, action) => {
  switch (action.type) {
    case LocationConstants.RECEIVE_LOCATIONS:
      const newState = {};
      action.locations.forEach(location => {
        newState[location.id] = location;
      });
      return newState;
    default:
      return state;
  }
};

export default LocationReducer;
