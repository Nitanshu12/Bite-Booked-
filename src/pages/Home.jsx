import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from 'lucide-react';

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

  return (
    <>
      <motion.div
        className="h-screen bg-center bg-cover flex flex-col justify-center items-center relative"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />

        <motion.div
          className="text-center z-20 relative w-full px-4 flex flex-col justify-center items-center gap-3 pt-20"
          style={{ minHeight: '70vh' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >

          <motion.form
            onSubmit={handleSubmit}
            className="flex items-center bg-white text-black px-4 py-2 rounded-full shadow-md w-full max-w-lg gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              value={searchInput}
              placeholder="Type location or name..."
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 outline-none bg-transparent text-sm sm:text-base"
            />
          </motion.form>

          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-orange-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            BITEBOOKED
          </motion.h1>
          <motion.p
            className="text-white text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your Event. Our Caterers. Perfectly Served.
          </motion.p>
          <motion.p
            className="text-white text-xs sm:text-sm opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            “Book a Bite, Make it Right.”
          </motion.p>

          <motion.button
            className="bg-orange-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-orange-600 transition"
            onClick={() => setShowModal(true)}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            Request a Quote
          </motion.button>
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
