const express = require('express');
const router = express.Router();
const { getAllSeats, createSeat, updateSeat, deleteSeat } = require('../controllers/seatController');

router.get('/', getAllSeats);
router.post('/', createSeat);
router.put('/:id', updateSeat);
router.delete('/:id', deleteSeat);

module.exports = router;
