// my-project-api/init/data.js

const sampleProducts = [
  // --- Women's Clothing (15) ---
  {
    name: "Floral Print Midi Dress",
    description: "A lightweight, breezy midi dress with a side slit.",
    price: 78.0,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80",
    category: "Women",
  },
  
  {
    name: "High-Waist Mom Jeans",
    description: "Flattering high-waist jeans in a vintage blue wash.",
    price: 75.0,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
    category: "Women",
  },
  {
    name: "Cashmere Blend Sweater",
    description: "A cozy, oversized knit sweater for chilly days.",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=400&q=80",
    category: "Women",
  },
  {
    name: "Silk Slip Dress",
    description: "An elegant 100% silk slip dress for evening wear.",
    price: 110.0,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    category: "Women",
  },
  {
    name: "Plaid Wool Skirt",
    description: "A classic A-line plaid skirt made from a warm wool blend.",
    price: 55.0,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=400&q=80",
    category: "Women",
  },
 
  {
    name: "Cozy Fleece Hoodie",
    description: "A heavyweight, fleece-lined hoodie for ultimate comfort.",
    price: 60.0,
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=400&q=80",
    category: "Women",
  },
  
 
  {
    name: "White T-Shirt",
    description: "A premium, soft-touch 100% cotton crewneck tee.",
    price: 25.0,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80",
    category: "Women",
  },
  
  // --- Men's Clothing (15) ---
  {
    name: "Crisp White Shirt",
    description: "A slim-fit white cotton dress shirt for any occasion.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80",
    category: "Men",
  },
  
  {
    name: "Vintage Graphic Tee",
    description: "A soft cotton t-shirt with a retro front graphic.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    category: "Men",
  },
  
  
  {
    name: "Henley Shirt", // <-- TYPO FIXED
    description: "A comfortable long-sleeve henley with a 3-button placket.",
    price: 35.0,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=400&q=80",
    category: "Men",
  },
  {
    name: "Denim Jeans",
    description: "Straight-leg denim jeans in a classic dark wash.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=400&q=80",
    category: "Men",
  },
 
  {
    name: "Bomber Jacket",
    description: "A lightweight, stylish bomber jacket for all seasons.",
    price: 95.0,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80",
    category: "Men",
  },
 
];

module.exports = { data: sampleProducts };