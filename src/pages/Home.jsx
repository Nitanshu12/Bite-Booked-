import { Search, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuoteForm from '../components/QuoteForm.jsx';
import catererData from '../data/catererData';
function Home() {
  const navigate = useNavigate();
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  // Filtering logic based on answers from the quote form
  const filterCaterers = (answers) => {
    // Example: filter by cuisine, veg/non-veg, and budget if present in answers
    return catererData.filter(caterer => {
      // You can expand this logic as needed
      let match = true;
      if (answers.cuisine && answers.cuisine.length > 0) {
        match = match && answers.cuisine.some(cuisine => caterer.specialty.toLowerCase().includes(cuisine.toLowerCase()));
      }
      // Add more filtering as needed (e.g., location, budget, etc.)
      return match;
    });
  };

  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex flex-col relative overflow-hidden"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        {/* Spacer for fixed navbar */}
        <div className="h-20 w-full"></div>
        <section className="w-full flex flex-col items-center text-center pt-24">
          <div className="flex flex-col items-center w-full max-w-xl gap-2">
            <div className="flex items-center bg-white text-black rounded-full px-6 py-3 mb-8 shadow-md gap-4 w-full">
              <Search className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search Caterers..."
                className="flex-1 outline-none border-none bg-transparent text-lg"
              />
              <SlidersHorizontal className="h-5 w-5 text-gray-500" />
            </div>
            <h1 className="text-3xl font-extrabold mb-4 text-orange-500 tracking-wide">BITEBOOKED</h1>
            <p className="text-lg text-white font-medium mb-1">
              Your Event. Our Caterers. Perfectly Served.
            </p>
            <p className="text-base text-white mb-6">
              “Book a Bite, Make it Right.”
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-md cursor-pointer text-lg font-semibold shadow-lg hover:bg-orange-600 transition-all duration-150" onClick={() => setShowQuoteModal(true)}>
              Request a Quote
            </button>
          </div>
        </section>
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
