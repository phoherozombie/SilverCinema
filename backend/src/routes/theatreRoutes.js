const express = require('express');
const router = express.Router();
const { getAllTheatres, createTheatre, updateTheatre, deleteTheatre } = require('../controllers/theatreController');

router.get('/', getAllTheatres);
router.post('/', createTheatre);
router.put('/:id', updateTheatre);
router.delete('/:id', deleteTheatre);

module.exports = router;
