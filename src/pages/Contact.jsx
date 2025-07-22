import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
    
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Group 14.png"
          alt="background"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.4) blur(1px)' }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-[#232323] rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center"
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 text-center drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-gray-300 text-center mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Have a question, suggestion, or want to work with us? Fill out the form below and our team will get back to you as soon as possible.
          </motion.p>
          <motion.form
            className="w-full flex flex-col gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            onSubmit={e => { e.preventDefault(); alert('Thank you for contacting us!'); }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-lg bg-[#181818] text-white border border-gray-700 focus:border-orange-500 focus:outline-none transition"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            >
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-lg bg-[#181818] text-white border border-gray-700 focus:border-orange-500 focus:outline-none transition"
                placeholder="you@example.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            >
              <label className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea
                required
                rows={5}
                className="w-full p-3 rounded-lg bg-[#181818] text-white border border-gray-700 focus:border-orange-500 focus:outline-none transition resize-none"
                placeholder="Type your message..."
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow transition text-lg mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;