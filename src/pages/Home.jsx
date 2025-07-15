import React from "react";
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import QuoteForm from '../components/QuoteForm.jsx';
import catererData from '../data/catererData';

function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/caterers?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4 gap-3 z-20 relative w-full pt-40"
             style={{ minHeight: '70vh' }}>
          {/* Responsive margin top for hero section */}
          <div className="mt-12 sm:mt-24 md:mt-36 lg:mt-[-450px]" />
          {/* Search bar only (no filter icon) */}
          <form
            className="flex items-center bg-white text-black rounded-full px-2 sm:px-4 py-2 mb-6 shadow-md gap-2 sm:gap-4 w-full max-w-[95vw] sm:max-w-lg relative"
            onSubmit={handleSearchSubmit}
          >
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search Caterers by name or location..."
              className="flex-1 outline-none border-none bg-transparent text-sm sm:text-base"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </form>
          {/* Headings, now responsive */}
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-orange-500 drop-shadow">
            BITEBOOKED
          </h1>
          <p className="text-base sm:text-lg text-white font-medium">
            Your Event. Our Caterers. Perfectly Served.
          </p>
          <p className="text-xs sm:text-sm mt-1 text-white opacity-90">
            “Book a Bite, Make it Right.”
          </p>
          {/* Responsive button */}
          <button
            className="bg-orange-500 text-white px-6 py-2 sm:px-8 sm:py-2 rounded-md cursor-pointer mt-4 text-base sm:text-lg font-semibold shadow hover:bg-orange-600 transition"
            onClick={() => setShowQuoteModal(true)}
          >
            Request a Quote
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showQuoteModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQuoteModal(false)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg relative p-0 sm:p-6 w-full max-w-md mx-2"
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-2xl text-orange-600 hover:text-orange-800"
                onClick={() => setShowQuoteModal(false)}
              >
                ×
              </button>
              <QuoteForm caterers={catererData} filterCaterers={filterCaterers} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
