'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const GenreSelector = () => {
  const [genreData, setGenreData] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const userGenre = searchParams.get('genre') || 'All';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ genre: string }[]>(`http://localhost:3000/moviegenres`);
        setGenreData([{ genre: 'All' }, ...response.data]);
      } catch (err) {
        console.error('Error fetching genres:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const isSelected = (val) => val === userGenre;

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="flex space-x-4 overflow-x-auto p-4 bg-gray-700 rounded-lg">
      {genreData.map((item) => (
        <button
          key={item.genre}
          className={`px-4 py-2 rounded-lg ${
            isSelected(item.genre)
              ? 'bg-red-500 text-white'
              : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
          }`}
        >
          {item.genre}
        </button>
      ))}
    </div>
  );
};

export default GenreSelector;
