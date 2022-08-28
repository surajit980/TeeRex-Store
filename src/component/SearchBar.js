import React from "react";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input type="search" placeholder="Search for products." />
      <button>
        <i
          style={{ color: "white" }}
          className="fa-solid fa-magnifying-glass"
        ></i>
      </button>
    </div>
  );
};

export default SearchBar;
