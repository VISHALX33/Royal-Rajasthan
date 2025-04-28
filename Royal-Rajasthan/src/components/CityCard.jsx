import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-xl group border border-gray-100">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={city.image} 
          alt={city.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
          <h3 className="text-white text-2xl font-semibold tracking-wide">{city.name}</h3>
        </div>
      </div>
      
      {/* Info Section */}
      <div className="px-6 py-5">
        <h2 className="text-red-600 text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-red-800">
          {city.name}
        </h2>
        <p className="text-gray-700 text-sm mb-5 leading-relaxed line-clamp-3">{city.description}</p>
      </div>
      
      {/* Button Section */}
      <div className="px-6 pb-6">
        <Link 
          to={`/city/${city.id}`}
          className="block w-full text-center bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          Explore {city.name}
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
};

export default CityCard;
