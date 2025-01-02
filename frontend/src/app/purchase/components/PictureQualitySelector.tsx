'use client';
import React, { useState } from 'react';

const PictureQualitySelector = () => {
  const [selectedQuality, setSelectedQuality] = useState('');

  const handleQualityChange = (event) => {
    setSelectedQuality(event.target.value);
    console.log('Selected Picture Quality:', event.target.value);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <label htmlFor="picture-quality" className="block text-white text-lg font-bold mb-2">
        Select Picture Quality
      </label>
      <select
        id="picture-quality"
        name="picture-quality"
        className="w-full p-3 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        value={selectedQuality}
        onChange={handleQualityChange}
      >
        <option value="" disabled>
          Choose quality
        </option>
        <option value="standard">Standard</option>
        <option value="hd">HD</option>
        <option value="4k">4K</option>
      </select>
    </div>
  );
};

export default PictureQualitySelector;
