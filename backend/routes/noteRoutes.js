const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// CRUD routes for notes
router.post('/', noteController.createNote);       // Create new note
router.get('/', noteController.getAllNotes);       // Get all notes
router.get('/:id', noteController.getNoteById);    // Get single note
router.put('/:id', noteController.updateNote);     // Update note
router.delete('/:id', noteController.deleteNote);  // Delete note

module.exports = router;