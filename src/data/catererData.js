const catererData = [
  // Patiala
  { id: 1, name: "Punjab Feast", location: "Patiala", specialty: ["North Indian", "Punjabi"], rating: 4.7, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Live Counters"], logo: "/images/1000_F_1207504339_KcKA7hLmz3dxKCHkeGy7uLcQFV5pQCiv.jpg", description: "Savor the finest flavors with our bespoke catering, designed for every event. From traditional feasts to innovative menus, we ensure every dish is fresh, beautifully presented, and full of taste. Our skilled team delivers seamless service, making your celebration memorable and worry-free, no matter the occasion or size.", services: [
    "Custom event menus tailored to your theme and preferences",
    "Live cooking stations and interactive food counters",
    "Dedicated team for on-site coordination and setup",
    "Fresh, locally-sourced ingredients for every dish",
    "Complete event clean-up and guest support"
  ] },
  { id: 2, name: "Royal Rasoi", location: "Patiala", specialty: ["South Indian"], rating: 4.5, priceRange: "Premium", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/c8a7c3a22a8f1e23c11bfe498146f2d6.jpg", description: "Experience culinary excellence with our expert chefs, offering diverse cuisines and custom menu options. We focus on freshness, presentation, and guest satisfaction. Whether it’s a corporate gathering or a family function, our attention to detail and passion for food ensure your event is a standout success.", services: [
    "Authentic North Indian and Punjabi cuisine experts",
    "Buffet and plated meal services for any guest count",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "Elegant presentation and modern buffet decor",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 3, name: "Taste of India Caterers", location: "Patiala", specialty: ["North Indian", "Chinese"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/f4bfb3c12ed421c1d59b75479868f956.jpg", description: "Delight your guests with authentic regional flavors and modern fusion dishes. Our professional catering team is committed to quality, hygiene, and prompt service. We tailor every event to your unique preferences, ensuring an unforgettable dining experience that everyone will remember.", services: [
    "Multi-cuisine menus: Indian, Chinese, Continental, and more",
    "On-demand, last-minute catering available",
    "Eco-friendly disposables and sustainable practices",
    "Menu tastings and free event consultations",
    "Impeccable hygiene and food safety protocols"
  ] },
  { id: 4, name: "Punjabi Platter", location: "Patiala", specialty: ["Punjabi", "Street Food"], rating: 4.2, priceRange: "Budget", type: "Veg Only", serviceType: ["Live Counters", "Snacks Only"], logo: "/images/c3f3d32f3ecb48806799d4ad359c873d.jpg", description: "Celebrate your special moments with our premium catering services. We specialize in mouth-watering menus, beautiful setups, and exceptional service. From intimate gatherings to grand affairs, we bring creativity, quality ingredients, and professional hospitality to every table.", services: [
    "Signature wedding and milestone event packages",
    "Artistic dessert tables and premium sweet counters",
    "Experienced chefs and uniformed service staff",
    "Themed table settings and decor customization",
    "Transparent pricing with no hidden costs"
  ] },
  { id: 5, name: "Global Bites", location: "Patiala", specialty: ["Continental", "Mexican"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Buffet", "Full Service"], logo: "/images/7853f3f63abf925a72a6e3effee6f9c1.jpg", description: "Our catering brings together tradition and innovation. Enjoy handpicked ingredients, skilled preparation, and menus crafted for your occasion. We provide reliable service, transparent pricing, and a commitment to exceeding your expectations, making your event stress-free and delicious.", services: [
    "Fusion food specialists blending tradition and innovation",
    "Open-bar and beverage catering options",
    "Dietary accommodations (gluten-free, keto, etc.)",
    "Chef-led menu planning for unique experiences",
    "Seamless vendor coordination for stress-free events"
  ] },
  { id: 6, name: "The Healthy Spoon", location: "Patiala", specialty: ["Healthy", "Vegan"], rating: 4.4, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/f5ddf92423c4dd2070b3bc0c2dc4f438.jpg", description: "Trust us for your next event and taste the difference. Our team designs menus around your preferences, offers live counters, and ensures each dish is prepared with care. We pride ourselves on reliability, flavor, and creating memorable experiences for every guest.", services: [
    "Authentic Delhi street food and Mughlai delicacies",
    "Live tandoor and grill stations for interactive dining",
    "Flexible catering for indoor and outdoor venues",
    "Experienced in both small gatherings and grand functions",
    "Continuous staff supervision for quality assurance"
  ] },
  // Amritsar
  { id: 7, name: "Amritsari Zaika", location: "Amritsar", specialty: ["Punjabi", "Street Food"], rating: 4.7, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/Lobia __ Chawli 🫶🏻.jpg", description: "From weddings to corporate lunches, our catering blends culinary artistry with professional execution. We offer customizable packages, prompt delivery, and on-site support. Let us help you create a lasting impression with flavorful food and attentive service.", services: [
    "Customized menu options for every event",
    "On-site setup and coordination for stress-free events",
    "Fresh, locally-sourced ingredients for quality",
    "Professional chefs and uniformed service staff",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 8, name: "Gourmet Greens", location: "Amritsar", specialty: ["Vegan", "Italian"], rating: 4.6, priceRange: "Premium", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/bef94ee037970ea1ab8a2651bf91becc.jpg", description: "Relish authentic tastes and innovative twists in every bite. Our chefs curate diverse options to suit all dietary needs, including vegetarian, vegan, and non-vegetarian menus. We focus on quality, hygiene, and guest satisfaction for events of all sizes.", services: [
    "Diverse cuisine options for all dietary preferences",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 9, name: "Swaad Catering", location: "Amritsar", specialty: ["Chinese", "South Indian"], rating: 4.3, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "/images/1000_F_1104503922_Kse0aCcoqbC7XnukpXIRWNouMNKuEcsu.jpg", description: "Choose us for seamless catering, where every menu is crafted with fresh ingredients and expert flair. We specialize in buffet, plated meals, and live food stations, ensuring an engaging and delightful experience for your guests from start to finish.", services: [
    "Multi-cuisine buffet and plated meal options",
    "Live food stations and interactive counters",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 10, name: "Flavoursome Foods", location: "Amritsar", specialty: ["Punjabi", "Continental"], rating: 4.1, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/456be04373a74c0c8d6565e8c9621bd6.jpg", description: "Bring joy to your celebration with our catering. Our experienced staff handles everything—from menu planning to setup and cleanup. With a wide range of cuisines and flexible packages, we guarantee hassle-free and delicious events every time.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 11, name: "Classic Catering Co.", location: "Amritsar", specialty: ["North Indian", "Bengali"], rating: 4.5, priceRange: "Premium", type: "Both", serviceType: ["Full Service"], logo: "/images/1000_F_222942736_T3ZWWUL5rp3lwveY3iZuGOlQ2VojmYp6.jpg", description: "Satisfy your guests with flavors from across the globe. Our professional team ensures every event is tailored to your needs, with attention to taste, presentation, and timely service. We pride ourselves on making every occasion truly special.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 12, name: "Jain Caterers", location: "Amritsar", specialty: ["Jain Food", "Indian"], rating: 4.9, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/1000_F_1082138403_E28HRSWX0tPCUfpdSyUepushzcHBHEo1.jpg", description: "Celebrate with the best! Our catering team crafts unforgettable experiences through flavorful dishes, artistic presentation, and seamless coordination. Whether you want traditional favorites or international cuisine, we’re ready to exceed your expectations.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  // Delhi
  { id: 13, name: "Urban Bites", location: "Delhi", specialty: ["Continental", "Mexican"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Buffet", "Full Service"], logo: "/images/93ff6eeec67c99da80bae24fddd6f9cb.jpg", description: "Experience the best of international cuisine with our premium catering services. From lavish buffets to plated meals, we ensure every dish is prepared with the utmost care and attention to detail. Our team is dedicated to delivering exceptional quality and service.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 14, name: "Delhi Delight Caterers", location: "Delhi", specialty: ["North Indian", "Chinese"], rating: 4.6, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "/images/240_F_110987594_bFXPykapTjv492JwFxuDrLRIFWaRLJRm 2.jpg", description: "Elevate your event with our exquisite catering. We offer a wide variety of cuisines, from traditional North Indian to modern Chinese, ensuring a diverse and satisfying dining experience. Our attention to detail and commitment to quality make every event memorable.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 15, name: "Veggie Express", location: "Delhi", specialty: ["Vegan", "Healthy"], rating: 4.4, priceRange: "Budget", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/240_F_110987594_bFXPykapTjv492JwFxuDrLRIFWaRLJRm.jpg", description: "Experience the joy of vegan and healthy cuisine with our catering. We offer a variety of plant-based options, carefully crafted to provide both taste and nutrition. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 16, name: "Elegant Events", location: "Delhi", specialty: ["South Indian", "Street Food"], rating: 4.2, priceRange: "Mid-range", type: "Both", serviceType: ["Live Counters", "Buffet"], logo: "/images/240_F_158401524_ta6F02GGLTAK4cqqzeg4qnHpsi4d5PAo.jpg", description: "Bring the flavors of South India to your event with our catering. We offer a wide range of authentic dishes, from traditional dosas to modern street food, ensuring a vibrant and flavorful experience. Our attention to detail and commitment to quality make every event special.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 17, name: "Grand Occasions", location: "Delhi", specialty: ["Punjabi", "Italian"], rating: 4.9, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "/images/240_F_1111286469_DNkTyIOdmDHDss5oEciZ0Geh40OEQxjA.jpg", description: "Experience the best of Punjabi and Italian cuisine with our premium catering. From traditional biryani to authentic Italian pasta, we ensure every dish is prepared with passion and attention to detail. Our commitment to quality and service ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 18, name: "Food Affair", location: "Delhi", specialty: ["Chinese", "Snacks"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Snacks Only"], logo: "/images/240_F_1078439878_mYc0awzWXMFv9MAimU32wST6dCJaS4Aj.jpg", description: "Satisfy your cravings with our diverse catering options. From Chinese dim sums to delicious snacks, we offer a wide variety of cuisines to suit any palate. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  // Ludhiana
  { id: 19, name: "Ludhiana CaterPro", location: "Ludhiana", specialty: ["Continental", "Tandoori"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 18.png", description: "Experience the best of Continental and Tandoori cuisine with our catering. From fresh salads to succulent tandoori dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 20, name: "Celebrations Caterers", location: "Ludhiana", specialty: ["Multi-cuisine", "Indian"], rating: 4.7, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "/images/Artboard 17.png", description: "Bring the flavors of India to your event with our catering. We offer a wide range of authentic dishes, from traditional biryani to modern street food, ensuring a vibrant and flavorful experience. Our attention to detail and commitment to quality make every event special.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 21, name: "Taste Factory", location: "Ludhiana", specialty: ["Chinese", "Mexican"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Live Counters", "Buffet"], logo: "/images/Artboard 19.png", description: "Experience the best of Chinese and Mexican cuisine with our catering. From authentic Chinese dumplings to delicious Mexican tacos, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 22, name: "Sweet Savor", location: "Ludhiana", specialty: ["Sweets", "Bengali"], rating: 4.6, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 16.png", description: "Experience the sweetness of Bengali cuisine with our catering. From traditional sweets to delicious bengali dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 23, name: "Spice Hub", location: "Ludhiana", specialty: ["North Indian", "Street Food"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Live Counters"], logo: "/images/Artboard 15.png", description: "Experience the best of North Indian and Street Food cuisine with our catering. From traditional biryani to delicious street food, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 24, name: "Green Bowl", location: "Ludhiana", specialty: ["Healthy", "Vegan"], rating: 4.5, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/Artboard 13.png", description: "Experience the health and wellness of vegan cuisine with our catering. From fresh salads to nutritious meals, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  // Sonipat
  { id: 25, name: "Sonipat Royal Foods", location: "Sonipat", specialty: ["Indian", "Sweets"], rating: 4.3, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "/images/Artboard 14.png", description: "Experience the best of Indian and Sweets cuisine with our catering. From traditional biryani to delicious sweets, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 26, name: "Urban Tadka", location: "Sonipat", specialty: ["Street Food", "North Indian"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Live Counters"], logo: "/images/Artboard 12.png", description: "Experience the best of Street Food and North Indian cuisine with our catering. From delicious street food to traditional biryani, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 27, name: "Green Leaf Caterers", location: "Sonipat", specialty: ["Healthy Food", "Vegan"], rating: 4.6, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 10.png", description: "Experience the health and wellness of vegan cuisine with our catering. From fresh salads to nutritious meals, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 28, name: "Fiesta Foods", location: "Sonipat", specialty: ["Italian", "Snacks"], rating: 4.5, priceRange: "Budget", type: "Both", serviceType: ["Snacks Only"], logo: "/images/Artboard 8.png", description: "Experience the best of Italian and Snacks cuisine with our catering. From delicious Italian pasta to delicious snacks, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 29, name: "The Banquet House", location: "Sonipat", specialty: ["Multi-cuisine", "Continental"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Full Service"], logo: "/images/Artboard 9.png", description: "Experience the best of Multi-cuisine and Continental cuisine with our catering. From traditional biryani to delicious Continental dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 30, name: "Swaad Caterers", location: "Sonipat", specialty: ["Indian", "Chinese"], rating: 4.3, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet", "Snacks Only"], logo: "/images/Artboard 7.png", description: "Experience the best of Indian and Chinese cuisine with our catering. From traditional biryani to delicious Chinese dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  // Chandigarh
  { id: 31, name: "Chandigarh Chaska", location: "Chandigarh", specialty: ["Punjabi", "Street Food"], rating: 4.5, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/16.png", description: "Experience the best of Punjabi and Street Food cuisine with our catering. From traditional biryani to delicious street food, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 32, name: "Veggie Delight", location: "Chandigarh", specialty: ["Vegan", "Healthy"], rating: 4.7, priceRange: "Premium", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/Artboard 4.png", description: "Experience the health and wellness of vegan cuisine with our catering. From fresh salads to nutritious meals, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 33, name: "Spice Route", location: "Chandigarh", specialty: ["South Indian", "Mexican"], rating: 4.6, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 5.png", description: "Experience the best of South Indian and Mexican cuisine with our catering. From traditional dosas to delicious Mexican tacos, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 34, name: "Taste of Bengal", location: "Chandigarh", specialty: ["Bengali", "Sweets"], rating: 4.8, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 6.png", description: "Experience the sweetness of Bengali cuisine with our catering. From traditional sweets to delicious bengali dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 35, name: "Flavour Junction", location: "Chandigarh", specialty: ["Continental", "Italian"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Live Counters"], logo: "/images/Artboard 2.png", description: "Experience the best of Continental and Italian cuisine with our catering. From traditional biryani to delicious Continental dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 36, name: "Nawaabi Kitchen", location: "Chandigarh", specialty: ["North Indian", "Tandoori"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 1.png", description: "Experience the best of North Indian and Tandoori cuisine with our catering. From traditional biryani to delicious tandoori dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  // Noida
  { id: 37, name: "Noida Food Factory", location: "Noida", specialty: ["Chinese", "Continental"], rating: 4.7, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/18.png", description: "Experience the best of Chinese and Continental cuisine with our catering. From traditional biryani to delicious Continental dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 38, name: "Noida Gourmet", location: "Noida", specialty: ["Italian", "Snacks"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Snacks Only"], logo: "/images/19.png", description: "Experience the best of Italian and Snacks cuisine with our catering. From delicious Italian pasta to delicious snacks, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 39, name: "Savour & Serve", location: "Noida", specialty: ["South Indian", "Street Food"], rating: 4.6, priceRange: "Premium", type: "Both", serviceType: ["Live Counters", "Buffet"], logo: "/images/17.png", description: "Experience the best of South Indian and Street Food cuisine with our catering. From traditional biryani to delicious street food, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 40, name: "Royal Banquet Noida", location: "Noida", specialty: ["North Indian", "Punjabi"], rating: 4.9, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "/images/Artboard 3.png", description: "Experience the best of North Indian and Punjabi cuisine with our catering. From traditional biryani to delicious Punjabi dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 41, name: "Healthy Indulgence", location: "Noida", specialty: ["Healthy", "Vegan"], rating: 4.5, priceRange: "Mid-range", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/Artboard 14.png", description: "Experience the health and wellness of vegan cuisine with our catering. From fresh salads to nutritious meals, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 42, name: "Taste of South", location: "Noida", specialty: ["South Indian"], rating: 4.3, priceRange: "Budget", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 12.png", description: "Experience the best of South Indian cuisine with our catering. From traditional dosas to delicious biryani, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  // Gurgaon
  { id: 43, name: "Gurgaon Feast", location: "Gurgaon", specialty: ["Punjabi", "Continental"], rating: 4.7, priceRange: "Premium", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 10.png", description: "Experience the best of Punjabi and Continental cuisine with our catering. From traditional biryani to delicious Continental dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 44, name: "Gourmet Club", location: "Gurgaon", specialty: ["Italian", "Snacks"], rating: 4.6, priceRange: "Mid-range", type: "Both", serviceType: ["Snacks Only"], logo: "/images/Artboard 8.png", description: "Experience the best of Italian and Snacks cuisine with our catering. From delicious Italian pasta to delicious snacks, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 45, name: "Street Flavours", location: "Gurgaon", specialty: ["Street Food", "Chinese"], rating: 4.3, priceRange: "Budget", type: "Both", serviceType: ["Live Counters"], logo: "/images/Artboard 9.png", description: "Experience the best of Street Food and Chinese cuisine with our catering. From delicious street food to delicious Chinese dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 46, name: "Royal Veg", location: "Gurgaon", specialty: ["Vegan", "Healthy"], rating: 4.9, priceRange: "Premium", type: "Veg Only", serviceType: ["Buffet"], logo: "/images/Artboard 7.png", description: "Experience the health and wellness of vegan cuisine with our catering. From fresh salads to nutritious meals, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 47, name: "Spicy Spoon", location: "Gurgaon", specialty: ["North Indian", "Mexican"], rating: 4.5, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/16.png", description: "Experience the best of North Indian and Mexican cuisine with our catering. From traditional biryani to delicious Mexican tacos, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 48, name: "Gurgaon Grand Caterers", location: "Gurgaon", specialty: ["Continental", "Tandoori"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Full Service"], logo: "/images/Artboard 5.png", description: "Experience the best of Continental and Tandoori cuisine with our catering. From traditional biryani to delicious Continental dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  // Delhi (more)
  { id: 49, name: "Delhi Dhaba", location: "Delhi", specialty: ["North Indian", "Street Food"], rating: 4.2, priceRange: "Budget", type: "Both", serviceType: ["Buffet", "Live Counters"], logo: "/images/Artboard 6.png", description: "Experience the best of North Indian and Street Food cuisine with our catering. From traditional biryani to delicious street food, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 50, name: "Platter Palace", location: "Delhi", specialty: ["Continental", "Mexican"], rating: 4.8, priceRange: "Premium", type: "Both", serviceType: ["Full Service", "Buffet"], logo: "/images/Artboard 2.png", description: "Experience the best of Continental and Mexican cuisine with our catering. From traditional biryani to delicious Continental dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 51, name: "Tandoori Treats", location: "Delhi", specialty: ["Tandoori", "Indian"], rating: 4.4, priceRange: "Mid-range", type: "Both", serviceType: ["Buffet"], logo: "/images/Artboard 1.png", description: "Experience the best of Tandoori and Indian cuisine with our catering. From traditional biryani to delicious Tandoori dishes, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] },
  { id: 52, name: "Veggie Table", location: "Delhi", specialty: ["Vegan", "Healthy"], rating: 4.3, priceRange: "Budget", type: "Veg Only", serviceType: ["Plated Meal"], logo: "/images/Artboard 3.png", description: "Experience the health and wellness of vegan cuisine with our catering. From fresh salads to nutritious meals, we ensure every dish is prepared with care and attention to detail. Our commitment to quality and freshness ensures a memorable dining experience.", services: [
    "Multi-cuisine buffet and plated meal options",
    "On-site chef consultation and menu planning",
    "Elegant presentation and modern buffet decor",
    "Flexible vegetarian, vegan, and non-veg menu options",
    "End-to-end logistics and timely delivery"
  ] }
];
export default catererData;
