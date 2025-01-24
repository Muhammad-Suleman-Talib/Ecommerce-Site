import React from 'react'

export default function Loader() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
      {/* Animated Circles */}
      <div className="absolute w-40 h-40 rounded-full bg-blue-500 opacity-20 animate-circle-move"></div>
      <div className="absolute w-32 h-32 rounded-full bg-purple-500 opacity-30 animate-circle-move delay-200"></div>
      <div className="absolute w-24 h-24 rounded-full bg-pink-500 opacity-40 animate-circle-move delay-400"></div>

      {/* iPhone 15 SVG */}
      <div className="relative z-10 flex items-center justify-center">
        <svg
          className="w-24 h-48"
          viewBox="0 0 24 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          {/* iPhone 15 Body */}
          <rect
            x="2"
            y="0"
            width="20"
            height="40"
            rx="4"
            ry="4"
            fill="#f0f0f0"
            stroke="#000"
            strokeWidth="1.5"
          />

          {/* iPhone Screen */}
          <rect
            x="4"
            y="4"
            width="16"
            height="32"
            rx="3"
            ry="3"
            fill="white"
            stroke="#ddd"
            strokeWidth="1"
          />

          {/* iPhone Button */}
          <circle cx="12" cy="44" r="2" fill="#333" />

        </svg>

        {/* Loading Spinner */}
        <svg
          className="absolute w-10 h-10 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#4f46e5"
            strokeWidth="2"
            strokeDasharray="60"
            strokeDashoffset="0"
          ></circle>
        </svg>
      </div>

      {/* Loading Text */}
      <span className="mt-6 text-lg font-semibold text-gray-700 animate-pulse">
        Loading...
      </span>
    </div>
  )
}
