const Note = require('../models/Note');
const mongoose = require('mongoose');

// Helper function to validate MongoDB ID
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    
    // Validate required fields
    if (!title) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title is required' 
      });
    }

    const note = new Note({ title, content });
    const savedNote = await note.save();
    
    res.status(201).json({ 
      success: true, 
      data: savedNote 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Newest first
    
    res.json({ 
      success: true, 
      data: notes 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Get single note by ID
exports.getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID format
    if (!isValidId(id)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid note ID' 
      });
    }

    const note = await Note.findById(id);
    
    if (!note) {
      return res.status(404).json({ 
        success: false, 
        error: 'Note not found' 
      });
    }
    
    res.json({ 
      success: true, 
      data: note 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    
    // Validate ID format
    if (!isValidId(id)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid note ID' 
      });
    }

    // Validate required fields
    if (!title) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title is required' 
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id, 
      { title, content }, 
      { new: true, runValidators: true } // Return updated document and run validation
    );
    
    if (!updatedNote) {
      return res.status(404).json({ 
        success: false, 
        error: 'Note not found' 
      });
    }
    
    res.json({ 
      success: true, 
      data: updatedNote 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID format
    if (!isValidId(id)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid note ID' 
      });
    }

    const deletedNote = await Note.findByIdAndDelete(id);
    
    if (!deletedNote) {
      return res.status(404).json({ 
        success: false, 
        error: 'Note not found' 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Note deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};