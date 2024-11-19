"use client";

import { useState } from "react";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const videos = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    thumbnail: `https://via.placeholder.com/300x200?text=Video+${index + 1}`,
    title: `Video Title ${index + 1}`,
    description: `This is a brief description for Video ${index + 1}.`,
    link:
      index === 0
        ? "https://www.youtube.com/watch?v=_xGkRXscEZQ"
        : `https://www.youtube.com/watch?v=dummy_video_${index + 1}`,
  }));

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <div
        className={`Sidebar bg-gray-800 text-white ${
          isSidebarOpen ? "w-[200px]" : "w-[50px]"
        } transition-all duration-300 p-4 flex flex-col`}
      >
        {/* Three-dot Sidebar Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-gray-700 text-white p-2 rounded mb-4 focus:outline-none hover:bg-gray-600"
        >
          &#x22EE; {/* Three-dot icon */}
        </button>
        {/* Sidebar Links */}
        {isSidebarOpen && (
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
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <div className="Top bg-[#FF0000] flex items-center justify-between p-4">
          {/* Accounts Logo */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Accounts"
              className="h-8 w-8 rounded-full bg-gray-200"
            />
          </div>

          {/* Centered Search Bar */}
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-xl bg-white text-black border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {/* YouTube Logo */}
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube Logo"
              className="h-8"
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
                  <h2 className="text-lg font-bold truncate">
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {video.title}
                    </a>
                  </h2>
                  <p className="text-sm text-gray-600 truncate">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom bg-[#CC0000] p-4 text-center text-white">
          Footer Content
        </div>
      </div>
    </div>
  );
}
