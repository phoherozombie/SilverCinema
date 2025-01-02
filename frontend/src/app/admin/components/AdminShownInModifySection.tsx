'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  selectedDate: string;
}

const AdminShownInModifySection: React.FC<Props> = ({ selectedDate }) => {
  const [showtimeData, setShowtimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/showtimes?date=${selectedDate}`);
        setShowtimeData(response.data as any[]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate]);

  if (loading) {
    return <p className="text-gray-400">Loading...</p>;
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Modify Shown-In Movies</h2>
      {showtimeData.length === 0 ? (
        <p className="text-gray-400">No movies scheduled for the selected date.</p>
      ) : (
        <ul className="space-y-4">
          {showtimeData.map((showtime) => (
            <li key={showtime.id} className="flex justify-between items-center bg-gray-700 p-4 rounded">
              <div>
                <p className="text-white text-lg font-semibold">{showtime.movieName}</p>
                <p className="text-gray-400">Start Time: {showtime.startTime}</p>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Modify</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminShownInModifySection;
