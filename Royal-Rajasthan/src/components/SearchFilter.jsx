import React, { useState } from 'react';

const SearchFilter = ({ cities, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, selectedCity });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search places..."
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rajasthan-blue"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rajasthan-blue"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">All Cities</option>
          {cities.map(city => (
            <option key={city.id} value={city.id}>{city.name}</option>
          ))}
        </select>
        
        <button
          type="submit"
          className="bg-rajasthan-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFilter;