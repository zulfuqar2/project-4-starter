import React, { useState } from 'react';
import './Favorites.css';

const Favorites = () => {
  const [state, setState] = useState({
    title: 'Новый список',
    movies: [
      { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    ]
  });

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };

  return (
    <div className="favorites">
      <input
        value={state.title}
        onChange={handleTitleChange}
        className="favorites__name"
      />
      <ul className="favorites__list">
        {state.movies.map((item) => (
          <li key={item.imdbID}>
            {item.title} ({item.year})
          </li>
        ))}
      </ul>
      <button type="button" className="favorites__save">
        Сохранить список
      </button>
    </div>
  );
};

export default Favorites;
