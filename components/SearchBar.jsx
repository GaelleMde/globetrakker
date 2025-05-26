import React, { useState } from "react";

function SearchBar() {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearch = (event) => {
    setSearchInputValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Where in the world have you been?"
        id="search-bar"
        onChange={handleSearch}
        value={searchInputValue}
      />
    </div>
  );
}

export default SearchBar;
