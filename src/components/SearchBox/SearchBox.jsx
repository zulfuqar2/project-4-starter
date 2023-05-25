

import React, { useEffect, useState } from "react";
import "./SearchBox.css";

const SearchBox = () => {
  const [state, setState] = useState({
    searchLine: "",
    searchData: null, // Eklediğimiz yeni state
  });

  const searchLineChangeHandler = (e) => {
    setState({ ...state, searchLine: e.target.value });
  };

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    console.log(state.searchLine);
    searchMovieData(state.searchLine); // Film verisini aramak için yeni fonksiyonu çağırıyoruz
  };

  const searchMovieData = (searchLine) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ccfe7fd7&s=${searchLine}`)
      .then((response) => response.json())
      .then((data) => {
        setState({ ...state, searchData: data }); // Arama sonuçlarını state'e kaydediyoruz
      });
  };

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ccfe7fd7")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
      });
  }, []);

  const { searchLine, searchData } = state;

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          İskat filmi adına göre ara:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Film adını ara"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Ara
        </button>
      </form>
      {searchData && (
        <div className="search-box__results">
          {searchData.Search && searchData.Search.length > 0 ? (
            searchData.Search.map((movie) => (
              <div key={movie.imdbID}>{movie.Title}</div>
            ))
          ) : (
            <div>Sonuç bulunamadı.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;


