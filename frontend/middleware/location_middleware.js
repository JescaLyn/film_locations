import { LocationConstants, receiveLocations }
  from '../actions/location_actions';
import { fetchLocations } from '../util/api_util';

const LocationsMiddleware = ({ getState, dispatch }) => next => action => {
  const success = locations => dispatch(receiveLocations(locations));

  switch(action.type) {
    case LocationConstants.REQUEST_LOCATIONS:
      fetchLocations(success, action.filters);
      break;
    default:
      return next(action);
  }
};

export default LocationsMiddleware;
