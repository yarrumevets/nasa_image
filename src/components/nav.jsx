import React from "react";

const Nav = props => {
  return (
    <nav>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={props.changeSearch}
      />
      <label htmlFor="search-desc">Description (optional)</label>
      <input
        type="text"
        name="search-desc"
        id="search-desc"
        onChange={props.changeSearchDesc}
      />
      <button id="button-search" onClick={props.doSearch}>
        Search
      </button>
    </nav>
  );
};

export default Nav;
