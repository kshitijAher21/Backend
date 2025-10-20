// my-project-api/init/index.js

const path = require('path'); // <-- 1. ADD THIS LINE
// 2. CHANGE THIS LINE to use the new path:
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mongoose = require('mongoose');
const { data } = require('./data.js');
const Product = require('../models/Product.js'); // Import your Product model

// Get the MONGO_URI from your .env file
const dbUrl = process.env.MONGO_URI;

// Function to connect to the database
async function main() {
  try {
    await mongoose.connect(dbUrl); // This will no longer be undefined
    console.log('MongoDB connected for seeding!');

    // Initialize the database
    await initDB();

    // Close the connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed.');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

// Function to delete old data and insert new data
const initDB = async () => {
  try {
    // Clear out the existing products
    await Product.deleteMany({});
    console.log('Cleared existing products.');

    // Insert the new sample data
    await Product.insertMany(data);
    console.log('Successfully inserted 30 new products!');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};

// Run the main function
main();