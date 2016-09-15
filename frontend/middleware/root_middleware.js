import { applyMiddleware } from 'redux';
import LocationMiddleware from './location_middleware';
import SearchMiddleware from './search_middleware';

export default applyMiddleware(
  LocationMiddleware,
  SearchMiddleware
);
