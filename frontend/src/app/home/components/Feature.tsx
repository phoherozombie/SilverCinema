'use client';
import React from 'react';

const Feature = ({ title, description, image_path, icon }) => {
  const featureSvgs = {
    "Unparalleled Cinematic Experience": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-red-500 w-12 h-12 mb-4"
        viewBox="0 0 512 512"
      >
        <path
          d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M268 320.94l-80.79 58.22A16 16 0 01160 367V145a16 16 0 0127.21-13.08L268 190.94"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    ),
    "Delight in Dolby Atmos": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-red-500 w-12 h-12 mb-4"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 48c-114.69 0-208 93.31-208 208s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 336a128 128 0 11128-128 128 128 0 01-128 128z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    ),
  };

  return (
    <div className="flex flex-col md:flex-row items-center mb-10">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img src={image_path || '/placeholder.jpg'} alt={title} className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 md:pl-8 text-center md:text-left">
        {icon || featureSvgs[title] || <div className="text-red-500 text-4xl mb-4">★</div>}
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
