// my-project-api/routes/products.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Import your Product model

// ROUTE: GET /api/products
// Gets all products from the database
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products); // Just send the products
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;