'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const MovieInfoSection = () => {
  const [movieData, setMovieData] = useState(null);
  const [showtimesData, setShowtimesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const movieDetailsId = searchParams.get('id');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/movies/${movieDetailsId}`);
        setMovieData(response.data.movie);
        setShowtimesData(response.data.showtimes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (movieDetailsId) fetchMovieDetails();
  }, [movieDetailsId]);

  if (loading) {
    return <p className="text-center text-gray-400 py-20">Loading movie details...</p>;
  }

  if (!movieData) {
    return <p className="text-center text-gray-400">No movie found</p>;
  }

  return (
    <section className="bg-[#1A1B2E] p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-white mb-6">{movieData.title}</h1>
      <p className="text-lg text-gray-300 mb-4">{movieData.description}</p>
      <p className="text-gray-400 mb-2">Release Date: {new Date(movieData.release_date).toLocaleDateString()}</p>
      <p className="text-gray-400 mb-6">Rating: {movieData.rating}</p>

      <div className="mt-6">
        <h2 className="text-3xl font-bold text-white mb-4">Showtimes</h2>
        {showtimesData.length > 0 ? (
          <ul className="space-y-4">
            {showtimesData.map((showtime) => (
              <li key={showtime.id} className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition-all">
                <p className="text-lg text-white font-semibold">{showtime.time}</p>
                <p className="text-gray-400">{showtime.location}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No showtimes available</p>
        )}
      </div>
    </section>
  );
};

export default MovieInfoSection;
