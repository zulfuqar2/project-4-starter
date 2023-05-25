


import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox = () => {
  const [state, setState] = useState({
    searchLine: "",
  });

  const searchLineChangeHandler = (e) => {
    setState({ searchLine: e.target.value });
  };

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    
  };

  const { searchLine } = state;

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
        Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Search Film name "
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

