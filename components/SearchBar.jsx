import React from "react";

function SearchBar(props) {
  const handleSearch = (event) => {
    props.setSearchInputValue(event.target.value);
  };
  return (
    <div id="searchbar">
      <input
        type="text"
        placeholder="Where in the world have you been?"
        id="search-bar"
        onChange={handleSearch}
        value={props.searchInputValue}
      />
    </div>
  );
}

export default SearchBar;
