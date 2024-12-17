const express = require('express');
const router = express.Router();
const { getAllShownIn, createShownIn, updateShownIn, deleteShownIn } = require('../controllers/shownInController');

router.get('/', getAllShownIn);
router.post('/', createShownIn);
router.put('/:id', updateShownIn);
router.delete('/:id', deleteShownIn);

module.exports = router;
