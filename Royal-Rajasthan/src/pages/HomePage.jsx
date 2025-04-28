import React from 'react';
import CityCard from '../components/CityCard';
import { rajasthanCities } from '../data/rajasthanData';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-black mb-4">
        Welcome to Rajasthan
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        Explore the land of kings and its magnificent heritage
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rajasthanCities.map(city => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;