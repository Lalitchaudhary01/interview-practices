const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");

const connectDB = require("./config/db");

// Middleware
app.use(express.json());
app.use("/api/users", userRoutes);
// Connect to MongoDB
connectDB();
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for testing purposes
