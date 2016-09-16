import { connect } from 'react-redux';
import Map from './map';

const mapStateToProps = state => ({
  locations: state.locations
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
