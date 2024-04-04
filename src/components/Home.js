import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../slices/moviesSlice';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);

  const handleSearch = () => {
    dispatch(searchMovies(searchQuery));
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;