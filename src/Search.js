import React from "react";

const Search = (props) => {
  return (
    <input
      className="search-input"
      placeholder="Search for a country"
      onChange={props.handleChange}
      type="search"
    ></input>
  );
};

export default Search;
