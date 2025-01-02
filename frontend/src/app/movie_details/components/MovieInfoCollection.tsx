'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const MovieInfoCollection = () => {
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const movieDetailsId = searchParams.get('id');

  useEffect(() => {
    const fetchRelatedMovies = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/moviegenres`, {
          movieDetailsId,
        });
        setRelatedMovies(response.data as any[]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (movieDetailsId) fetchRelatedMovies();
  }, [movieDetailsId]);

  if (loading) {
    return <p className="text-center text-gray-400 py-20">Loading related movies...</p>;
  }

  return (
    <section className="bg-[#1A1B2E] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-white mb-6">Related Movies</h2>
      {relatedMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedMovies.map((movie) => (
            <div key={movie.id} className="bg-gray-900 p-5 rounded-lg shadow-md hover:bg-gray-800 transition-all">
              <h3 className="text-xl font-bold text-red-400 mb-3">{movie.title}</h3>
              <p className="text-gray-300 text-sm">{movie.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No related movies found</p>
      )}
    </section>
  );
};

export default MovieInfoCollection;
