import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideoGames } from '../../redux/actions';
import { fetchVideoGames, fetchGenres } from '../../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    dispatch(searchVideoGames(query));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for video games..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
