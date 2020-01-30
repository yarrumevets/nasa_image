import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    this.textInputRef.current.focus();
  }

  render() {
    return (
      <nav className="search-area">
        <form onSubmit={this.props.doSearch}>
          <label htmlFor="search">Search</label>
          <input
            ref={this.textInputRef}
            type="text"
            name="search"
            id="search"
            onChange={this.props.changeSearch}
          />
          <label htmlFor="search-desc">Description</label>
          <input
            type="text"
            name="search-desc"
            id="search-desc"
            onChange={this.props.changeSearchDesc}
            placeholder="(optional)"
          />
          <button id="button-search" className="button-search">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

// Props validation
Search.propTypes = {
  changeSearch: PropTypes.func,
  changeSearchDesc: PropTypes.func,
  doSearch: PropTypes.func
};

export default Search;
