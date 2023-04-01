import React from "react";

function SearchBar() {
  return (
    <div>
      <div className="search-bar-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search,courses,contests,problems...."
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
