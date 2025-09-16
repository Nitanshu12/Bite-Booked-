import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Star } from 'lucide-react';

import QuoteForm from "../components/QuoteForm.jsx";
import catererData from "../data/catererData";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      navigate(`/caterers?search=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  // Function to get featured caterers (3 caterers with highest ratings)
  const getFeaturedCaterers = () => {
    return [...catererData]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
  };

  const featuredCaterers = getFeaturedCaterers();

  return (
    <>
      <motion.div
        className="min-h-screen bg-center bg-cover flex flex-col relative"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Upper section with search, title and button */}
        <motion.div
          className="z-20 relative w-full px-4 flex flex-col items-center gap-5 pt-16 pb-20 mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h1
              className="text-3xl sm:text-3xl font-bold text-orange-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              BITEBOOKED
            </motion.h1>
            <motion.p
              className="text-white text-base sm:text-lg mt-2 gap-"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Your Event. Our Caterers. Perfectly Served.
            </motion.p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex items-center bg-white text-black px-4 py-3 rounded-full shadow-lg w-full max-w-lg gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{ boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
          >
            <Search className="h-5 w-5 text-orange-500" />
            <input
              type="text"
              value={searchInput}
              placeholder="Type location or name..."
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 outline-none bg-transparent text-sm sm:text-base"
            />
          </motion.form>

          <motion.button
            className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition shadow-lg"
            onClick={() => setShowModal(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Quote
          </motion.button>
        </motion.div>

        {/* Featured Caterers Section */}
        <motion.div 
          className="z-20 relative w-full px-4 pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Featured Caterers
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredCaterers.map((caterer, index) => (
              <motion.div
                key={caterer.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (index * 0.2), type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-48 bg-orange-100">
                  <img 
                    src={caterer.logo} 
                    alt={caterer.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-xl text-orange-600 hover:text-orange-800"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <QuoteForm caterers={catererData} filterCaterers={() => {}} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
