import { SearchConstants, receiveSuggestions }
  from '../actions/search_actions';
import { fetchSuggestions } from '../util/api_util';

const SearchMiddleware = ({ getState, dispatch }) => next => action => {
  const success = suggestions => dispatch(receiveSuggestions(suggestions));

  switch(action.type) {
    case SearchConstants.REQUEST_SUGGESTIONS:
      fetchSuggestions(success, action.search);
      break;
    default:
      return next(action);
  }
};

export default SearchMiddleware;
