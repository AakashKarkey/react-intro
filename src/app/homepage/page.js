"use client";

import { useState } from "react";

export default function YouTubeClone() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sample Video Data
  const videos = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    thumbnail: `https://via.placeholder.com/300x200?text=Video+${index + 1}`,
    title: `Video Title ${index + 1}`,
    description: `This is a brief description for Video ${index + 1}.`,
  }));

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <div
        className={`Sidebar bg-gray-800 text-white ${
          isSidebarOpen ? "w-[240px]" : "w-[72px]"
        } transition-all duration-300 p-4 flex flex-col`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-gray-700 text-white p-2 rounded mb-4 focus:outline-none hover:bg-gray-600"
        >
          &#x22EE; {/* Three-dot icon */}
        </button>
        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Home
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Trending
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Subscriptions
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Library
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <div className="Top bg-[#FF0000] flex items-center justify-between p-4">
          {/* Left: YouTube Logo */}
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube Logo"
              className="h-8"
            />
          </div>

          {/* Center: Search Bar */}
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-xl bg-white text-black border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {/* Right: Account and Icons */}
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Account"
              className="h-8 w-8 rounded-full bg-gray-200"
            />
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 bg-gray-200 p-4">
          <h1 className="text-xl font-bold mb-4">Recommended Videos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white shadow rounded overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail for ${video.title}`}
                  className="w-full h-[150px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold truncate">{video.title}</h2>
                  <p className="text-sm text-gray-600 truncate">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
