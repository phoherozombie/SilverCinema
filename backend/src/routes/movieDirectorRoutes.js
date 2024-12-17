const express = require('express');
const router = express.Router();
const { getAllMovieDirectors, createMovieDirector, updateMovieDirector, deleteMovieDirector } = require('../controllers/movieDirectorController');

router.get('/', getAllMovieDirectors);
router.post('/', createMovieDirector);
router.put('/:id', updateMovieDirector);
router.delete('/:id', deleteMovieDirector);

module.exports = router;
