const express = require('express');
const router = express.Router();
const { getAllHallwiseSeats, createHallwiseSeat, updateHallwiseSeat, deleteHallwiseSeat } = require('../controllers/hallwiseSeatController');

router.get('/', getAllHallwiseSeats);
router.post('/', createHallwiseSeat);
router.put('/:id', updateHallwiseSeat);
router.delete('/:id', deleteHallwiseSeat);

module.exports = router;
