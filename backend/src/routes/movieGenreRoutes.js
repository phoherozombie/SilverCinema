const express = require('express');
const router = express.Router();
const { getAllMovieGenres, createMovieGenre, updateMovieGenre, deleteMovieGenre } = require('../controllers/movieGenreController');

router.get('/', getAllMovieGenres);
router.post('/', createMovieGenre);
router.put('/:id', updateMovieGenre);
router.delete('/:id', deleteMovieGenre);

module.exports = router;
