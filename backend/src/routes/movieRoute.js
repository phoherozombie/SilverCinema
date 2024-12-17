const express = require('express');
const router = express.Router();
const { getAllMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');

router.get('/', getAllMovies);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
