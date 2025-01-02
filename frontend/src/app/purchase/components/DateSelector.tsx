'use client';
import React from 'react';

const DateSelector = () => {
  const handleDateChange = (event) => {
    console.log('Selected Date:', event.target.value);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <label htmlFor="date" className="block text-white text-lg font-bold mb-2">
        Select a Date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        className="w-full p-3 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateSelector;
