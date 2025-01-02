'use client';
import React, { useState } from 'react';
import axios from 'axios';

const AdminMovieAddSection = () => {
  const [movieInfo, setMovieInfo] = useState({
    movieName: '',
    language: '',
    description: '',
    rating: '',
    duration: '',
    cast: '',
    relDate: '',
    genres: '',
    directors: '',
  });

  const handleMovieInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovieInfo((prevInfo) => ({
      ...prevInfo,
      [name]: name === 'genres' || name === 'directors' ? value.split(',') : value,
    }));
  };

  const addMovie = async () => {
    try {
      await axios.post(`http://localhost:3000/api/movies`, movieInfo);
      alert('Movie added successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Add New Movie</h2>
      <form onSubmit={addMovie} className="space-y-4">
        <input name="movieName" onChange={handleMovieInfo} placeholder="Movie Name" className="w-full p-2 bg-gray-700 text-white rounded" />
        <input name="language" onChange={handleMovieInfo} placeholder="Language" className="w-full p-2 bg-gray-700 text-white rounded" />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Add Movie</button>
      </form>
    </div>
  );
};

export default AdminMovieAddSection;
