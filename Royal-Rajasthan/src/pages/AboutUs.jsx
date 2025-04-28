import React from 'react';

const AboutUs = () => {
  const cities = [
    { name: 'Jaipur – The Pink City', link: '#' },
    { name: 'Udaipur – The City of Lakes', link: '#' },
    { name: 'Jodhpur – The Blue City', link: '#' },
    { name: 'Jaisalmer – The Golden City', link: '#' },
    { name: 'Pushkar – The Sacred Town', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
          About <span className="text-amber-600">Royal Rajasthan</span>
        </h1>
        <p className="text-lg text-gray-700">
          Your premier digital guide to the <span className="font-semibold">Land of Kings</span>! We help travelers uncover the majestic beauty, rich heritage, and vibrant culture of Rajasthan, one city at a time.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Who We Are */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amber-700 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Royal Rajasthan is a <span className="font-semibold">passionate team of travel enthusiasts, historians, and local experts</span> committed to providing authentic, detailed, and personalized travel information for every corner of this magnificent state.
          </p>
          <p className="text-gray-700">
            Whether you're exploring the golden dunes of Jaisalmer, the royal palaces of Jaipur, or the serene lakes of Udaipur, we ensure you experience Rajasthan like never before.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-amber-700 mb-6 text-center">What We Offer</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* City Guides */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-amber-600 mb-3">1. City-Wise Travel Guides</h3>
              <p className="text-gray-700 mb-4">Discover the best of each Rajasthani city with our curated guides:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✔</span>
                  Top Tourist Attractions (Forts, Palaces, Temples)
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✔</span>
                  Hidden Gems & Offbeat Spots
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✔</span>
                  Local Cuisine & Best Restaurants
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✔</span>
                  Cultural Events & Festivals
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✔</span>
                  Shopping & Souvenir Hotspots
                </li>
              </ul>
            </div>

            {/* Itineraries */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-amber-600 mb-3">2. Personalized Itineraries</h3>
              <p className="text-gray-700 mb-4">Plan your perfect trip with our ready-made or customizable itineraries:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  Duration (1-day, weekend, week-long)
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  Interests (Heritage, Adventure, Food)
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  Budget (Luxury, Mid-range, Budget)
                </li>
              </ul>
            </div>

            {/* Local Insights */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-amber-600 mb-3">3. Local Insights & Tips</h3>
              <p className="text-gray-700">
                Get real-time updates, travel hacks, and local recommendations to make your journey smooth and memorable.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-amber-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">Why Choose Royal Rajasthan?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-amber-700 font-bold mr-2">✅</span>
              <span className="text-gray-800">Accurate & Updated Information</span>
            </div>
            <div className="flex items-start">
              <span className="text-amber-700 font-bold mr-2">✅</span>
              <span className="text-gray-800">Local Expertise</span>
            </div>
            <div className="flex items-start">
              <span className="text-amber-700 font-bold mr-2">✅</span>
              <span className="text-gray-800">User-Friendly Experience</span>
            </div>
            <div className="flex items-start">
              <span className="text-amber-700 font-bold mr-2">✅</span>
              <span className="text-gray-800">Multilingual Support</span>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-amber-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg italic">
            "We believe Rajasthan is not just a destination—it's an emotion. Our mission is to help travelers connect deeply with its history, culture, and people while making travel planning effortless and enjoyable."
          </p>
        </section>

        {/* Explore Cities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-amber-700 mb-6 text-center">Explore Rajasthan, One City at a Time!</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city, index) => (
              <a
                key={index}
                href={city.link}
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
              >
                {city.name}
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-amber-700 mb-6">Join Us on This Royal Journey!</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#" className="text-amber-600 hover:text-amber-800 font-medium">
              📩 email@royalrajasthan.com
            </a>
            <div className="flex gap-4">
              <a href="#" className="text-amber-600 hover:text-amber-800 text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-800 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-800 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;