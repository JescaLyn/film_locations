import { infoBox } from './info_box';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.Geocoder = new google.maps.Geocoder();
  }

  updateMarkers(locations, bounds) {
    this.locations = locations;
    this.mapBounds = bounds;
    this._markersToRemove().forEach(marker => {
      this._removeMarker(marker);
    });
    this._locationsToAdd().forEach(location => {
      this._createMarkerFromLocation(location);
    });
  }

  _locationsToAdd() {
    const currentLocationIds = this.markers.map(marker => marker.locationId);
    const locationsToAdd = [];
    Object.keys(this.locations).forEach(locationId => {
      if (!currentLocationIds.includes(parseInt(locationId))) {
        locationsToAdd.push(this.locations[locationId]);
      }
    });
    return locationsToAdd;
  }

  _createMarkerFromLocation(location) {
    this.Geocoder.geocode({
      address: location.locations,
      bounds: this.mapBounds
    }, function (results, status) {
      if (status == 'OK') {
        const map = this.map;
        const marker = new google.maps.Marker({
          map,
          animation: google.maps.Animation.DROP,
          position: results[0].geometry.location,
          locationId: location.id
        });

        const locationInfo = infoBox(location);
        const infoWindow = new google.maps.InfoWindow({
          content: locationInfo
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
        this.markers.push(marker);
      }
    }.bind(this));

  }

  _markersToRemove() {
    return this.markers.filter(marker => {
      if (this.locations[marker.locationId]) {
        return false;
      } else {
        return true;
      }
    });
  }

  _removeMarker(marker) {
    marker.setMap(null);
    this.markers.splice(this.markers.indexOf(marker), 1);
  }
}

export default MarkerManager;
