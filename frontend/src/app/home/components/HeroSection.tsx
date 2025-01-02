'use client';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-20">
        {/* Text Content */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl font-bold mb-6 text-left">Unlock the Gateway to Enchanting Movie Magic</h1>
          <p className="text-lg text-gray-300 mb-8 text-left">Immerse yourself in the captivating allure of cinema as you step into our exquisite destination, designed to elevate your movie-watching experience to new heights.</p>
          <div className="flex justify-center md:justify-start space-x-4 mb-10">
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">Buy a ticket</button>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Learn more</button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img src="images/customers/customer-1.jpg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="images/customers/customer-2.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="images/customers/customer-3.jpg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="images/customers/customer-4.jpg" alt="User 4" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="images/customers/customer-5.jpg" alt="User 5" className="w-10 h-10 rounded-full border-2 border-gray-900" />
            </div>
            <p className="text-gray-300">100,000+ tickets sold last year</p>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2">
              <img src="images/hero-img.webp" alt="Cinema Experience" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
