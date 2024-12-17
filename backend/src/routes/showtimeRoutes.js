const express = require('express');
const router = express.Router();
const { getAllShowtimes, createShowtime, updateShowtime, deleteShowtime } = require('../controllers/showtimeController');

router.get('/', getAllShowtimes);
router.post('/', createShowtime);
router.put('/:id', updateShowtime);
router.delete('/:id', deleteShowtime);

module.exports = router;
