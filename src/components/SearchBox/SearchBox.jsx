import React, { useEffect, useState } from "react";
import "./SearchBox.css";

const SearchBox = () => {
  const [state, setState] = useState({
    searchLine: "",
    searchData: null,
  });

  const searchLineChangeHandler = (e) => {
    setState({ ...state, searchLine: e.target.value });
  };

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${state.searchLine}&apikey=ccfe7fd7`)
      .then((response) => response.json())
      .then((data) => {
        setState({ ...state, searchData: data.Search });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddToFavorites = (movie) => {
    // Burada, film verilerini kullanarak favori listesine eklemek istediğiniz işlemleri gerçekleştirebilirsiniz.
    console.log("Favoriye eklenecek film:", movie);
  };

  const { searchLine, searchData } = state;

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Search Film name"
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
      {searchData && (
        <div className="search-box__result">
          {searchData.map((movie) => (
            <div key={movie.imdbID} className="search-box__movie">
              <h2 className="search-box__movie-title">{movie.Title}</h2>
              <p className="search-box__movie-info">Year: {movie.Year}</p>
              <p className="search-box__movie-info">Type: {movie.Type}</p>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="search-box__movie-poster"
              />
              <button
                type="button"
                className="search-box__movie-add-button"
                onClick={() => handleAddToFavorites(movie)}
              >
                Submit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
