import { useParams } from 'react-router-dom';
import catererData from '../data/catererData';
import { Star } from 'lucide-react';
import React, { useState } from 'react';

const galleryImages = [
  '/images/16.png',
  '/images/17.png',
  '/images/18.png',
  '/images/19.png',
];

export default function CatererDetail() {
  const { id } = useParams();
  const caterer = catererData.find(c => c.id === Number(id));
  const [showSuccess, setShowSuccess] = useState(false);

  function handleBookBite() {
    // Add order to localStorage
    const prevOrders = JSON.parse(localStorage.getItem('orderedCaterers') || '[]');
    // Avoid duplicate orders for same caterer (optional)
    const alreadyOrdered = prevOrders.some(o => o.id === caterer.id);
    if (!alreadyOrdered) {
      prevOrders.push({ ...caterer, orderedAt: new Date().toISOString() });
      localStorage.setItem('orderedCaterers', JSON.stringify(prevOrders));
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000); // Auto-close after 2s
  }

  if (!caterer) return <div className="text-center text-red-500 mt-32">Caterer not found.</div>;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background image */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img src="/images/hero-bg.png" alt="background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-8 px-6 md:px-16 pb-6 md:pb-12">
          <img src={caterer.logo} alt={caterer.name} className="w-44 h-44 md:w-56 md:h-56 rounded-lg object-contain bg-white p-4 shadow-xl border-4 border-white" />
          <div className="flex-1 flex flex-col justify-center md:justify-end">
            <div className="flex items-center gap-2 mb-2 mt-6 md:mt-0">
              <h1 className="text-3xl md:text-4xl font-bold text-white mr-2">{caterer.name}</h1>
              <span className="inline-block align-middle"><Star className="inline w-6 h-6 text-green-400" /></span>
              <span className="text-green-400 text-lg font-semibold">{caterer.rating}</span>
            </div>
            <div className="text-gray-200 text-base md:text-lg mb-2">
              <span className="font-bold text-white">Location:</span> CaterNinja GravyTech Catering Ventures Pvt Ltd. NH-23, New Delhi-110045
            </div>
            <button className="mt-2 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg shadow transition text-lg w-fit self-start cursor-pointer" onClick={handleBookBite}>BOOK BITE</button>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="max-w-4xl mx-auto px-4 md:px-0 mt-10">
        <p className="text-gray-200 text-base md:text-lg mb-6">
          {caterer.description}
        </p>
        <p className="text-gray-200 text-base md:text-lg mb-10">
          {/* Optionally, you can add more details here or remove this paragraph if not needed */}
        </p>
        {/* Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Services:</h2>
          {Array.isArray(caterer.services) && caterer.services.length > 0 ? (
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {caterer.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">Service details coming soon.</p>
          )}
        </div>
        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-white">Gallery:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <img key={i} src={img} alt="gallery" className="w-full h-36 md:h-40 object-cover rounded-lg border-2 border-gray-700" />
            ))}
          </div>
        </div>
      </div>
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white text-black rounded-lg shadow-lg p-8 flex flex-col items-center">
            <div className="text-3xl mb-2">🎉</div>
            <div className="font-bold text-lg mb-2">Order Successful!</div>
            <div className="text-gray-700 mb-4">Your booking has been placed. Check your dashboard for details.</div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded" onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
} 