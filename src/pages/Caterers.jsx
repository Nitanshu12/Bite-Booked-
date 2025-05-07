import React, { useState, useEffect } from 'react';
import { Search, MapPin, SlidersHorizontal, Star } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const catererData = [
  {
    id: 1,
    name: 'CaterNinja',
    logo: 'https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    location: 'New Delhi',
    specialty: 'International Cuisine',
  },
  {
    id: 2,
    name: 'Culinary ID Catering',
    logo: 'https://images.pexels.com/photos/6004758/pexels-photo-6004758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    location: 'Amritsar',
    specialty: 'Traditional Punjabi',
  },
  {
    id: 3,
    name: 'Food Case Caterers',
    logo: 'https://images.pexels.com/photos/5656080/pexels-photo-5656080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    location: 'Patiala',
    specialty: 'Modern Indian',
  },
  {
    id: 4,
    name: 'Royal Spice',
    logo: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    location: 'Chandigarh',
    specialty: 'Multi-cuisine',
  },
  {
    id: 5,
    name: 'Delish Delights',
    logo: 'https://images.pexels.com/photos/5949884/pexels-photo-5949884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.4,
    location: 'Ludhiana',
    specialty: 'Vegetarian Specialties',
  },
  {
    id: 6,
    name: 'Tasty Traditions',
    logo: 'https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    location: 'Patiala',
    specialty: 'Wedding Catering',
  },
];

const Caterers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [showFilters, setShowFilters] = useState(false);

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

  const filteredCaterers = catererData.filter((caterer) =>
    caterer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caterer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caterer.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen text-white">
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="relative rounded-full overflow-hidden shadow-lg max-w-2xl mx-auto">
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
            <div className="mt-4 p-4  rounded-lg max-w-2xl mx-auto" style={{
                backgroundColor:'#2D2D2D'
            }}>
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

      {/* Caterers List Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6">Top caterers in {searchTerm || 'Patiala'}:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCaterers.map((caterer) => (
              <Link to={`/caterers/${caterer.id}`} key={caterer.id} className="group">
                <div className=" rounded-lg overflow-hidden h-full hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300" style={{
                    backgroundColor:'#2D2D2D'
                }}>
                  <div className="h-40 bg-gray-700 relative">
                    <img src={caterer.logo} alt={caterer.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-500 transition-colors">{caterer.name}</h3>
                    <div className="flex items-center mb-2 text-sm">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{caterer.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{caterer.location}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-700 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{caterer.specialty}</span>
                      <span className="text-orange-500 text-sm">more ›</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Caterers;