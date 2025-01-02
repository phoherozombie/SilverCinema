'use client';
import React, { useState } from 'react';
import axios from 'axios';

const AdminShowtimesAddSection = ({ selectedShowDate, setSelectedShowDate, handleSelectedDate }) => {
  const [showtimeInfo, setShowtimeInfo] = useState({
    movieId: '',
    hallId: '',
    showDate: selectedShowDate,
    startTime: '',
  });

  const handleShowtimeInfo = (e) => {
    const { name, value } = e.target;
    setShowtimeInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const addShowtime = async () => {
    try {
      await axios.post(`http://localhost:3000/api/showtimes`, showtimeInfo);
      alert('Showtime added successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Add Showtime</h2>
      <form onSubmit={addShowtime} className="space-y-4">
        <input type="date" name="showDate" value={showtimeInfo.showDate} onChange={(e) => { handleShowtimeInfo(e); handleSelectedDate(e); }} className="w-full p-2 bg-gray-700 text-white rounded" />
        <input name="startTime" placeholder="Start Time" onChange={handleShowtimeInfo} className="w-full p-2 bg-gray-700 text-white rounded" />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Add</button>
      </form>
    </div>
  );
};

export default AdminShowtimesAddSection;
