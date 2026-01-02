import React from "react";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
      
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 rounded-full p-2">
          <span className="text-white text-xl font-bold">😏</span>
        </div>
        <h1 className="text-blue-600 font-bold text-lg tracking-wide">
          SB ADMIN <sup className="text-xs">2</sup>
        </h1>
      </div>

     
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg overflow-hidden w-1/3">
        <input
          type="text"
          placeholder="Search for..."
          className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none"
        />
        <button className="bg-blue-600 p-3 text-white hover:bg-blue-700">
          <FaSearch />
        </button>
      </div>

      
      <div className="flex items-center space-x-6">
        
        <div className="relative">
          <FaBell className="text-gray-600 text-lg" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5">
            3+
          </span>
        </div>

       
        <div className="relative">
          <FaEnvelope className="text-gray-600 text-lg " />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5">
            7
          </span>
        </div>

        <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

      
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 text-sm font-medium hidden sm:block">
            Douglas McGee
          </span>
          <img
            src="https://i.pravatar.cc/40?img=1"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
