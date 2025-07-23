import { motion } from "framer-motion";
import QuoteForm from '../components/QuoteForm.jsx';
import React, { useState } from 'react';
import catererData from '../data/catererData';

function About() {
  const [showQuote, setShowQuote] = useState(false);

  function filterCaterers(criteria) {
    return catererData.filter(c => {
      let match = true;
      if (criteria.cuisine && criteria.cuisine.length) {
        match = match && criteria.cuisine.some(cui => c.specialty.includes(cui));
      }
      if (criteria.location) {
        match = match && c.location === criteria.location;
      }
      if (criteria.dishType) {
        if (criteria.dishType === 'Veg Only') match = match && c.type === 'Veg Only';
        else if (criteria.dishType === 'Non-Veg Only') match = match && c.type !== 'Veg Only';
      }
      if (criteria.serviceType) {
        match = match && c.serviceType.includes(criteria.serviceType);
      }
      if (criteria.budget) {
      }
      return match;
    });
  }

  return (
    <>
      <section
        className="relative w-full"
        style={{
          backgroundImage: "url('/images/About-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center px-4 pt-28 md:pt-36 pb-12">
          <motion.h1
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-white text-center mb-3 drop-shadow"
            style={{ lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            BOOK THE BEST <br />
            <span className="block mt-1">CATERERS NEAR YOU</span>
          </motion.h1>
          <motion.p
            className="text-white text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            At <span className="font-bold text-orange-400">BITEBOOKED</span>, we believe food is more than just a necessity — it's an experience. We are a community-driven platform connecting local caterers with customers looking for delicious, reliable, and personalized food services for their events.
          </motion.p>
          <motion.button
            className="bg-orange-600 text-lg sm:text-xl font-bold text-white py-3 px-8 rounded-md shadow hover:bg-orange-700 mb-0 transition cursor-pointer"
            onClick={() => setShowQuote(true)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          >
            Request a Quote
          </motion.button>
        </div>
      </section>

      <section className="w-full bg-black pb-16 pt-8">
        <motion.div
          className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 mb-8 px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 }
            }
          }}
        >
          <motion.div
            className="bg-white rounded-md shadow-lg p-6 flex-1 min-w-[260px] max-w-md mx-auto w-full"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-2 text-center">
              Why Choose Us?
            </h2>
            <ul className="text-black text-base sm:text-lg text-left list-disc list-inside space-y-2">
              <li>Verified local caterers</li>
              <li>Easy booking and communication</li>
              <li>Custom menu options</li>
              <li>Transparent pricing</li>
              <li>Trusted by hundreds of happy clients</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-md shadow-lg p-6 flex-1 min-w-[260px] max-w-md mx-auto w-full"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-2 text-center underline-offset-4 decoration-2 decoration-orange-600">
              Our Mission
            </h2>
            <p className="text-black text-base sm:text-lg text-left">
              To make event catering effortless by helping users discover and book the best local caterers in their area — no hassle, no stress, just great food.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-md shadow-lg p-6 flex-1 min-w-[260px] max-w-md mx-auto w-full"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-2 text-center">
              Our Journey
            </h2>
            <p className="text-black text-base sm:text-lg text-left">
              Started in Punjab, we are now expanding to multiple cities across India to help communities celebrate their most important moments with food that matters.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {showQuote && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="relative bg-white text-black rounded-lg shadow-lg p-4 md:p-8 w-full max-w-lg mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-orange-500 text-2xl font-bold"
              onClick={() => setShowQuote(false)}
            >
              &times;
            </button>
            <QuoteForm caterers={catererData} filterCaterers={filterCaterers} />
          </div>
        </div>
      )}
    </>
  );
}

export default About;
