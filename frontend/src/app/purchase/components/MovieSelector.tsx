'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSelector = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/movies`);
        setMovies(response.data as any[]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
    console.log('Selected Movie:', event.target.value);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <label htmlFor="movie" className="block text-white text-lg font-bold mb-2">
        Select a Movie
      </label>
      <select
        id="movie"
        name="movie"
        className="w-full p-3 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        value={selectedMovie}
        onChange={handleMovieChange}
      >
        <option value="" disabled>
          Choose a movie
        </option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieSelector;
