const mongoose = require('mongoose');

// Define Note schema with validation
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'], // Validation message
    trim: true, // Remove whitespace
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  content: {
    type: String,
    trim: true,
    maxlength: [1000, 'Content cannot exceed 1000 characters']
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt
});

// Create and export Note model
module.exports = mongoose.model('Note', noteSchema);