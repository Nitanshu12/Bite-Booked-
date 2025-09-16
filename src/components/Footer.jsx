import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-black/90 text-white py-4 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-center text-sm text-gray-400">
          &copy; {currentYear} BITEBOOKED. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;