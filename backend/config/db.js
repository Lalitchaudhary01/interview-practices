const mongoose = require("mongoose");
const dbURI = "mongodb://localhost:27017/mydatabase"; // Replace with your MongoDB URI

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};
