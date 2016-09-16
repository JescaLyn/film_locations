import React from 'react';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 11
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.locations,
      this.map.getBounds());
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.locations,
      this.map.getBounds());
  }

  render() {
    return(
      <div id='map-container' ref='map'></div>
    );
  }
}

export default Map;
