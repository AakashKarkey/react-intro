"use client";

import { useState } from "react";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-black">
      {/* Top Bar */}
      <div className="Top bg-blue-600 flex justify-between items-center p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-white text-black border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="bg-white text-black border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-orange-300"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`bg-gray-500 transition-all duration-300 ${
            isSidebarOpen ? "w-[150px]" : "w-0"
          } overflow-hidden`}
        >
          <ul className={`space-y-2 p-4 ${isSidebarOpen ? "block" : "hidden"}`}>
            <li className="hover:bg-gray-400 p-2 rounded cursor-pointer">Home</li>
            <li className="hover:bg-gray-400 p-2 rounded cursor-pointer">Projects</li>
            <li className="hover:bg-gray-400 p-2 rounded cursor-pointer">Help</li>
            <li className="hover:bg-gray-400 p-2 rounded cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="mid bg-gray-300 w-full p-4">
          <h1>Main Content Area</h1>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom bg-blue-800 p-4 text-center text-white">
        Footer Content
      </div>
    </div>
  );
}
