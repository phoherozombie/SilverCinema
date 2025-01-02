'use client';
import React from 'react';
import GenreSelector from './GenreSelector';

const ShowTimesHeader = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-md mb-6 py-20">
      <GenreSelector />
    </section>
  );
};

export default ShowTimesHeader;
