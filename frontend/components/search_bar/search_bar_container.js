import { connect } from 'react-redux';
import { requestSuggestions } from '../../actions/search_actions';
import { requestLocations } from '../../actions/location_actions';
import SearchBar from './search_bar';

const mapStateToProps = state => ({
  suggestions: state.search
});

const mapDispatchToProps = dispatch => ({
  requestSuggestions: search => dispatch(requestSuggestions(search)),
  requestLocations: filters => dispatch(requestLocations(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
