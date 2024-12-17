const express = require('express');
const router = express.Router();
const { getAllHalls, createHall, updateHall, deleteHall } = require('../controllers/hallController');

router.get('/', getAllHalls);
router.post('/', createHall);
router.put('/:id', updateHall);
router.delete('/:id', deleteHall);

module.exports = router;
