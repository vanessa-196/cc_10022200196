const mongoose = require("mongoose");
require("dotenv").config(); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("Connected to database successfully.");
  } catch (err) {
    console.error("Failed to connect to database...", err);
    process.exit(1); 
  }
};

module.exports = connectDB;