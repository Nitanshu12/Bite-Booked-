import React, { useState, useEffect } from 'react';
import { Search, MapPin, SlidersHorizontal, Star } from 'lucide-react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import catererData from '../data/catererData';

function getRandomItems(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const Caterers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [showFilters, setShowFilters] = useState(false);
  const location = useLocation();

  // If navigated from QuoteForm, get filtered caterers and criteria from state
  const filteredFromState = location.state?.filtered;
  const criteria = location.state?.criteria;

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(searchTerm ? { search: searchTerm } : {});
  };

  // Recommendations: first 3 from filtered caterers (from QuoteForm)
  const recommendations = filteredFromState ? filteredFromState.slice(0, 3) : catererData.slice(0, 3);

  // Top caterers in location: next 3 filtered by location from criteria
  let locationCaterers = [];
  if (criteria && criteria['Location for event']) {
    locationCaterers = catererData.filter(
      c => c.location.toLowerCase() === criteria['Location for event'].toLowerCase()
    ).slice(0, 3);
  } else {
    locationCaterers = catererData.filter(c => c.location.toLowerCase() === 'patiala').slice(0, 3);
  }

  // Special Offers: 3 random caterers (excluding those already shown)
  const shownIds = new Set([
    ...recommendations.map(c => c.id),
    ...locationCaterers.map(c => c.id),
  ]);
  const specialOfferPool = catererData.filter(c => !shownIds.has(c.id));
  const specialOffers = getRandomItems(specialOfferPool, 3);

  // Card component for reuse
  const CatererCard = ({ caterer }) => (
    <Link to={`/caterers/${caterer.id}`} className="group">
      <div className="rounded-lg overflow-hidden h-full hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 bg-white flex flex-col">
        <div className="h-40 bg-gray-700 relative flex items-center justify-center">
          <img src={caterer.logo} alt={caterer.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-500 transition-colors text-orange-400">{caterer.name}</h3>
            <div className="flex items-center mb-2 text-sm">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-gray-800">{caterer.rating}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{caterer.location}</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xs text-gray-500">{caterer.specialty}</span>
            <span className="text-orange-500 text-sm">more &rsaquo;</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden pt-16">
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/Group 14.png"
          alt="background"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 min-h-screen text-white pt-24 pb-12 px-2 md:px-0">
        {/* Search and filters */}
        <section className="py-4">
          <div className="max-w-5xl mx-auto px-2 md:px-0">
            <form onSubmit={handleSearch} className="relative rounded-full overflow-hidden shadow-lg max-w-2xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search caterers by name or location..."
                className="w-full py-3 pl-12 pr-12 bg-white text-black border border-gray-700 focus:outline-none focus:border-orange-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-5 w-5 text-gray-500" />
              </button>
            </form>
            {showFilters && (
              <div className="mt-4 p-4 rounded-lg max-w-2xl mx-auto" style={{ backgroundColor: '#2D2D2D' }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Cuisine Type</label>
                    <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md">
                      <option>All Cuisines</option>
                      <option>Punjabi</option>
                      <option>North Indian</option>
                      <option>South Indian</option>
                      <option>Chinese</option>
                      <option>Continental</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Rating</label>
                    <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md">
                      <option>Any Rating</option>
                      <option>4.5 & Above</option>
                      <option>4.0 & Above</option>
                      <option>3.5 & Above</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Price Range</label>
                    <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md">
                      <option>Any Price</option>
                      <option>Budget</option>
                      <option>Mid-range</option>
                      <option>Premium</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* Recommendations */}
        <section className="max-w-5xl mx-auto mb-10">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Recommendations:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.length === 0 ? (
              <div className="col-span-3 text-center text-gray-300">No recommendations found.</div>
            ) : (
              recommendations.map((caterer) => <CatererCard caterer={caterer} key={caterer.id} />)
            )}
          </div>
        </section>
        {/* Top caterers in location */}
        <section className="max-w-5xl mx-auto mb-10">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Top caterers in {criteria && criteria['Location for event'] ? criteria['Location for event'] : 'Patiala'}:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locationCaterers.length === 0 ? (
              <div className="col-span-3 text-center text-gray-300">No caterers found for this location.</div>
            ) : (
              locationCaterers.map((caterer) => <CatererCard caterer={caterer} key={caterer.id} />)
            )}
          </div>
        </section>
        {/* Special Offers */}
        <section className="max-w-5xl mx-auto mb-10">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Special Offers:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialOffers.length === 0 ? (
              <div className="col-span-3 text-center text-gray-300">No special offers at the moment.</div>
            ) : (
              specialOffers.map((caterer) => <CatererCard caterer={caterer} key={caterer.id} />)
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Caterers;