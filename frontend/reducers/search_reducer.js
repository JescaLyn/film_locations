import { SearchConstants } from '../actions/search_actions';
import { merge } from 'lodash';

const SearchReducer = (state = [], action) => {
  switch (action.type) {
    case SearchConstants.RECEIVE_SUGGESTIONS:
      return action.suggestions;
    default:
      return state;
  }
};

export default SearchReducer;
