const express = require('express');
const router = express.Router();
const { movieUpload } = require('../middleware/uploadMiddleware');
const movieController = require('../controllers/movieController');

// Routes
router.get('/', movieController.getAllMovies);
router.post('/', movieUpload.single('image'), movieController.createMovie);
router.put('/:id', movieUpload.single('image'), movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
