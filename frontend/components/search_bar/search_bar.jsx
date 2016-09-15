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
  }

  updateField(e) {
    this.setState({ search_field: e.target.value });
  }

  handleChange(e) {
    this.setState({ search_query: e.target.value }, () => {
      this.props.requestSuggestions(this.state);
    });
  }

  render() {
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
      </div>
    );
  }
}

export default SearchBar;
