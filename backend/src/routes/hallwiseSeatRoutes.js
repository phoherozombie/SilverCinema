const express = require('express');
const router = express.Router();
const hallwiseSeatController = require('../controllers/hallwiseSeatController');

router.get('/', hallwiseSeatController.getAllHallwiseSeats);
router.post('/', hallwiseSeatController.createHallwiseSeat);
router.put('/:id', hallwiseSeatController.updateHallwiseSeat);
router.delete('/:id', hallwiseSeatController.deleteHallwiseSeat);

module.exports = router;
