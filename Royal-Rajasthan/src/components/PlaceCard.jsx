import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl group border border-gray-100">
      <img 
        className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" 
        src={place.image} 
        alt={place.name} 
      />
      
      <div className="px-6 py-5">
        <div className="font-bold text-2xl mb-3 text-red-600 transition-colors duration-300 group-hover:text-red-800">
          {place.name}
        </div>
        <p className="text-gray-700 text-sm mb-5 leading-relaxed line-clamp-3">{place.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-800">
          <div>
            <p className="font-semibold text-red-600">Distance:</p>
            <p>{place.distanceFromCityCenter}</p>
          </div>
          <div>
            <p className="font-semibold text-red-600">Time Required:</p>
            <p>{place.timeRequired}</p>
          </div>
          <div>
            <p className="font-semibold text-red-600">Entry Fee:</p>
            <p>₹{place.entryFee.indian || place.entryFee.adult} (Indian)</p>
            {place.entryFee.foreigner && <p>₹{place.entryFee.foreigner} (Foreigner)</p>}
          </div>
          <div>
            <p className="font-semibold text-red-600">Best Time:</p>
            <p>{place.bestTimeToVisit}</p>
          </div>
        </div>
        
        <Link 
          to={`/place/${place.id}`}
          className="block w-full text-center bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
