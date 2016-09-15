import { combineReducers } from 'redux';
import locations from './location_reducer';
import search from './search_reducer';

const RootReducer = combineReducers({
  locations,
  search
});

export default RootReducer;
