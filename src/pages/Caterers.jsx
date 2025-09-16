import React, { useState, useEffect } from 'react';
import { Search, MapPin, SlidersHorizontal, Star, Heart } from 'lucide-react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import catererData from '../data/catererData';

function getRandomItems(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const cuisineOptions = [
  'Punjabi', 'North Indian', 'South Indian', 'Chinese', 'Continental', 'Mexican', 'Vegan', 'Healthy', 'Bengali', 'Street Food', 'Tandoori', 'Jain Food', 'Sweets', 'Multi-cuisine', 'Indian', 'Snacks'
];
const ratingOptions = ['Any Rating', '4.5 & Above', '4.0 & Above', '3.5 & Above'];
const priceOptions = ['Any Price', 'Budget', 'Mid-range', 'Premium'];

const Caterers = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCuisine, setSelectedCuisine] = useState('All Cuisines');
  const [selectedRating, setSelectedRating] = useState('Any Rating');
  const [selectedPrice, setSelectedPrice] = useState('Any Price');
  const location = useLocation();


  const filteredFromState = location.state?.filtered;
  const criteria = location.state?.criteria;


  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem('wishlistCaterers') || '[]');
  });

  const isWishlisted = (caterer) => wishlist.some(c => c.id === caterer.id);

  
  const toggleWishlist = (caterer) => {
    let updated;
    if (isWishlisted(caterer)) {
      updated = wishlist.filter(c => c.id !== caterer.id);
    } else {
      updated = [...wishlist, caterer];
    }
    setWishlist(updated);
    localStorage.setItem('wishlistCaterers', JSON.stringify(updated));
  };

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);


  const getFilteredCaterers = () => {
    let data = catererData;
    
    if (filteredFromState && !searchTerm && selectedCuisine === 'All Cuisines' && selectedRating === 'Any Rating' && selectedPrice === 'Any Price') {
      data = filteredFromState;
    }
   
    else {
      data = catererData.filter(caterer => {
        let match = true;
    
        if (searchTerm) {
          match = match && (
            caterer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            caterer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            caterer.specialty.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
          );
        }
        
        if (selectedCuisine !== 'All Cuisines') {
          match = match && caterer.specialty.map(s => s.toLowerCase()).includes(selectedCuisine.toLowerCase());
        }
        
        if (selectedRating !== 'Any Rating') {
          const minRating = parseFloat(selectedRating.split(' ')[0]);
          match = match && caterer.rating >= minRating;
        }
       
        if (selectedPrice !== 'Any Price') {
          match = match && caterer.priceRange === selectedPrice;
        }
        return match;
      });
    }
    return data;
  };

  const recommendations = getFilteredCaterers().slice(0, 3);

  
  let locationCaterers = [];
  if (criteria && criteria['Location for event']) {
    locationCaterers = catererData.filter(
      c => c.location.toLowerCase() === criteria['Location for event'].toLowerCase()
    ).slice(0, 3);
  } else {
    locationCaterers = catererData.filter(c => c.location.toLowerCase() === 'patiala').slice(0, 3);
  }

 
  const shownIds = new Set([
    ...recommendations.map(c => c.id),
    ...locationCaterers.map(c => c.id),
  ]);
  const specialOfferPool = catererData.filter(c => !shownIds.has(c.id));
  const specialOffers = getRandomItems(specialOfferPool, 3);

  const CatererCard = ({ caterer }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative"
    >
      <button
        className={`absolute top-2 right-2 z-20 bg-black/60 rounded-full p-2 transition-all duration-150 ${isWishlisted(caterer) ? 'text-orange-500' : 'text-gray-300 hover:text-orange-400'}`}
        onClick={e => { e.preventDefault(); toggleWishlist(caterer); }}
        aria-label={isWishlisted(caterer) ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart fill={isWishlisted(caterer) ? '#f97316' : 'none'} strokeWidth={2.2} className="w-5 h-5" />
      </button>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="relative h-48 bg-orange-100">
          <img src={caterer.logo} alt={caterer.name} className="w-full h-full object-cover" />
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Star className="h-3 w-3 mr-1 fill-white" />
            {caterer.rating}
          </div>
        </div>
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold text-orange-500">{caterer.name}</h3>
          <div className="flex items-center text-sm mt-1 text-gray-300">
            <MapPin className="h-4 w-4 mr-1" />
            {caterer.location}
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {caterer.specialty.slice(0, 2).map((spec, i) => (
              <span key={i} className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full">
                {spec}
              </span>
            ))}
          </div>
          <Link to={`/caterers/${caterer.id}`}>
            <motion.button 
              className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md text-sm hover:bg-orange-600 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              more ›
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="relative min-h-screen w-full overflow-x-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/Group 14.png"
          alt="background"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.6)' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 min-h-screen text-white pt-16 pb-12 px-4 md:px-6">
        
        <motion.section
          className="py-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.form
              onSubmit={e => { e.preventDefault(); }}
              className="flex items-center bg-white text-black px-4 py-3 rounded-full shadow-lg max-w-2xl mx-auto mb-8 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
            >
              <Search className="h-5 w-5 text-orange-500 mr-2" />
              <input
                type="text"
                placeholder="Search caterers by name or location..."
                className="flex-1 outline-none bg-transparent text-sm sm:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <motion.button
                type="button"
                className={`flex items-center ${showFilters ? 'text-orange-500' : 'text-orange-400'} cursor-pointer ml-2`}
                onClick={() => setShowFilters(!showFilters)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SlidersHorizontal className="h-5 w-5" />
              </motion.button>
            </motion.form>
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  className="mt-4 p-6 rounded-lg max-w-2xl mx-auto shadow-xl"
                  style={{ backgroundColor: 'rgba(45, 45, 45, 0.9)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-orange-300 mb-2">Cuisine Type</label>
                      <select className="w-full p-3 bg-black/30 border border-orange-500/30 rounded-md text-white focus:outline-none focus:border-orange-500 transition-colors" value={selectedCuisine} onChange={e => setSelectedCuisine(e.target.value)}>
                        <option>All Cuisines</option>
                        {cuisineOptions.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-orange-300 mb-2">Rating</label>
                      <select className="w-full p-3 bg-black/30 border border-orange-500/30 rounded-md text-white focus:outline-none focus:border-orange-500 transition-colors" value={selectedRating} onChange={e => setSelectedRating(e.target.value)}>
                        {ratingOptions.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-orange-300 mb-2">Price Range</label>
                      <select className="w-full p-3 bg-black/30 border border-orange-500/30 rounded-md text-white focus:outline-none focus:border-orange-500 transition-colors" value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)}>
                        {priceOptions.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <motion.button 
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md" 
                      onClick={() => setShowFilters(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close Filters
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>
        
        <motion.section
          className="max-w-6xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Recommendations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recommendations.length === 0 ? (
              <div className="col-span-3 text-center text-gray-300">No recommendations found.</div>
            ) : (
              recommendations.map((caterer) => <CatererCard caterer={caterer} key={caterer.id} />)
            )}
          </div>
        </motion.section>
        
        <motion.section
          className="max-w-6xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Top caterers in {criteria && criteria['Location for event'] ? criteria['Location for event'] : 'Patiala'}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {locationCaterers.length === 0 ? (
              <div className="col-span-3 text-center text-gray-300">No caterers found for this location.</div>
            ) : (
              locationCaterers.map((caterer) => <CatererCard caterer={caterer} key={caterer.id} />)
            )}
          </div>
        </motion.section>
        
        <motion.section
          className="max-w-6xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Special Offers
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specialOffers.length === 0 ? (
              <div className="col-span-3 text-center text-gray-300">No special offers at the moment.</div>
            ) : (
              specialOffers.map((caterer) => <CatererCard caterer={caterer} key={caterer.id} />)
            )}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Caterers;