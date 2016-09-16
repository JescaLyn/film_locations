import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_field: "title",
      search_query: ""
    };
    this.updateField = this.updateField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.autofill = this.autofill.bind(this);
    this.requestLocations = this.requestLocations.bind(this);
  }

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
    });
  }

  requestLocations() {
    this.props.requestLocations(this.state);
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

export default SearchBar;
