import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function getWishlist() {
  return JSON.parse(localStorage.getItem('wishlistCaterers') || '[]');
}
function getOrders() {
  return JSON.parse(localStorage.getItem('orderedCaterers') || '[]');
}

export default function Dashboard() {
  const [tab, setTab] = useState('wishlist');
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Function to update from localStorage
    const updateFromStorage = () => {
      setWishlist(getWishlist());
      setOrders(getOrders());
    };
    updateFromStorage();
    // Listen for storage changes (cross-tab)
    window.addEventListener('storage', updateFromStorage);
    // Optionally, poll every second for robustness
    const interval = setInterval(updateFromStorage, 1000);
    return () => {
      window.removeEventListener('storage', updateFromStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-[#181818] text-white px-4">
      <div className="max-w-3xl mx-auto bg-[#232323] rounded-xl shadow-lg p-6">
        <div className="flex gap-4 mb-6 border-b border-orange-500 pb-2">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition-all duration-150 ${tab === 'wishlist' ? 'bg-orange-500 text-white' : 'bg-[#232323] text-orange-400 hover:bg-orange-600 hover:text-white'}`}
            onClick={() => setTab('wishlist')}
          >
            Wishlist
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition-all duration-150 ${tab === 'orders' ? 'bg-orange-500 text-white' : 'bg-[#232323] text-orange-400 hover:bg-orange-600 hover:text-white'}`}
            onClick={() => setTab('orders')}
          >
            Orders
          </button>
        </div>
        {tab === 'wishlist' ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-orange-400">Your Wishlist</h2>
              <button onClick={() => setWishlist(getWishlist())} className="text-xs bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition">Refresh</button>
            </div>
            {wishlist.length === 0 ? (
              <div className="text-gray-400">No caterers in your wishlist yet.</div>
            ) : (
              <ul className="space-y-4">
                {wishlist.map(caterer => (
                  <li key={caterer.id} className="flex items-center gap-4 bg-[#292929] rounded-lg p-4">
                    <img src={caterer.logo} alt={caterer.name} className="w-16 h-16 rounded object-cover border-2 border-orange-400" />
                    <div className="flex-1">
                      <div className="font-semibold text-lg text-orange-300">{caterer.name}</div>
                      <div className="text-gray-300 text-sm">{caterer.location} &middot; {caterer.specialty?.join(', ')}</div>
                    </div>
                    <Link to={`/caterers/${caterer.id}`} className="text-orange-400 hover:underline font-medium">View</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-orange-400">Your Orders</h2>
              <button onClick={() => setOrders(getOrders())} className="text-xs bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition">Refresh</button>
            </div>
            {orders.length === 0 ? (
              <div className="text-gray-400">No orders yet.</div>
            ) : (
              <ul className="space-y-4">
                {orders.map(order => (
                  <li key={order.id} className="flex items-center gap-4 bg-[#292929] rounded-lg p-4">
                    <img src={order.logo} alt={order.name} className="w-16 h-16 rounded object-cover border-2 border-orange-400" />
                    <div className="flex-1">
                      <div className="font-semibold text-lg text-orange-300">{order.name}</div>
                      <div className="text-gray-300 text-sm">{order.location} &middot; {order.specialty?.join(', ')}</div>
                      <div className="text-xs text-gray-400 mt-1">Ordered on: {order.orderedAt ? new Date(order.orderedAt).toLocaleString() : 'N/A'}</div>
                    </div>
                    <Link to={`/caterers/${order.id}`} className="text-orange-400 hover:underline font-medium">View</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 