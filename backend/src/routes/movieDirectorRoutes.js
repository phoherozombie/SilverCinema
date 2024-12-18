const express = require('express');
const router = express.Router();
const movieDirectorController = require('../controllers/movieDirectorController');

router.get('/', movieDirectorController.getAllMovieDirectors);
router.post('/', movieDirectorController.createMovieDirector);
router.put('/:id', movieDirectorController.updateMovieDirector);
router.delete('/:id', movieDirectorController.deleteMovieDirector);

module.exports = router;
