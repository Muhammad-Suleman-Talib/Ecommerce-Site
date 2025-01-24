'use client';
// Import necessary modules
import { useState, useEffect } from 'react';

const Sale2025 = () => {
  const images = [
    '/se.jpeg',
    '/s.jpeg',
    '/si.jpeg',
    '/te.jpeg',
    '/tw.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change every second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-6 bg-gradient-to-r from-red-500 to-black text-white min-h-[550px] w-full ">
      {/* Left Section: Heading */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
            SALE 2025 ACTIVE
          </span>
        </h1>
        <p className="text-lg md:text-2xl font-medium leading-relaxed">
          Don't miss out! Buy your favorite iPhone now and enjoy
          <span className="font-bold text-yellow-300"> exclusive discounts</span>.
          Experience the best deals of the year before they're gone!
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Section: Image Carousel */}
      <div className="mt-11 md:mt-0 md:ml-6 relative max-w-md">
        <img
          src={images[currentImageIndex]}
          alt="iPhone"
          className="w-[300px] h-[300px] rounded-lg shadow-2xl transition-transform duration-700 ease-in-out transform scale-105 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Sale2025;
