### Film Locations

This is a simple app using a Google Maps API and data from DataSF that allows a user to see where movies were filmed in SF. The app is designed such that a user can search by movie title, release year, production company, distributor, director, writer, or actor.

[Film Locations Live][url]
[url]: https://film-locations.herokuapp.com/

## Setup Instructions

To setup this app, first clone or download this repo. Then run `bundle install` and `npm install` in the command line. Run `webpack` to bundle the JS scripts. Run `be rake db:create`, `be rake db:migrate`, and `be rake db:seed` to setup the database. Run a Rails server by using `rails s` in the command line. Navigate to `localhost:3000` and enjoy!

## Technologies

This app uses data from DataSF that is directly seeded into a Ruby on Rails backend. Storage in a PostgreSQL database allows for a simple search process, to both supply suggestions for the search dropdown and to supply the locations themselves.

This app also uses the Google Maps API to produce the map. The Google Maps Geocoding API is used to translate plain text addresses into latitude and longitude coordinates for the Google Maps API to produce markers in the proper locations.

For the UI, I used React + Redux to re-render the frontend components based on search suggestions and the result of search queries to the database.

## Code Snips

The Geocoding API requires instantiating a Google Maps Geocoder and then calling Geocoder.geocode() with an object that contains an `address` key pointing to a string value. The Geocoder will then translate that string into a `LatLng` object that can be used to place a marker.

```js
class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.Geocoder = new google.maps.Geocoder();
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
```

For the search autocomplete, I used React + Redux to update the dropdown suggestions and ultimately update the locations placed on the map.

```js
class SearchBar extends React.Component {
  updateField(e) {
    this.setState({ search_field: e.target.value });
  }

  handleChange(e) {
    this.setState({ search_query: e.target.value }, () => {
      this.props.requestSuggestions(this.state);
    });
  }

  autofill(e) {
    this.setState({ search_query: e.target.textContent }, () => {
      this.props.requestSuggestions(this.state);
      this.props.requestLocations(this.state);
    });
  }

  render() {
    const dropdownItems = this.props.suggestions.map(suggestion => {
      if (suggestion !== this.state.search_query) {
        return (
          <p
            className="dropdown-line"
            key={suggestion}
            onClick={this.autofill}>
            {suggestion}
          </p>
        );
      }
    });

    return (
      <div className="search-bar">
        <p>Search by</p>
        <select value={this.state.search_field} onChange={this.updateField}>
          <option value="title">Title</option>
          <option value="release_year">Year</option>
          <option value="production_company">Production Company</option>
          <option value="distributor">Distributor</option>
          <option value="director">Director</option>
          <option value="writer">Writer</option>
          <option value="actor">Actor</option>
        </select>
        <input
          type="text"
          value={this.state.search_query}
          onChange={this.handleChange} />
        <div className="dropdown">
          {dropdownItems}
        </div>
        <button onClick={this.requestLocations}>Search</button>
      </div>
    );
  }
}

```
