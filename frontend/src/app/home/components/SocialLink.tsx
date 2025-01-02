'use client';
import React from 'react';

const SocialLinks = () => {
  return (
    <section className="py-10 bg-gray-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/NeloySaha"
          className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            viewBox="0 0 512 512"
          >
            <path
              d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.15h-28.28c-27.84 0-36.52 17.22-36.52 34.88v42.53h62.2l-9.95 64.77H291v152.52c107.1-16.82 189-109.49 189-221.29z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            viewBox="0 0 512 512"
          >
            <path
              d="M448 64H64A48 48 0 0016 112v288a48 48 0 0048 48h384a48 48 0 0048-48V112a48 48 0 00-48-48zM160 416h-64V208h64zm-32-240a32 32 0 1132-32 32 32 0 01-32 32zm288 240h-64V312c0-20.87-17.13-38-38-38s-38 17.13-38 38v104h-64V208h64v26.78a84.44 84.44 0 0172-38c49.6 0 90 40.77 90 91.2z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            viewBox="0 0 512 512"
          >
            <path
              d="M496 109.5a202.8 202.8 0 01-58.45 16A101.67 101.67 0 00484 69.87a203.25 203.25 0 01-64.19 24.57 101.43 101.43 0 00-172.62 92.55A288 288 0 0135.28 80.6a101.47 101.47 0 0031.45 135.36A100.81 100.81 0 0132 204v1.27a101.51 101.51 0 0081.27 99.36A101 101 0 0144 310.77a101.41 101.41 0 0094.67 70A204 204 0 0126 426.79a289.32 289.32 0 00156.71 45.91c188.19 0 291.07-156 291.07-291.28q0-6.66-.29-13.23A207.5 207.5 0 00496 109.5z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
