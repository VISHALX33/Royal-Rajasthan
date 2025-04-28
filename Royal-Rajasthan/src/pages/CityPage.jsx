import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceCard from '../components/PlaceCard';
import { rajasthanCities, touristPlaces } from '../data/rajasthanData';

const CityPage = () => {
  const { cityId } = useParams();
  const city = rajasthanCities.find(c => c.id === parseInt(cityId));
  const cityPlaces = touristPlaces.filter(p => p.cityId === parseInt(cityId));

  if (!city) return <div className="text-center py-12">City not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rajasthan-blue">{city.name}</h1>
        <p className="text-xl text-gray-600 mt-2">{city.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cityPlaces.map(place => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default CityPage;