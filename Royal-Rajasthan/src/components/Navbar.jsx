import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-wide hover:text-red-100 transition duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Royal Rajasthan
            </Link>
          </div>

          {/* Search Bar - Centered */}
          <div className="hidden md:flex flex-1 justify-center mx-4">
            <form onSubmit={handleSearch} className="w-full max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full px-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Menu - Right Side */}
          <div className="hidden md:flex space-x-4 text-base font-medium items-center">
            <Link to="/" className="hover:text-red-200 hover:underline transition duration-300 px-3 py-1 rounded hover:bg-red-500/20">
              Home
            </Link>
            <Link to="/AboutUS" className="hover:text-red-200 hover:underline transition duration-300 px-3 py-1 rounded hover:bg-red-500/20">
              About
            </Link>
            <Link to="/ContactUs" className="hover:text-red-200 hover:underline transition duration-300 px-3 py-1 rounded hover:bg-red-500/20">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden focus:outline-none text-white hover:text-red-200 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 space-y-3">
            {/* Search Bar - Mobile */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
            
            <Link 
              to="/" 
              className="block hover:text-red-200 hover:bg-red-500/20 transition duration-300 px-3 py-2 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/AboutUS" 
              className="block hover:text-red-200 hover:bg-red-500/20 transition duration-300 px-3 py-2 rounded"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/ContactUs" 
              className="block hover:text-red-200 hover:bg-red-500/20 transition duration-300 px-3 py-2 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;