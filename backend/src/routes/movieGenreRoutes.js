const express = require('express');
const router = express.Router();
const movieGenreController = require('../controllers/movieGenreController');

router.get('/', movieGenreController.getAllMovieGenres);
router.post('/', movieGenreController.createMovieGenre);
router.put('/:id', movieGenreController.updateMovieGenre);
router.delete('/:id', movieGenreController.deleteMovieGenre);

module.exports = router;
