'use client';
import React, { useEffect, useState } from 'react';

const HomeCollection = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/movies');
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-white">Loading movies...</div>;
  }

  return (
    <section className="py-10 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Now playing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {movieData.length > 0 ? (
            movieData.map((movie) => (
              <div key={movie.id} className="bg-gray-700 p-4 rounded-lg">
                <img src={movie.image || '/placeholder.jpg'} alt={movie.title} className="rounded-lg mb-4" />
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p className="text-gray-400">{movie.genre}</p>
                <span className="text-yellow-400">★ {movie.rating}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No movies available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeCollection;
