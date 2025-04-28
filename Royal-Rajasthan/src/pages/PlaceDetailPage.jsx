import React from 'react';
import { useParams } from 'react-router-dom';
import { touristPlaces } from '../data/rajasthanData';

const PlaceDetailPage = () => {
  const { placeId } = useParams();
  const place = touristPlaces.find(p => p.id === parseInt(placeId));

  if (!place) return <div className="text-center py-12">Place not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-96 object-cover"
        />
        
        <div className="p-8">
          <h1 className="text-3xl font-bold text-rajasthan-blue mb-4">{place.name}</h1>
          <p className="text-gray-700 text-lg mb-6">{place.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-rajasthan-blue mb-4">Visit Information</h2>
              <div className="space-y-3">
                <p><span className="font-medium">Distance from city center:</span> {place.distanceFromCityCenter}</p>
                <p><span className="font-medium">Time required:</span> {place.timeRequired}</p>
                <p><span className="font-medium">Best time to visit:</span> {place.bestTimeToVisit}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-rajasthan-blue mb-4">Entry Fees</h2>
              <div className="space-y-3">
                {place.entryFee.indian && (
                  <p><span className="font-medium">Indian Adults:</span> ₹{place.entryFee.indian}</p>
                )}
                {place.entryFee.adult && (
                  <p><span className="font-medium">Adults:</span> ₹{place.entryFee.adult}</p>
                )}
                {place.entryFee.foreigner && (
                  <p><span className="font-medium">Foreigners:</span> ₹{place.entryFee.foreigner}</p>
                )}
                {place.entryFee.child && (
                  <p><span className="font-medium">Children:</span> ₹{place.entryFee.child}</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-rajasthan-blue mb-4">Location</h2>
            {/* You can add a map component here */}
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailPage;