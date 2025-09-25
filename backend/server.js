require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:4200', // Allow Angular frontend
  credentials: true
}));
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/notes', require('./routes/noteRoutes'));

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Notes API is running!' });
});

// Handle 404 errors
app.use('*', (req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ success: false, error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});