'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import ShowtimesCard from './ShowtimesCard';

const ShowTimesCollection = () => {
  const [showtimesData, setShowtimesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const userGenre = searchParams.get('genre') || 'All';
  const theatreName = 'Default Theatre'; // Replace with dynamic data if needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/showtimes`, {
          theatreName,
          userGenre,
        });

        setShowtimesData(response.data as any[]);
      } catch (error) {
        console.error('Error fetching showtimes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [theatreName, userGenre]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md space-y-4">
      {showtimesData.length > 0 ? (
        showtimesData.map((showtime) => (
          <ShowtimesCard 
            key={showtime.id} 
            movieName={showtime.movieName} 
            showtimes2D={showtime.showtimes2D} 
            showtimes3D={showtime.showtimes3D} 
          />
        ))
      ) : (
        <p className="text-gray-400 text-center">No showtimes available</p>
      )}
    </div>
  );
};

export default ShowTimesCollection;
