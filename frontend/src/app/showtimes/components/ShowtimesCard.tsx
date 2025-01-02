'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const ShowtimesCard = ({ movieName, showtimes2D, showtimes3D }) => {
  const router = useRouter();

  const renderShowtimes = (showtimes, format) => {
    return Object.keys(showtimes || {}).map((date) => (
      <div key={`${format}-${date}`} className="mb-4">
        <h3 className="text-lg font-bold text-gray-300">{date} ({format})</h3>
        <ul className="flex flex-wrap gap-2">
          {showtimes[date].map((time, index) => (
            <li key={`${format}-${date}-${time}-${index}`}>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => router.push(`/booking?movie=${movieName}&format=${format}&time=${time}`)}
              >
                {time}
              </button>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">{movieName}</h2>
      {renderShowtimes(showtimes2D, '2D')}
      {renderShowtimes(showtimes3D, '3D')}
    </div>
  );
};

export default ShowtimesCard;
