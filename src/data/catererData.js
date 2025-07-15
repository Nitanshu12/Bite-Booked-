const catererData = [
  // Patiala
  { id: 1, name: "Punjab Feast", location: "Patiala", specialty: ["North Indian", "Punjabi"], rating: 4.7, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Live Counters"], logo: "/images/1000_F_1207504339_KcKA7hLmz3dxKCHkeGy7uLcQFV5pQCiv.jpg" },
  { id: 2, name: "Royal Rasoi", location: "Patiala", specialty: ["South Indian"], rating: 4.5, priceRange: "Premium", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/c8a7c3a22a8f1e23c11bfe498146f2d6.jpg" },
  { id: 3, name: "Taste of India Caterers", location: "Patiala", specialty: ["North Indian", "Chinese"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/f4bfb3c12ed421c1d59b75479868f956.jpg" },
  { id: 4, name: "Punjabi Platter", location: "Patiala", specialty: ["Punjabi", "Street Food"], rating: 4.2, priceRange: "Budget", type: "Veg Only", serviceType: ["Live Counters", "Snacks Only"], logo: "/images/c3f3d32f3ecb48806799d4ad359c873d.jpg" },
  { id: 5, name: "Global Bites", location: "Patiala", specialty: ["Continental", "Mexican"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Buffet", "Full Service"], logo: "/images/7853f3f63abf925a72a6e3effee6f9c1.jpg" },
  { id: 6, name: "The Healthy Spoon", location: "Patiala", specialty: ["Healthy", "Vegan"], rating: 4.4, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/f5ddf92423c4dd2070b3bc0c2dc4f438.jpg" },
  // Amritsar
  { id: 7, name: "Amritsari Zaika", location: "Amritsar", specialty: ["Punjabi", "Street Food"], rating: 4.7, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/Lobia __ Chawli 🫶🏻.jpg" },
  { id: 8, name: "Gourmet Greens", location: "Amritsar", specialty: ["Vegan", "Italian"], rating: 4.6, priceRange: "Premium", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/bef94ee037970ea1ab8a2651bf91becc.jpg" },
  { id: 9, name: "Swaad Catering", location: "Amritsar", specialty: ["Chinese", "South Indian"], rating: 4.3, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "/images/1000_F_1104503922_Kse0aCcoqbC7XnukpXIRWNouMNKuEcsu.jpg" },
  { id: 10, name: "Flavoursome Foods", location: "Amritsar", specialty: ["Punjabi", "Continental"], rating: 4.1, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/456be04373a74c0c8d6565e8c9621bd6.jpg" },
  { id: 11, name: "Classic Catering Co.", location: "Amritsar", specialty: ["North Indian", "Bengali"], rating: 4.5, priceRange: "Premium", type: "Both", serviceType: ["Full Service"], logo: "/images/1000_F_222942736_T3ZWWUL5rp3lwveY3iZuGOlQ2VojmYp6.jpg" },
  { id: 12, name: "Jain Caterers", location: "Amritsar", specialty: ["Jain Food", "Indian"], rating: 4.9, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/1000_F_1082138403_E28HRSWX0tPCUfpdSyUepushzcHBHEo1.jpg" },
  // Delhi
  { id: 13, name: "Urban Bites", location: "Delhi", specialty: ["Continental", "Mexican"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Buffet", "Full Service"], logo: "/images/93ff6eeec67c99da80bae24fddd6f9cb.jpg" },
  { id: 14, name: "Delhi Delight Caterers", location: "Delhi", specialty: ["North Indian", "Chinese"], rating: 4.6, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "/images/240_F_110987594_bFXPykapTjv492JwFxuDrLRIFWaRLJRm 2.jpg" },
  { id: 15, name: "Veggie Express", location: "Delhi", specialty: ["Vegan", "Healthy"], rating: 4.4, priceRange: "Budget", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/240_F_110987594_bFXPykapTjv492JwFxuDrLRIFWaRLJRm.jpg" },
  { id: 16, name: "Elegant Events", location: "Delhi", specialty: ["South Indian", "Street Food"], rating: 4.2, priceRange: "Mid-range", type: "Both", serviceType: ["Live Counters", "Buffet"], logo: "/images/240_F_158401524_ta6F02GGLTAK4cqqzeg4qnHpsi4d5PAo.jpg" },
  { id: 17, name: "Grand Occasions", location: "Delhi", specialty: ["Punjabi", "Italian"], rating: 4.9, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "/images/240_F_1111286469_DNkTyIOdmDHDss5oEciZ0Geh40OEQxjA.jpg" },
  { id: 18, name: "Food Affair", location: "Delhi", specialty: ["Chinese", "Snacks"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Snacks Only"], logo: "/images/240_F_1078439878_mYc0awzWXMFv9MAimU32wST6dCJaS4Aj.jpg" },
  // Ludhiana
  { id: 19, name: "Ludhiana CaterPro", location: "Ludhiana", specialty: ["Continental", "Tandoori"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 18.png" },
  { id: 20, name: "Celebrations Caterers", location: "Ludhiana", specialty: ["Multi-cuisine", "Indian"], rating: 4.7, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "/images/Artboard 17.png" },
  { id: 21, name: "Taste Factory", location: "Ludhiana", specialty: ["Chinese", "Mexican"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Live Counters", "Buffet"], logo: "/images/Artboard 19.png" },
  { id: 22, name: "Sweet Savor", location: "Ludhiana", specialty: ["Sweets", "Bengali"], rating: 4.6, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 16.png" },
  { id: 23, name: "Spice Hub", location: "Ludhiana", specialty: ["North Indian", "Street Food"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Live Counters"], logo: "/images/Artboard 15.png" },
  { id: 24, name: "Green Bowl", location: "Ludhiana", specialty: ["Healthy", "Vegan"], rating: 4.5, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/Artboard 13.png" },
  // Sonipat
  { id: 25, name: "Sonipat Royal Foods", location: "Sonipat", specialty: ["Indian", "Sweets"], rating: 4.3, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "/images/Artboard 14.png" },
  { id: 26, name: "Urban Tadka", location: "Sonipat", specialty: ["Street Food", "North Indian"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Live Counters"], logo: "/images/Artboard 12.png" },
  { id: 27, name: "Green Leaf Caterers", location: "Sonipat", specialty: ["Healthy Food", "Vegan"], rating: 4.6, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 10.png" },
  { id: 28, name: "Fiesta Foods", location: "Sonipat", specialty: ["Italian", "Snacks"], rating: 4.5, priceRange: "Budget", type: "Both", serviceType: ["Snacks Only"], logo: "/images/Artboard 8.png" },
  { id: 29, name: "The Banquet House", location: "Sonipat", specialty: ["Multi-cuisine", "Continental"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Full Service"], logo: "/images/Artboard 9.png" },
  { id: 30, name: "Swaad Caterers", location: "Sonipat", specialty: ["Indian", "Chinese"], rating: 4.3, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "/images/Artboard 7.png" },
  // Chandigarh
  { id: 31, name: "Chandigarh Chaska", location: "Chandigarh", specialty: ["Punjabi", "Street Food"], rating: 4.5, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/16.png" },
  { id: 32, name: "Veggie Delight", location: "Chandigarh", specialty: ["Vegan", "Healthy"], rating: 4.7, priceRange: "Premium", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/Artboard 4.png" },
  { id: 33, name: "Spice Route", location: "Chandigarh", specialty: ["South Indian", "Mexican"], rating: 4.6, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 5.png" },
  { id: 34, name: "Taste of Bengal", location: "Chandigarh", specialty: ["Bengali", "Sweets"], rating: 4.8, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 6.png" },
  { id: 35, name: "Flavour Junction", location: "Chandigarh", specialty: ["Continental", "Italian"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Live Counters"], logo: "/images/Artboard 2.png" },
  { id: 36, name: "Nawaabi Kitchen", location: "Chandigarh", specialty: ["North Indian", "Tandoori"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 1.png" },
  // Noida
  { id: 37, name: "Noida Food Factory", location: "Noida", specialty: ["Chinese", "Continental"], rating: 4.7, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/18.png" },
  { id: 38, name: "Noida Gourmet", location: "Noida", specialty: ["Italian", "Snacks"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Snacks Only"], logo: "/images/19.png" },
  { id: 39, name: "Savour & Serve", location: "Noida", specialty: ["South Indian", "Street Food"], rating: 4.6, priceRange: "Premium", type: "Both", serviceType: ["Live Counters", "Buffet"], logo: "/images/17.png" },
  { id: 40, name: "Royal Banquet Noida", location: "Noida", specialty: ["North Indian", "Punjabi"], rating: 4.9, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "/images/Artboard 3.png" },
  { id: 41, name: "Healthy Indulgence", location: "Noida", specialty: ["Healthy", "Vegan"], rating: 4.5, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/Artboard 14.png" },
  { id: 42, name: "Taste of South", location: "Noida", specialty: ["South Indian"], rating: 4.3, priceRange: "Budget", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 12.png" },
  // Gurgaon
  { id: 43, name: "Gurgaon Feast", location: "Gurgaon", specialty: ["Punjabi", "Continental"], rating: 4.7, priceRange: "Premium", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 10.png" },
  { id: 44, name: "Gourmet Club", location: "Gurgaon", specialty: ["Italian", "Snacks"], rating: 4.6, priceRange: "Mid-range", type: "Both", serviceType: ["Snacks Only"], logo: "/images/Artboard 8.png" },
  { id: 45, name: "Street Flavours", location: "Gurgaon", specialty: ["Street Food", "Chinese"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Live Counters"], logo: "/images/Artboard 9.png" },
  { id: 46, name: "Royal Veg", location: "Gurgaon", specialty: ["Vegan", "Healthy"], rating: 4.9, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 7.png" },
  { id: 47, name: "Spicy Spoon", location: "Gurgaon", specialty: ["North Indian", "Mexican"], rating: 4.5, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/16.png" },
  { id: 48, name: "Gurgaon Grand Caterers", location: "Gurgaon", specialty: ["Continental", "Tandoori"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Full Service"], logo: "/images/Artboard 5.png" },
  // Delhi (more)
  { id: 49, name: "Delhi Dhaba", location: "Delhi", specialty: ["North Indian", "Street Food"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Buffet", "Live Counters"], logo: "/images/Artboard 6.png" },
  { id: 50, name: "Platter Palace", location: "Delhi", specialty: ["Continental", "Mexican"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "/images/Artboard 2.png" },
  { id: 51, name: "Tandoori Treats", location: "Delhi", specialty: ["Tandoori", "Indian"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 1.png" },
  { id: 52, name: "Veggie Table", location: "Delhi", specialty: ["Vegan", "Healthy"], rating: 4.3, priceRange: "Budget", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/Artboard 3.png" }
];
export default catererData;
