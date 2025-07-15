const catererData = [
  // Patiala
  { id: 1, name: "Punjab Feast", location: "Patiala", specialty: ["North Indian", "Punjabi"], rating: 4.7, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Live Counters"], logo: "https://randomuser.me/api/portraits/men/21.jpg" },
  { id: 2, name: "Royal Rasoi", location: "Patiala", specialty: ["South Indian"], rating: 4.5, priceRange: "Premium", type: "Veg Only", serviceType: ["Plated Meal"], logo: "https://randomuser.me/api/portraits/women/31.jpg" },
  { id: 3, name: "Taste of India Caterers", location: "Patiala", specialty: ["North Indian", "Chinese"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/41.jpg" },
  { id: 4, name: "Punjabi Platter", location: "Patiala", specialty: ["Punjabi", "Street Food"], rating: 4.2, priceRange: "Budget", type: "Veg Only", serviceType: ["Live Counters", "Snacks Only"], logo: "https://randomuser.me/api/portraits/women/11.jpg" },
  { id: 5, name: "Global Bites", location: "Patiala", specialty: ["Continental", "Mexican"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Buffet", "Full Service"], logo: "https://randomuser.me/api/portraits/men/12.jpg" },
  { id: 6, name: "The Healthy Spoon", location: "Patiala", specialty: ["Healthy", "Vegan"], rating: 4.4, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Plated Meal"], logo: "https://randomuser.me/api/portraits/women/22.jpg" },
  // Amritsar
  { id: 7, name: "Amritsari Zaika", location: "Amritsar", specialty: ["Punjabi", "Street Food"], rating: 4.7, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/13.jpg" },
  { id: 8, name: "Gourmet Greens", location: "Amritsar", specialty: ["Vegan", "Italian"], rating: 4.6, priceRange: "Premium", type: "Veg Only", serviceType: ["Plated Meal"], logo: "https://randomuser.me/api/portraits/women/33.jpg" },
  { id: 9, name: "Swaad Catering", location: "Amritsar", specialty: ["Chinese", "South Indian"], rating: 4.3, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: 10, name: "Flavoursome Foods", location: "Amritsar", specialty: ["Punjabi", "Continental"], rating: 4.1, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 11, name: "Classic Catering Co.", location: "Amritsar", specialty: ["North Indian", "Bengali"], rating: 4.5, priceRange: "Premium", type: "Both", serviceType: ["Full Service"], logo: "https://randomuser.me/api/portraits/men/24.jpg" },
  { id: 12, name: "Jain Caterers", location: "Amritsar", specialty: ["Jain Food", "Indian"], rating: 4.9, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/women/55.jpg" },
  // Delhi
  { id: 13, name: "Urban Bites", location: "Delhi", specialty: ["Continental", "Mexican"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Buffet", "Full Service"], logo: "https://randomuser.me/api/portraits/men/15.jpg" },
  { id: 14, name: "Delhi Delight Caterers", location: "Delhi", specialty: ["North Indian", "Chinese"], rating: 4.6, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "https://randomuser.me/api/portraits/women/66.jpg" },
  { id: 15, name: "Veggie Express", location: "Delhi", specialty: ["Vegan", "Healthy"], rating: 4.4, priceRange: "Budget", type: "Veg Only", serviceType: ["Plated Meal"], logo: "https://randomuser.me/api/portraits/men/36.jpg" },
  { id: 16, name: "Elegant Events", location: "Delhi", specialty: ["South Indian", "Street Food"], rating: 4.2, priceRange: "Mid-range", type: "Both", serviceType: ["Live Counters", "Buffet"], logo: "https://randomuser.me/api/portraits/women/17.jpg" },
  { id: 17, name: "Grand Occasions", location: "Delhi", specialty: ["Punjabi", "Italian"], rating: 4.9, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "https://randomuser.me/api/portraits/men/19.jpg" },
  { id: 18, name: "Food Affair", location: "Delhi", specialty: ["Chinese", "Snacks"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Snacks Only"], logo: "https://randomuser.me/api/portraits/women/77.jpg" },
  // Ludhiana
  { id: 19, name: "Ludhiana CaterPro", location: "Ludhiana", specialty: ["Continental", "Tandoori"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 20, name: "Celebrations Caterers", location: "Ludhiana", specialty: ["Multi-cuisine", "Indian"], rating: 4.7, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "https://randomuser.me/api/portraits/women/38.jpg" },
  { id: 21, name: "Taste Factory", location: "Ludhiana", specialty: ["Chinese", "Mexican"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Live Counters", "Buffet"], logo: "https://randomuser.me/api/portraits/men/29.jpg" },
  { id: 22, name: "Sweet Savor", location: "Ludhiana", specialty: ["Sweets", "Bengali"], rating: 4.6, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/women/48.jpg" },
  { id: 23, name: "Spice Hub", location: "Ludhiana", specialty: ["North Indian", "Street Food"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Live Counters"], logo: "https://randomuser.me/api/portraits/men/37.jpg" },
  { id: 24, name: "Green Bowl", location: "Ludhiana", specialty: ["Healthy", "Vegan"], rating: 4.5, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Plated Meal"], logo: "https://randomuser.me/api/portraits/women/49.jpg" },
  // Sonipat
  { id: 25, name: "Sonipat Royal Foods", location: "Sonipat", specialty: ["Indian", "Sweets"], rating: 4.3, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "https://randomuser.me/api/portraits/men/51.jpg" },
  { id: 26, name: "Urban Tadka", location: "Sonipat", specialty: ["Street Food", "North Indian"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Live Counters"], logo: "https://randomuser.me/api/portraits/women/52.jpg" },
  { id: 27, name: "Green Leaf Caterers", location: "Sonipat", specialty: ["Healthy Food", "Vegan"], rating: 4.6, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/53.jpg" },
  { id: 28, name: "Fiesta Foods", location: "Sonipat", specialty: ["Italian", "Snacks"], rating: 4.5, priceRange: "Budget", type: "Both", serviceType: ["Snacks Only"], logo: "https://randomuser.me/api/portraits/women/54.jpg" },
  { id: 29, name: "The Banquet House", location: "Sonipat", specialty: ["Multi-cuisine", "Continental"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Full Service"], logo: "https://randomuser.me/api/portraits/men/55.jpg" },
  { id: 30, name: "Swaad Caterers", location: "Sonipat", specialty: ["Indian", "Chinese"], rating: 4.3, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "https://randomuser.me/api/portraits/women/56.jpg" },
  // Chandigarh
  { id: 31, name: "Chandigarh Chaska", location: "Chandigarh", specialty: ["Punjabi", "Street Food"], rating: 4.5, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/57.jpg" },
  { id: 32, name: "Veggie Delight", location: "Chandigarh", specialty: ["Vegan", "Healthy"], rating: 4.7, priceRange: "Premium", type: "Veg Only", serviceType: ["Plated Meal"], logo: "https://randomuser.me/api/portraits/women/58.jpg" },
  { id: 33, name: "Spice Route", location: "Chandigarh", specialty: ["South Indian", "Mexican"], rating: 4.6, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/59.jpg" },
  { id: 34, name: "Taste of Bengal", location: "Chandigarh", specialty: ["Bengali", "Sweets"], rating: 4.8, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/women/60.jpg" },
  { id: 35, name: "Flavour Junction", location: "Chandigarh", specialty: ["Continental", "Italian"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Live Counters"], logo: "https://randomuser.me/api/portraits/men/61.jpg" },
  { id: 36, name: "Nawaabi Kitchen", location: "Chandigarh", specialty: ["North Indian", "Tandoori"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/women/62.jpg" },
  // Noida
  { id: 37, name: "Noida Food Factory", location: "Noida", specialty: ["Chinese", "Continental"], rating: 4.7, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/63.jpg" },
  { id: 38, name: "Noida Gourmet", location: "Noida", specialty: ["Italian", "Snacks"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Snacks Only"], logo: "https://randomuser.me/api/portraits/women/64.jpg" },
  { id: 39, name: "Savour & Serve", location: "Noida", specialty: ["South Indian", "Street Food"], rating: 4.6, priceRange: "Premium", type: "Both", serviceType: ["Live Counters", "Buffet"], logo: "https://randomuser.me/api/portraits/men/65.jpg" },
  { id: 40, name: "Royal Banquet Noida", location: "Noida", specialty: ["North Indian", "Punjabi"], rating: 4.9, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "https://randomuser.me/api/portraits/women/66.jpg" },
  { id: 41, name: "Healthy Indulgence", location: "Noida", specialty: ["Healthy", "Vegan"], rating: 4.5, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Plated Meal"], logo: "https://randomuser.me/api/portraits/men/67.jpg" },
  { id: 42, name: "Taste of South", location: "Noida", specialty: ["South Indian"], rating: 4.3, priceRange: "Budget", type: "Veg Only", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/women/68.jpg" },
  // Gurgaon
  { id: 43, name: "Gurgaon Feast", location: "Gurgaon", specialty: ["Punjabi", "Continental"], rating: 4.7, priceRange: "Premium", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/69.jpg" },
  { id: 44, name: "Gourmet Club", location: "Gurgaon", specialty: ["Italian", "Snacks"], rating: 4.6, priceRange: "Mid-range", type: "Both", serviceType: ["Snacks Only"], logo: "https://randomuser.me/api/portraits/women/70.jpg" },
  { id: 45, name: "Street Flavours", location: "Gurgaon", specialty: ["Street Food", "Chinese"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Live Counters"], logo: "https://randomuser.me/api/portraits/men/71.jpg" },
  { id: 46, name: "Royal Veg", location: "Gurgaon", specialty: ["Vegan", "Healthy"], rating: 4.9, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/women/72.jpg" },
  { id: 47, name: "Spicy Spoon", location: "Gurgaon", specialty: ["North Indian", "Mexican"], rating: 4.5, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/73.jpg" },
  { id: 48, name: "Gurgaon Grand Caterers", location: "Gurgaon", specialty: ["Continental", "Tandoori"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Full Service"], logo: "https://randomuser.me/api/portraits/women/74.jpg" },
  // Delhi (more)
  { id: 49, name: "Delhi Dhaba", location: "Delhi", specialty: ["North Indian", "Street Food"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Buffet", "Live Counters"], logo: "https://randomuser.me/api/portraits/men/75.jpg" },
  { id: 50, name: "Platter Palace", location: "Delhi", specialty: ["Continental", "Mexican"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "https://randomuser.me/api/portraits/women/76.jpg" },
  { id: 51, name: "Tandoori Treats", location: "Delhi", specialty: ["Tandoori", "Indian"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "https://randomuser.me/api/portraits/men/77.jpg" },
  { id: 52, name: "Veggie Table", location: "Delhi", specialty: ["Vegan", "Healthy"], rating: 4.3, priceRange: "Budget", type: "Veg Only", serviceType: ["Plated Meal"], logo: "https://randomuser.me/api/portraits/women/78.jpg" }
];
export default catererData;
