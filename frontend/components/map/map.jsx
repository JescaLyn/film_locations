import React from 'react';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    // this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers(this.props.benches);

    this.map.addListener("idle", this._bounds.bind(this));
  }

  _coordsFromLatLng(latLng) {
    return ({
      lat: latLng.lat(),
      lng: latLng.lng()
    });
  }

  _bounds() {
    const mapBounds = this.map.getBounds();
    const northEast = mapBounds.getNorthEast();
    const southWest = mapBounds.getSouthWest();
    const bounds = {
      northEast: { lat: northEast.lat(), lng: northEast.lng() },
      southWest: { lat: southWest.lat(), lng: southWest.lng() }
    };
  }

  componentDidUpdate() {
    // this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return(
      <div id='map-container' ref='map'></div>
    );
  }
}

export default Map;
